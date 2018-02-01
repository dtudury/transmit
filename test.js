let read_stream = require("./lib/read_stream");

let stream = Uint8Array.from([
    12,
    23,
    34,
    0x80, 1,
    0x81, 2,
    0xbf, 3,
    0xc0, 1, 2,
    0xe0, 1, 2, 3,
    0xff, 1, 2, 3, 4, 5, 6, 7, 8,
    0xff, 0x80, 1, 2, 3, 4, 5, 6, 7, 8,
    0xff, 0xc0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0xff, 0xff, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    0xff, 0xff, 0x80, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
]);

stream.forEach(byte => {
    read_stream = read_stream(byte);
});


/*
let Goldfish = require("./lib/Goldfish");

let gf = new Goldfish();

for( var i = 0; i < 130; i++) {
    gf.inc();
    console.log(gf.toString());
}

gf = Goldfish.fromInt(130);
console.log(gf.toString());
*/
