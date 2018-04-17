function get_normal(current) {
    let next = current - 1;
    return `${current} bottles of beer on the wall, ${current} bottles of beer.\n` +
        `Take one down, pass it around, ${next} bottles of beer on the wall.\n`;
}

function get_last() {
    return '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n' +
        'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.';
}

function show_beer_song(beer_num) {
    let song = '';
    for (let i = beer_num; i > 1; i--) {
        song += get_normal(i);
    }
    song += get_last();
    console.log(song);
}

module.exports = {get_normal, show_beer_song};
