const path = require("path");
const glob = require("glob");

module.exports = {
    mode: "production",
    entry: glob.sync('./src/*.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'peb.min.js'
    }
};
