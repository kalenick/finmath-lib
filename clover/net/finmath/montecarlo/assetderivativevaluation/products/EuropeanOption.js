var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":145,"id":15830,"methods":[{"el":52,"sc":2,"sl":46},{"el":66,"sc":2,"sl":60},{"el":75,"sc":2,"sl":73},{"el":108,"sc":2,"sl":87},{"el":122,"sc":2,"sl":110},{"el":128,"sc":2,"sl":124},{"el":132,"sc":2,"sl":130},{"el":136,"sc":2,"sl":134},{"el":140,"sc":2,"sl":138},{"el":144,"sc":2,"sl":142}],"name":"EuropeanOption","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_123":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_127":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_132":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_138":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_140":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_150":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0.05]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_151":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_152":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_162":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_19":{"methods":[{"sl":87}],"name":"testProductAADSensitivities[0]","pass":true,"statements":[{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_190":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_215":{"methods":[{"sl":60},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_232":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_258":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_262":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_282":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_284":{"methods":[{"sl":87}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@50de0926,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2473b9ce,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@60438a68,\n ID=2], randomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@140e5a13,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@3439f68d,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@60438a68,\n ID=2]]]]-EuropeanOption [maturity=5.0, strike=1.2840254166877414, underlyingIndex=0, nameOfUnderliyng=null]]","pass":true,"statements":[{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_307":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductImplementation[displacement=0.01]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_312":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_323":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_328":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_329":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_332":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_333":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_340":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_380":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testHedgePerformance","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_397":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_399":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_402":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_44":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_467":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[xi=0.5}]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_468":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_5":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_501":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_506":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_508":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_512":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_515":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[RandomVariableFromArrayFactory TestFunctionMonteCarloEuropeanOption(1,3,1,1)]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_523":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_53":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[RandomVariableDifferentiableAADFactory TestFunctionMonteCarloEuropeanOption(1,3,1,1)]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_533":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_557":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_566":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_579":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_585":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_592":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_644":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_70":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_77":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_78":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_87":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"test[xi=0}]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_90":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]},"test_93":{"methods":[{"sl":46},{"sl":87},{"sl":110}],"name":"test","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":121}]},"test_99":{"methods":[{"sl":60},{"sl":73},{"sl":87}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":74},{"sl":92},{"sl":95},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":107}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [232, 190, 523, 93], [232, 190, 523, 93], [232, 190, 523, 93], [232, 190, 523, 93], [232, 190, 523, 93], [232, 190, 523, 93], [], [], [], [], [], [], [], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [], [], [], [], [], [], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 380, 515, 44, 340, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 585, 78, 87, 512, 566, 508, 468, 402, 533, 579, 5, 333, 53, 70, 127], [], [], [], [], [], [], [], [], [], [], [], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [], [], [], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [], [151, 557, 644, 258, 140, 90, 332, 329, 132, 77, 99, 467, 19, 380, 515, 44, 340, 215, 506, 397, 262, 162, 323, 328, 123, 592, 399, 282, 150, 312, 138, 152, 307, 501, 284, 585, 78, 232, 87, 512, 566, 190, 508, 468, 402, 533, 523, 579, 5, 333, 53, 93, 70, 127], [], [], [232, 190, 523, 93], [], [232, 190, 523, 93], [], [232, 190, 523, 93], [232, 190, 523, 93], [232, 190, 523, 93], [], [], [], [], [232, 190, 523, 93], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]