const Goldfish = require("./Goldfish");
//const read_statements = require("./read_statements");
const read_stream = byte => {
    return Goldfish.reader(byte, index => {
        console.log(index);
                return read_stream;
                /*
        return byte => {
            return read_statements(byte, statements => {
                console.log(statements);
                return read_stream;
            });
        };
        */
    });
};

module.exports = read_stream;
