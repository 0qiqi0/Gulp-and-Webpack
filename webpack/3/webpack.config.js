module.exports={
    entry: "./entry.js",
    output: {
        path: __dirname, //定义了输出的文件夹
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {test: /\.css$/,loader: "style!css"}
        ]
    }
};