var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":73,"id":1099,"methods":[{"el":37,"sc":2,"sl":32},{"el":46,"sc":2,"sl":44},{"el":56,"sc":2,"sl":48},{"el":61,"sc":2,"sl":58},{"el":66,"sc":2,"sl":63},{"el":71,"sc":2,"sl":68}],"name":"EuropeanOption","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_190":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_232":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_437":{"methods":[{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test[net.finmath.fouriermethod.products.EuropeanOption@10a035a0]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_44":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_467":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test[xi=0.5}]","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_50":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_512":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_523":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_77":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_87":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test[xi=0}]","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_93":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 93], [232, 77, 87, 523, 50, 512, 190, 44, 467, 93], [232, 77, 87, 523, 50, 512, 190, 44, 467, 93], [232, 77, 87, 523, 50, 512, 190, 44, 467, 93], [232, 77, 87, 523, 50, 512, 190, 44, 467, 93], [], [], [], [], [], [], [], [77, 87, 50, 512, 44, 467], [77, 87, 50, 512, 44, 467], [], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [232, 77, 87, 523, 50, 512, 190, 44, 467, 437, 93], [], [], []]