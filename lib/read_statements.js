const read_index = require("./read_index");
const read_statement = (byte, callback) => {
    if (byte === 0) {
        return callback(null);
    }
    return read_index(byte, index => {
        console.log(index);
        return byte => {
            return read_expression(byte, expression => {
                console.log(expression);
                return callback({index, expression});
            });
        };
    });
};
const read_statements = (byte, callback) => {

};
module.exports = read_statement;
