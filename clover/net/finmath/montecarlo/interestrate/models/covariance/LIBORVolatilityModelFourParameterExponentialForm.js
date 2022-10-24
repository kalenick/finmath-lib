var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":263,"id":24908,"methods":[{"el":80,"sc":2,"sl":72},{"el":95,"sc":2,"sl":93},{"el":117,"sc":2,"sl":109},{"el":132,"sc":2,"sl":130},{"el":147,"sc":2,"sl":134},{"el":165,"sc":2,"sl":149},{"el":195,"sc":2,"sl":167},{"el":209,"sc":2,"sl":197},{"el":253,"sc":2,"sl":211}],"name":"LIBORVolatilityModelFourParameterExponentialForm","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":167}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_13":{"methods":[{"sl":167}],"name":"testDigitalCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_143":{"methods":[{"sl":167}],"name":"testDigitalCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_164":{"methods":[{"sl":167}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_188":{"methods":[{"sl":167}],"name":"testFRA[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_204":{"methods":[{"sl":167}],"name":"testInterpolatedLastLIBOR[LOG_LINEAR_CORRECTED]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_205":{"methods":[{"sl":167}],"name":"testSwaptionSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_207":{"methods":[{"sl":167}],"name":"testSwaptionSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_210":{"methods":[{"sl":167}],"name":"testBond[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_230":{"methods":[{"sl":167}],"name":"testLIBORInArrearsConvexity[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_231":{"methods":[{"sl":167}],"name":"testSwap[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_245":{"methods":[{"sl":167}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_249":{"methods":[{"sl":109},{"sl":130},{"sl":167}],"name":"testForeignCaplet","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":131},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_265":{"methods":[{"sl":167}],"name":"testSwap[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_268":{"methods":[{"sl":167}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_27":{"methods":[{"sl":167}],"name":"testSwaption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_28":{"methods":[{"sl":109},{"sl":130},{"sl":167}],"name":"testForeignFRA","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":131},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_29":{"methods":[{"sl":167}],"name":"testBond[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_310":{"methods":[{"sl":167}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_329":{"methods":[{"sl":109},{"sl":130},{"sl":167}],"name":"test","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":131},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_331":{"methods":[{"sl":167}],"name":"testSwap","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_341":{"methods":[{"sl":167}],"name":"testFRA[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_344":{"methods":[{"sl":167}],"name":"testBond","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_349":{"methods":[{"sl":167}],"name":"testSwaption","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_352":{"methods":[{"sl":167}],"name":"testLIBORInArrearsConvexity[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_365":{"methods":[{"sl":167}],"name":"testCapletSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_38":{"methods":[{"sl":167}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_414":{"methods":[{"sl":167}],"name":"testCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_420":{"methods":[{"sl":109},{"sl":130},{"sl":167}],"name":"testForeignBond","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":131},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_422":{"methods":[{"sl":167}],"name":"testInterpolatedLastLIBOR[LOG_LINEAR_UNCORRECTED]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_436":{"methods":[{"sl":167}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_446":{"methods":[{"sl":167}],"name":"testInterpolatedLastLIBOR[LINEAR]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_460":{"methods":[{"sl":167}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_464":{"methods":[{"sl":167}],"name":"testSwaption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_465":{"methods":[{"sl":167}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_471":{"methods":[{"sl":72},{"sl":93},{"sl":167}],"name":"testSwaptionCalibration[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":94},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_49":{"methods":[{"sl":109},{"sl":130},{"sl":167}],"name":"testProperties","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":131},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_51":{"methods":[{"sl":167}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_525":{"methods":[{"sl":72},{"sl":93},{"sl":167}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":94},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_530":{"methods":[{"sl":167}],"name":"testCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_539":{"methods":[{"sl":167}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_540":{"methods":[{"sl":167}],"name":"testLIBORInArrearsConvexity[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_542":{"methods":[{"sl":167}],"name":"testBond[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_554":{"methods":[{"sl":72},{"sl":93},{"sl":167}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":94},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_583":{"methods":[{"sl":167}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_599":{"methods":[{"sl":167}],"name":"testLIBORInArrearsConvexity[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_602":{"methods":[{"sl":109}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116}]},"test_636":{"methods":[{"sl":167}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_7":{"methods":[{"sl":167}],"name":"testBond[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":187},{"sl":190},{"sl":193}]},"test_75":{"methods":[{"sl":72},{"sl":93},{"sl":167}],"name":"testSwaptionCalibration[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":94},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_82":{"methods":[{"sl":167}],"name":"testCapletSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_89":{"methods":[{"sl":72},{"sl":93},{"sl":167}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":94},{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]},"test_92":{"methods":[{"sl":167}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":190},{"sl":193}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [], [], [], [], [], [], [], [], [], [], [], [], [], [471, 554, 525, 89, 75], [471, 554, 525, 89, 75], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [49, 329, 420, 249, 28, 602], [49, 329, 420, 249, 28, 602], [49, 329, 420, 249, 28, 602], [49, 329, 420, 249, 28, 602], [49, 329, 420, 249, 28, 602], [49, 329, 420, 249, 28, 602], [49, 329, 420, 249, 28, 602], [49, 329, 420, 249, 28, 602], [], [], [], [], [], [], [], [], [], [], [], [], [], [49, 329, 420, 249, 28], [49, 329, 420, 249, 28], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [], [], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [], [], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [], [471, 583, 164, 51, 414, 207, 525, 460, 89, 27, 143, 636, 75, 539, 82, 92, 365, 205, 204, 349, 268, 13, 436, 464, 465, 530], [], [], [], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [], [], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [], [], [11, 471, 49, 583, 542, 344, 164, 329, 51, 414, 420, 210, 422, 599, 554, 7, 207, 540, 188, 29, 525, 460, 230, 89, 249, 27, 28, 331, 143, 310, 245, 636, 75, 539, 82, 265, 38, 92, 341, 365, 205, 204, 231, 349, 268, 13, 436, 464, 446, 465, 530, 352], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]