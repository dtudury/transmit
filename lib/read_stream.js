const read_index = require("./read_index");
const read_statements = require("./read_statements");
const read_stream = byte => {
    return read_index(byte, index => {
        console.log(index);
        return byte => {
            return read_statements(byte, statements => {
                console.log(statements);
                return read_stream;
            });
        };
    });
};

module.exports = read_stream;
