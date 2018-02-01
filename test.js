let read_stream = require("./lib/read_stream");

let stream = Uint8Array.from([
    12,
    23,
    34,
    0x81, 1,
    0x81, 2,
    0xbf, 3,
    0xc0, 0x81, 2,
    0xe0, 0x81, 0x82, 3,
    0xff, 1,
    0xff, 0x80, 1,
    0xff, 0xc0, 1,
    0xff, 0xff, 1,
    0xff, 0xff, 0x80, 2
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
