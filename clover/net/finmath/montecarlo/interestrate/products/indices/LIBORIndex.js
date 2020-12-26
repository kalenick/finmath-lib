var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":164,"id":28989,"methods":[{"el":49,"sc":2,"sl":41},{"el":65,"sc":2,"sl":58},{"el":75,"sc":2,"sl":73},{"el":116,"sc":2,"sl":77},{"el":125,"sc":2,"sl":123},{"el":139,"sc":2,"sl":127},{"el":149,"sc":2,"sl":146},{"el":156,"sc":2,"sl":151},{"el":163,"sc":2,"sl":158}],"name":"LIBORIndex","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_101":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_104":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_123":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_133":{"methods":[{"sl":41},{"sl":77},{"sl":127}],"name":"testSwap","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":134}]},"test_134":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_136":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_142":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_144":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_152":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_154":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_161":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_167":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_171":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_175":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_189":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_193":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_196":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_198":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_199":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":115},{"sl":128},{"sl":137}]},"test_20":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_221":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_229":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_258":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_264":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_274":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_278":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_3":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_300":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_305":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_319":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_328":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_346":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_35":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_350":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_353":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_355":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_368":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_37":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_375":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_386":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_388":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSwaption","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_392":{"methods":[{"sl":58},{"sl":73}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74}]},"test_395":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_40":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_405":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_427":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSwap","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_44":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":115},{"sl":128},{"sl":137}]},"test_444":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_46":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_465":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_468":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_493":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_50":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_517":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_523":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_530":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_531":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_543":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_546":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_549":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_568":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_575":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_580":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_581":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_589":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_591":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_602":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":115},{"sl":128},{"sl":137}]},"test_611":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_614":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_622":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_628":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_629":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_633":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_9":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_90":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_98":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [133], [], [133], [133], [133], [133], [133], [133], [], [], [], [], [], [], [], [], [], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 392, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 392, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 392, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 392, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 392, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 392, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 392, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [], [], [], [], [], [], [], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 221, 229, 98, 589, 629, 10, 104, 546, 264, 305, 622, 392, 405, 581, 46, 167, 346, 154, 37, 161, 35, 198, 493, 144, 136, 517, 628, 50, 543, 101, 580, 193, 20, 278, 427, 591, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 221, 229, 98, 589, 629, 10, 104, 546, 264, 305, 622, 392, 405, 581, 46, 167, 346, 154, 37, 161, 35, 198, 493, 144, 136, 517, 628, 50, 543, 101, 580, 193, 20, 278, 427, 591, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [133, 549, 199, 368, 90, 602, 531, 444, 274, 44], [], [], [], [], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [], [], [], [], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [], [], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [199, 602, 44], [199, 602, 44], [], [], [199, 602, 44], [199, 602, 44], [199, 602, 44], [199, 602, 44], [], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [], [], [], [], [], [], [], [], [], [], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [40, 523, 395, 9, 133, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [133], [133], [133], [133], [], [133], [], [], [40, 523, 395, 9, 388, 614, 465, 300, 386, 171, 468, 575, 152, 353, 549, 221, 229, 98, 589, 629, 199, 10, 368, 104, 546, 264, 305, 622, 405, 90, 581, 46, 167, 346, 154, 37, 161, 602, 35, 198, 493, 144, 531, 136, 517, 628, 50, 543, 101, 444, 580, 193, 274, 20, 278, 427, 591, 44, 633, 350, 611, 3, 189, 375, 175, 142, 134, 196, 123, 258, 355, 530, 319, 568, 328], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]