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
describe('province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    });
    it('change production', function () {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
});