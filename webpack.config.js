const path = require("path");

module.exports = {
    entry: ["./src/peb.js"],
    output: {
        path: path.join(__dirname, './dist'),
        filename: '.js'
    }
}
