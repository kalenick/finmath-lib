var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":115,"id":34112,"methods":[{"el":35,"sc":2,"sl":33},{"el":44,"sc":2,"sl":42},{"el":58,"sc":2,"sl":54},{"el":63,"sc":2,"sl":60},{"el":78,"sc":2,"sl":65},{"el":93,"sc":2,"sl":80},{"el":98,"sc":2,"sl":95},{"el":104,"sc":2,"sl":100},{"el":109,"sc":2,"sl":106},{"el":114,"sc":2,"sl":111}],"name":"AnalyticModelWithVolatilityCubes","sl":22}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_125":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_17":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testMulti","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_181":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testCalibration","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_236":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_264":{"methods":[{"sl":60}],"name":"testExpectation","pass":true,"statements":[{"sl":62}]},"test_274":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_342":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testSimplified","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_377":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testBasic","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_438":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testCalibration","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_500":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_522":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_553":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_564":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]},"test_582":{"methods":[{"sl":54},{"sl":60},{"sl":65},{"sl":95},{"sl":111}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":62},{"sl":68},{"sl":70},{"sl":74},{"sl":75},{"sl":77},{"sl":97},{"sl":113}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [], [236, 274, 564, 582, 553, 264, 522, 377, 125, 181, 438, 342, 500, 17], [], [236, 274, 564, 582, 553, 264, 522, 377, 125, 181, 438, 342, 500, 17], [], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [], [], [], [], [], [], [], [], [], [], [], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], [236, 274, 564, 582, 553, 522, 377, 125, 181, 438, 342, 500, 17], [], []]