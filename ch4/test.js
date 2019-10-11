const {
    should,
    expect,
    assert
} = require('chai');
var Province = require('./province.js');
var sampleProvinceData = require('./sampleProvinceData.js');

// v1
// describe('province', function () {
//     it('shortfall', function () {
//         const asia = new Province(sampleProvinceData());
//         assert.equal(asia.shortfall, 5);
//     });
// });

// v2
// describe('province', function () {
//     it('shortfall', function () {
//         const asia = new Province(sampleProvinceData());
//         expect(asia.shortfall).equal(5);
//     });
// });

// v3
// describe('province', function () {
//     it('shortfall', function () {
//         const asia = new Province(sampleProvinceData());
//         expect(asia.shortfall).equal(5);
//     });
//     it('profit', function () {
//         const asia = new Province(sampleProvinceData());
//         expect(asia.profit).equal(230);
//     });
// });

// v4 反面代表
// describe('province', function () {
//     const asia = new Province(sampleProvinceData()); // DON'T DO THIS
//     it('shortfall', function () {
//         expect(asia.shortfall).equal(5);
//     });
//     it('profit', function () {
//         expect(asia.profit).equal(230);
//     });
// });

// v5 推荐做法 
/* beforeEach子句会在每个测试之前运行一遍， 将asia变量清空， 每次都给它赋一个新的值。 。 这样我就能在每个测试开始前， 为它们各自构建一套新的测试夹
具， 这保证了测试的独立性， 避免了可能带来麻烦的不确定性。 */
// describe('province', function () {
//     let asia;
//     beforeEach(function () {
//         asia = new Province(sampleProvinceData());
//     });
//     it('shortfall', function () {
//         expect(asia.shortfall).equal(5);
//     });
//     it('profit', function () {
//         expect(asia.profit).equal(230);
//     });
// });
// v6 修改测试夹具
// describe('province', function () {
//     let asia;
//     beforeEach(function () {
//         asia = new Province(sampleProvinceData());
//     });
//     it('change production', function () {
//         asia.producers[0].production = 20;
//         expect(asia.shortfall).equal(-6);
//         expect(asia.profit).equal(292);
//     });
// });

// v7 探测边界条件
// describe('no producers', function () {
//     let noProducers;
//     beforeEach(function () {
//         const data = {
//             name: "No proudcers",
//             producers: [],
//             demand: 30,
//             price: 20
//         };
//         noProducers = new Province(data);
//     });
//     it('shortfall', function () {
//         expect(noProducers.shortfall).equal(30);
//     });
//     it('profit', function () {
//         expect(noProducers.profit).equal(0);
//     });
// });

// v8 探测边界条件 如果拿到的是数值类型， 0会是不错的边界条件
// describe('province', function () {
//     let asia;
//     beforeEach(function () {
//         asia = new Province(sampleProvinceData());
//     });
//     it('zero demand', function () {
//         asia.demand = 0;
//         expect(asia.shortfall).equal(-25);
//         expect(asia.profit).equal(0);
//     });
// });

// v9 探测边界条件 负值同样值得一试
// describe('province', function () {
//     let asia;
//     beforeEach(function () {
//         asia = new Province(sampleProvinceData());
//     });
//     it('negative demand', function () {
//         asia.demand = -1;
//         expect(asia.shortfall).equal(-26);
//         expect(asia.profit).equal(-10);
//     });
// });

// v10 探测边界条件 空字符串
// describe('province', function () {
//     let asia;
//     beforeEach(function () {
//         asia = new Province(sampleProvinceData());
//     });
//     it('empty string demand', function () {
//         asia.demand = "";
//         expect(asia.shortfall).NaN;
//         expect(asia.profit).NaN;
//     });
// });

// v11 这个测试结果很有意思,它并不是抛出一个简单的错误说缺额的值不为0
describe('string for producers', function () {
    it('', function () {
        const data = {
            name: "String producers",
            producers: "",
            demand: 30,
            price: 20
        };
        const prov = new Province(data);
        expect(prov.shortfall).equal(0);
    });
});