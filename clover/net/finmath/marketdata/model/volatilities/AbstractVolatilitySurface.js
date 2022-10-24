var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":158,"id":5272,"methods":[{"el":42,"sc":2,"sl":33},{"el":48,"sc":2,"sl":44},{"el":53,"sc":2,"sl":50},{"el":58,"sc":2,"sl":55},{"el":63,"sc":2,"sl":60},{"el":68,"sc":2,"sl":65},{"el":73,"sc":2,"sl":70},{"el":131,"sc":2,"sl":86},{"el":145,"sc":2,"sl":143},{"el":149,"sc":2,"sl":147},{"el":153,"sc":2,"sl":151},{"el":157,"sc":2,"sl":155}],"name":"AbstractVolatilitySurface","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":33},{"sl":70},{"sl":86}],"name":"testDecayVolatility","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":72},{"sl":88},{"sl":89}]},"test_169":{"methods":[{"sl":33},{"sl":50},{"sl":55},{"sl":70},{"sl":86},{"sl":147},{"sl":151},{"sl":155}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":52},{"sl":57},{"sl":72},{"sl":88},{"sl":89},{"sl":92},{"sl":95},{"sl":99},{"sl":100},{"sl":102},{"sl":104},{"sl":105},{"sl":111},{"sl":114},{"sl":116},{"sl":117},{"sl":119},{"sl":122},{"sl":125},{"sl":126},{"sl":129},{"sl":148},{"sl":152},{"sl":156}]},"test_212":{"methods":[{"sl":33},{"sl":70},{"sl":86}],"name":"testFlatVolatilityUsingA","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":72},{"sl":88},{"sl":89}]},"test_308":{"methods":[{"sl":33},{"sl":70},{"sl":86}],"name":"testIntegratedFourParameterExponentialVolatilityParamSetCZero","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":72},{"sl":88},{"sl":89}]},"test_325":{"methods":[{"sl":50},{"sl":55},{"sl":70},{"sl":86}],"name":"testCap","pass":true,"statements":[{"sl":52},{"sl":57},{"sl":72},{"sl":88},{"sl":89}]},"test_382":{"methods":[{"sl":33},{"sl":50},{"sl":55},{"sl":70},{"sl":86},{"sl":147},{"sl":151}],"name":"testVolatilityCalibration[VOLATILITYLOGNORMAL]","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":52},{"sl":57},{"sl":72},{"sl":88},{"sl":89},{"sl":148},{"sl":152}]},"test_451":{"methods":[{"sl":33},{"sl":70},{"sl":86}],"name":"testFlatVolatilityUsingD","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":72},{"sl":88},{"sl":89}]},"test_547":{"methods":[{"sl":33},{"sl":86},{"sl":143},{"sl":147},{"sl":151},{"sl":155}],"name":"testConversions","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":88},{"sl":92},{"sl":95},{"sl":99},{"sl":100},{"sl":102},{"sl":104},{"sl":105},{"sl":111},{"sl":114},{"sl":116},{"sl":117},{"sl":119},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":129},{"sl":144},{"sl":148},{"sl":152},{"sl":156}]},"test_58":{"methods":[{"sl":33},{"sl":70},{"sl":86}],"name":"testIntegratedFourParameterExponentialVolatilityParamSet1","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":72},{"sl":88},{"sl":89}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [106, 212, 382, 308, 169, 58, 547, 451], [], [106, 212, 382, 308, 169, 58, 547, 451], [106, 212, 382, 308, 169, 58, 547, 451], [106, 212, 382, 308, 169, 58, 547, 451], [106, 212, 382, 308, 169, 58, 547, 451], [106, 212, 382, 308, 169, 58, 547, 451], [106, 212, 382, 308, 169, 58, 547, 451], [106, 212, 382, 308, 169, 58, 547, 451], [], [], [], [], [], [], [], [], [325, 382, 169], [], [325, 382, 169], [], [], [325, 382, 169], [], [325, 382, 169], [], [], [], [], [], [], [], [], [], [], [], [], [106, 212, 325, 382, 308, 169, 58, 451], [], [106, 212, 325, 382, 308, 169, 58, 451], [], [], [], [], [], [], [], [], [], [], [], [], [], [106, 212, 325, 382, 308, 169, 58, 547, 451], [], [106, 212, 325, 382, 308, 169, 58, 547, 451], [106, 212, 325, 382, 308, 169, 58, 451], [], [], [169, 547], [], [], [169, 547], [], [], [], [169, 547], [169, 547], [], [169, 547], [], [169, 547], [169, 547], [], [], [], [], [], [169, 547], [], [], [169, 547], [], [169, 547], [169, 547], [], [169, 547], [547], [], [169, 547], [547], [], [169, 547], [169, 547], [], [], [169, 547], [], [], [], [], [], [], [], [], [], [], [], [], [], [547], [547], [], [], [382, 169, 547], [382, 169, 547], [], [], [382, 169, 547], [382, 169, 547], [], [], [169, 547], [169, 547], [], []]