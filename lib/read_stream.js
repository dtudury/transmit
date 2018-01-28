const read_index = require("./read_index");

function read_stream(byte) {
    return read_index(byte, index => {
        console.log(index);
        return read_stream;
    });
}

module.exports = read_stream;
