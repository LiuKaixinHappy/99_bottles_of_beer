const main = require('../main/main');

describe('pos', function () {

    it('should show one paragraph', function () {

        let one_line = main.get_normal(99);
        let expected = '99 bottles of beer on the wall, 99 bottles of beer.\n' +
            'Take one down, pass it around, 98 bottles of beer on the wall.\n';
        expect(one_line).toEqual(expected);
    });

    it('should show whole song', function () {
        spyOn(console, 'log');
        main.show_beer_song(2);
        let expected = '2 bottles of beer on the wall, 2 bottles of beer.\n' +
            'Take one down, pass it around, 1 bottles of beer on the wall.\n' +
            '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.\n' +
            'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(console.log).toHaveBeenCalledWith(expected);
    });

});
