var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":255,"id":37875,"methods":[{"el":54,"sc":2,"sl":51},{"el":73,"sc":2,"sl":62},{"el":87,"sc":2,"sl":81},{"el":126,"sc":2,"sl":89},{"el":254,"sc":2,"sl":128}],"name":"CalibrationTest","sl":45}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_214":{"methods":[{"sl":89}],"name":"testForwardCurveFromDiscountCurve[LINEAR]","pass":true,"statements":[{"sl":96},{"sl":103},{"sl":110},{"sl":112},{"sl":113},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":122},{"sl":123},{"sl":125}]},"test_273":{"methods":[{"sl":89}],"name":"testForwardCurveFromDiscountCurve[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":96},{"sl":103},{"sl":110},{"sl":112},{"sl":113},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":122},{"sl":123},{"sl":125}]},"test_409":{"methods":[{"sl":89}],"name":"testForwardCurveFromDiscountCurve[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":96},{"sl":103},{"sl":110},{"sl":112},{"sl":113},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":122},{"sl":123},{"sl":125}]},"test_524":{"methods":[{"sl":128}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":137},{"sl":140},{"sl":150},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":165},{"sl":168},{"sl":169},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":194},{"sl":195},{"sl":197},{"sl":207},{"sl":210},{"sl":212},{"sl":215},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":225},{"sl":226},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":241},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":248},{"sl":250},{"sl":251},{"sl":253}]},"test_559":{"methods":[{"sl":128}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":137},{"sl":140},{"sl":150},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":165},{"sl":168},{"sl":169},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":194},{"sl":195},{"sl":197},{"sl":207},{"sl":210},{"sl":212},{"sl":215},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":225},{"sl":226},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":241},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":248},{"sl":250},{"sl":251},{"sl":253}]},"test_608":{"methods":[{"sl":128}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":137},{"sl":140},{"sl":150},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":165},{"sl":168},{"sl":169},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":194},{"sl":195},{"sl":197},{"sl":207},{"sl":210},{"sl":212},{"sl":215},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":225},{"sl":226},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":241},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":248},{"sl":250},{"sl":251},{"sl":253}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [214, 409, 273], [], [], [], [], [], [], [214, 409, 273], [], [], [], [], [], [], [214, 409, 273], [], [], [], [], [], [], [214, 409, 273], [], [214, 409, 273], [214, 409, 273], [], [], [214, 409, 273], [214, 409, 273], [214, 409, 273], [214, 409, 273], [], [], [214, 409, 273], [214, 409, 273], [], [214, 409, 273], [], [], [559, 524, 608], [], [], [], [], [], [], [], [], [559, 524, 608], [], [], [559, 524, 608], [], [], [], [], [], [], [], [], [], [559, 524, 608], [], [], [], [], [], [], [559, 524, 608], [], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [], [], [559, 524, 608], [], [], [559, 524, 608], [559, 524, 608], [], [], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [], [], [], [], [], [], [], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [], [559, 524, 608], [], [559, 524, 608], [559, 524, 608], [], [559, 524, 608], [], [], [], [], [], [], [], [], [], [559, 524, 608], [], [], [559, 524, 608], [], [559, 524, 608], [], [], [559, 524, 608], [], [], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [], [], [559, 524, 608], [559, 524, 608], [], [], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [], [], [], [], [], [], [], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [559, 524, 608], [], [559, 524, 608], [], [559, 524, 608], [559, 524, 608], [], [559, 524, 608], [], []]