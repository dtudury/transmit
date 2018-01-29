
// leading ones == how many additional bytes to read for index
//
// [first byte range], additional bytes, possible
// ================================================
// [0b00000000 - 0b01111111], 0 bytes, 128
// [0b10000000 - 0b10111111], 1 byte,  64 * 256
// [0b11000000 - 0b11011111], 2 bytes, 32 * 256^2
// [0b11100000 - 0b11101111], 3 bytes, 16 * 256^3
// [0b11110000 - 0b11110111], 4 bytes, 8 * 256^4
// [0b11111000 - 0b11111011], 5 bytes, 4 * 256^5
// [0b11111100 - 0b11111101], 6 bytes, 2 * 256^6
// [0b11111110 - 0b11111110], 7 bytes, 1 * 256^7
// [first byte range], [second byte range], additional bytes, possible
// [0b11111111], [0b00000000 - 0b01111111], 7 bytes, 128 * 256^7
// [0b11111111], [0100000000 - 0b10111111], 8 bytes, 64 * 256^8
// [0b11111111], [0110000000 - 0b11011111], 9 bytes, 32 * 256^9
// etc


function byte_to_hex(byte) {
    const hex = byte.toString(16);
    if (hex.length == 2) {
        return hex;
    } else {
        return "0" + hex;
    }
}
module.exports = (byte, callback) => {
    const bytes = [];
    let index = "";
    let masked_byte;
    let mask;
    const index_parser = byte => {
        const hex = byte_to_hex(byte);
        bytes.push(byte);
        if (!mask) {
            mask = 0x80;
            masked_byte = bytes.shift();
        }
        if (mask & masked_byte) {
            mask >>>= 1;
            index += hex;
            return index_parser;
        }
        return callback(index + hex);
    };
    return index_parser(byte);
};
