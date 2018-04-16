const main = require('../main/main');

describe('pos', function () {

    it('should get item and its count', function () {
        let items_and_count = main.get_items_and_count(inputs);
        var expected ={
            ITEM000001: 5,
            ITEM000003: 2,
            ITEM000005: 3
        };
        expect(items_and_count).toEqual(expected);
    });

});
