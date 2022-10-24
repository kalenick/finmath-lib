var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":230,"id":23864,"methods":[{"el":72,"sc":2,"sl":67},{"el":100,"sc":2,"sl":95},{"el":105,"sc":2,"sl":102},{"el":119,"sc":2,"sl":117},{"el":138,"sc":2,"sl":121},{"el":148,"sc":2,"sl":140},{"el":167,"sc":2,"sl":150},{"el":172,"sc":2,"sl":169},{"el":186,"sc":2,"sl":174},{"el":191,"sc":2,"sl":188},{"el":195,"sc":2,"sl":193},{"el":229,"sc":2,"sl":197}],"name":"DisplacedLocalVolatilityModel","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_240":{"methods":[{"sl":67},{"sl":121},{"sl":150},{"sl":174}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":123},{"sl":124},{"sl":152},{"sl":156},{"sl":157},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":185}]},"test_272":{"methods":[{"sl":95}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":98},{"sl":99}]},"test_327":{"methods":[{"sl":67},{"sl":95},{"sl":121},{"sl":140},{"sl":150},{"sl":169},{"sl":174}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":123},{"sl":124},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":147},{"sl":152},{"sl":156},{"sl":157},{"sl":171},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":185}]},"test_54":{"methods":[{"sl":95}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":98},{"sl":99}]},"test_598":{"methods":[{"sl":67},{"sl":121},{"sl":150},{"sl":174}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":123},{"sl":124},{"sl":152},{"sl":156},{"sl":157},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":185}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [240, 598, 327], [240, 598, 327], [240, 598, 327], [240, 598, 327], [240, 598, 327], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [54, 327, 272], [54, 327, 272], [54, 327, 272], [54, 327, 272], [54, 327, 272], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [240, 598, 327], [], [240, 598, 327], [240, 598, 327], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [327], [], [327], [327], [327], [327], [], [327], [], [], [240, 598, 327], [], [240, 598, 327], [], [], [], [240, 598, 327], [240, 598, 327], [], [], [], [], [], [], [], [], [], [], [], [327], [], [327], [], [], [240, 598, 327], [], [240, 598, 327], [], [240, 598, 327], [240, 598, 327], [240, 598, 327], [240, 598, 327], [], [], [], [240, 598, 327], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]