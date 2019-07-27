
let path = require('path')

module.exports = {
    entry: './app/index.js',
    mode: "none",
    output : {
        path: path.join(__dirname + '/public', "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
