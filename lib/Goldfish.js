// base 128 number, 8th bit on (>=128) means more.
// (base 129 is just as easy but seems awkward)

function byte_to_hex(byte) {
    const hex = byte.toString(16);
    if (hex.length == 2) {
        return hex;
    } else {
        return "0" + hex;
    }
}

function int_to_tank(int) {
    if (int > 0) {
        const tank = [];
        int = Math.floor(int);
        tank.push(int % 128);
        int = Math.floor(int / 128);
        while (int) {
            tank.unshift(int % 128 + 128);
            int = Math.floor(int / 128);
        }
        return tank;
    } else {
        return [0];
    }
}

class Goldfish {
    constructor(tank = [0]) {
        this.tank = tank;
    }
    inc() {
        for (let i = this.tank.length - 1; i >= 0; i--) {
            this.tank[i]++;
            if (this.tank[i] % 128) {
                return;
            }
            this.tank[i] -= 128;
        }
        this.tank[0] = 129;
        this.tank.push(0);
    }
    toString() {
        return this.tank.reduce((str, byte) => str + byte_to_hex(byte), "");
    }
    toInt() {
        return this.tank.reduce((int, byte) => int * 128 + byte % 128, 0);
    }
    static fromInt(int) {
        return new Goldfish(int_to_tank(int));
    }
    static reader(byte, callback) {
        const tank = [];
        const byte_reader = byte => {
            tank.push(byte);
            if (byte >= 128) {
                return byte_reader;
            }
            const gf = new Goldfish(tank);
            return callback(gf.toInt() + " " + gf.toString());
        };
        return byte_reader(byte);
    }
}

module.exports = Goldfish;
