package net.finmath.climate.models.dice;

import java.util.Arrays;
import java.util.function.DoubleUnaryOperator;
import java.util.function.UnaryOperator;
import java.util.logging.Logger;

import net.finmath.climate.models.ClimateModel;
import net.finmath.climate.models.dice.submodels.AbatementCostFunction;
import net.finmath.climate.models.dice.submodels.CarbonConcentration3DScalar;
import net.finmath.climate.models.dice.submodels.DamageFromTemperature;
import net.finmath.climate.models.dice.submodels.EmissionExternalFunction;
import net.finmath.climate.models.dice.submodels.EmissionIndustrialIntensityFunction;
import net.finmath.climate.models.dice.submodels.EvolutionOfCapital;
import net.finmath.climate.models.dice.submodels.EvolutionOfCarbonConcentration;
import net.finmath.climate.models.dice.submodels.EvolutionOfPopulation;
import net.finmath.climate.models.dice.submodels.EvolutionOfProductivity;
import net.finmath.climate.models.dice.submodels.EvolutionOfTemperature;
import net.finmath.climate.models.dice.submodels.ForcingFunction;
import net.finmath.climate.models.dice.submodels.Temperature2DScalar;
import net.finmath.stochastic.RandomVariable;
import net.finmath.stochastic.Scalar;
import net.finmath.time.TimeDiscretization;

/**
 * A simulation of a simplified DICE model (see <code>net.finmath.climate.models.dice.DICEModelTest</code> in src/test/java) for an example usage.
 * 
 * The model just composes the sub-models (evolution equations and functions) from the package {@link net.finmath.climate.models.dice.submodels}.
 * 
 * Note: The code makes some small simplification: it uses a constant savings rate and a constant external forcings.
 */
public class DICEModel implements ClimateModel {

	private static Logger logger = Logger.getLogger("net.finmath.climate");
	
	/*
	 * Input to this class
	 */
	private final TimeDiscretization timeDiscretization;
	private final UnaryOperator<Double> abatementFunction;
	private final UnaryOperator<Double> savingsRateFunction;
	private final double discountRate;

	/*
	 * Simulated values - stored for plotting ande analysis
	 */
	private Temperature2DScalar[] temperature;
	private CarbonConcentration3DScalar[] carbonConcentration;
	private double[] gdp;
	private double[] emission;
	private double[] abatement;
	private double[] damage;
	private double[] capital;
	private double[] population;
	private double[] productivity;
	private double[] welfare;
	private double[] value;

	public DICEModel(TimeDiscretization timeDiscretization, UnaryOperator<Double> abatementFunction, UnaryOperator<Double> savingsRateFunction, double discountRate) {
		super();
		this.timeDiscretization = timeDiscretization;
		this.abatementFunction = abatementFunction;
		this.savingsRateFunction = savingsRateFunction;
		this.discountRate = discountRate;

		int numberOfTimes = this.timeDiscretization.getNumberOfTimes();

		temperature = new Temperature2DScalar[numberOfTimes];
		carbonConcentration = new CarbonConcentration3DScalar[numberOfTimes];
		gdp = new double[numberOfTimes];
		emission = new double[numberOfTimes];
		abatement = new double[numberOfTimes];
		damage = new double[numberOfTimes];
		capital = new double[numberOfTimes];
		population = new double[numberOfTimes];
		productivity = new double[numberOfTimes];
		welfare = new double[numberOfTimes];
		value = new double[numberOfTimes];

		this.init();
	}

	public DICEModel(TimeDiscretization timeDiscretization, UnaryOperator<Double> abatementFunction) {
		this(timeDiscretization, abatementFunction, t -> 0.259029014481802, 0.03);
	}

	private void init() {
		final double timeStep = timeDiscretization.getTimeStep(0);

		/*
		 * Building the model by composing the different functions
		 */

		/*
		 * Note: Calling constructors without additional arguments will use default arguments consistent with the 2016 original model.
		 */

		/*
		 * State vectors initial values
		 */
		final Temperature2DScalar temperatureInitial = new Temperature2DScalar(0.85, 0.0068);
		final CarbonConcentration3DScalar carbonConcentrationInitial = new CarbonConcentration3DScalar(851, 460, 1740);	// Level of Carbon (GtC)

		/*
		 * Sub-Modules: functional dependencies and evolution
		 */

		// Model that describes the damage on the GBP as a function of the temperature-above-normal
		final DoubleUnaryOperator damageFunction = new DamageFromTemperature();

		final EmissionIndustrialIntensityFunction emissionIndustrialIntensityFunction = new EmissionIndustrialIntensityFunction();
		final EmissionExternalFunction emissionExternalFunction = new EmissionExternalFunction();

		final EvolutionOfCarbonConcentration evolutionOfCarbonConcentration = new EvolutionOfCarbonConcentration(timeDiscretization);

		final ForcingFunction forcingFunction = new ForcingFunction();
		final double forcingExternal = 1.0/5.0;		// per year

		final EvolutionOfTemperature evolutionOfTemperature = new EvolutionOfTemperature(timeDiscretization);

		// Abatement
		final AbatementCostFunction abatementCostFunction = new AbatementCostFunction();

		/*
		 * GDP
		 */
		final double K0 = 223;		// Initial Capital
		final double L0 = 7403;		// Initial Population (world in million)
		final double A0 = 5.115;		// Initial Total Factor of Productivity
		final double gamma = 0.3;		// Capital Elasticity in Production Function
		final double gdpInitial = A0*Math.pow(K0,gamma)*Math.pow(L0/1000,1-gamma);

		// Capital
		final EvolutionOfCapital evolutionOfCapital = new EvolutionOfCapital(timeDiscretization);

		// Population
		final EvolutionOfPopulation evolutionOfPopulation = new EvolutionOfPopulation(timeDiscretization);

		// Productivity
		final EvolutionOfProductivity evolutionOfProductivity = new EvolutionOfProductivity(timeDiscretization);

		/*
		 * Set initial values
		 */
		temperature[0] = temperatureInitial;
		carbonConcentration[0] = carbonConcentrationInitial;
		gdp[0] = gdpInitial;
		capital[0] = K0;
		population[0] = L0;
		productivity[0] = A0;
		double utilityDiscountedSum = 0;

		/*
		 * Evolve
		 */
		for(int timeIndex=0; timeIndex<timeDiscretization.getNumberOfTimeSteps(); timeIndex++) {
			double time = timeDiscretization.getTime(timeIndex);

			/*
			 * Evolve geo-physical quantities i -> i+1 (as a function of gdp[i])
			 */

			// Temperature
			
			final double forcing = forcingFunction.apply(carbonConcentration[timeIndex], forcingExternal);
			temperature[timeIndex+1] = evolutionOfTemperature.apply(timeIndex, temperature[timeIndex], forcing);
			

			// Abatement
			
			abatement[timeIndex] = abatementFunction.apply(timeDiscretization.getTime(timeIndex));

			// Carbon

			double emissionIndustrial = emissionIndustrialIntensityFunction.apply(time) * gdp[timeIndex];
			double emissionExternal = emissionExternalFunction.apply(time);
			emission[timeIndex] = (1 - abatement[timeIndex])/(1-abatement[0]) * emissionIndustrial + emissionExternal;
			carbonConcentration[timeIndex+1] = evolutionOfCarbonConcentration.apply(timeIndex, carbonConcentration[timeIndex], emission[timeIndex]);

			/*
			 * Cost
			 */

			damage[timeIndex] = damageFunction.applyAsDouble(temperature[timeIndex].getExpectedTemperatureOfAtmosphere());

			double damageCostAbsolute = damage[timeIndex] * gdp[timeIndex];
			double abatementCostAbsolute = abatementCostFunction.apply(time, abatement[timeIndex]) * emissionIndustrial;

			/*
			 * Evolve economy i -> i+1 (as a function of temperature[i])
			 */
			
			// Remaining gdp
			double gdpNet = gdp[timeIndex] - damageCostAbsolute - abatementCostAbsolute;

			/*
			 * Equivalent (alternative way) to calculate the abatement
			 */
			double abatementCost = abatementCostFunction.apply(time, abatement[timeIndex]) * emissionIndustrialIntensityFunction.apply(time);
			double gdpNet2 = gdp[timeIndex] * (1-damage[timeIndex] - abatementCost);
			if(Math.abs(gdpNet2-gdpNet)/(1+Math.abs(gdpNet)) > 1E-10) logger.warning("Calculation of relative and absolute net GDP does not match.");

		
			// Constant from the original model - in the original model this is a time varying control variable.
			double savingsRate = savingsRateFunction.apply(time);	//0.259029014481802;

			double consumption = (1-savingsRate) * gdpNet;
			double investment = savingsRate * gdpNet;

			capital[timeIndex+1] = evolutionOfCapital.apply(timeIndex).apply(capital[timeIndex], investment);

			/*
			 * Evolve population and productivity for next GDP
			 */
			population[timeIndex+1] = evolutionOfPopulation.apply(timeIndex).apply(population[timeIndex]);
			productivity[timeIndex+1] = evolutionOfProductivity.apply(timeIndex).apply(productivity[timeIndex]);

			double L = population[timeIndex+1];
			double A = productivity[timeIndex+1];
			gdp[timeIndex+1] = A*Math.pow(capital[timeIndex+1],gamma)*Math.pow(L/1000,1-gamma);

			/*
			 * Calculate utility
			 */
			double alpha = 1.45;           // Elasticity of marginal utility of consumption (GAMS elasmu)
			double C = consumption;
			double utility = L*(Math.pow(C / (L/1000),1-alpha)-1)/(1-alpha);

			/*
			 * Discounted utility
			 */
			double discountFactor = Math.exp(- discountRate * time);
			welfare[timeIndex] = utility * discountFactor;

			utilityDiscountedSum = utilityDiscountedSum + utility*discountFactor*timeStep;
			value[timeIndex+1] = utilityDiscountedSum;
		}
	}

	@Override
	public TimeDiscretization getTimeDiscretization() {
		return timeDiscretization;
	}

	@Override
	public RandomVariable getTemperature(double time) {
		return Scalar.of(temperature[timeDiscretization.getTimeIndex(time)].getExpectedTemperatureOfAtmosphere());
	}

	@Override
	public RandomVariable getValue() {
		return Scalar.of(value[value.length-1]);
	}

	@Override
	public RandomVariable[] getValues() {
		return Arrays.stream(value).mapToObj(Scalar::of).toArray(RandomVariable[]::new);
	}

	@Override
	public RandomVariable[] getAbatement() {
		return Arrays.stream(abatement).mapToObj(Scalar::of).toArray(RandomVariable[]::new);
	}

	@Override
	public RandomVariable[] getEmission() {
		return Arrays.stream(emission).mapToObj(Scalar::of).toArray(RandomVariable[]::new);
	}

	@Override
	public net.finmath.climate.models.CarbonConcentration[] getCarbonConcentration() {
		return carbonConcentration;
	}

	@Override
	public net.finmath.climate.models.Temperature[] getTemperature() {
		return temperature;
	}

	@Override
	public RandomVariable[] getDamage() {
		return Arrays.stream(damage).mapToObj(Scalar::of).toArray(RandomVariable[]::new);
	}

	@Override
	public RandomVariable[] getGDP() {
		return Arrays.stream(gdp).mapToObj(Scalar::of).toArray(RandomVariable[]::new);
	}
}