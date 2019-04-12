var path = require('path'); 
const webpack = require('webpack'); 

module.exports  = {  
    entry: './public/index.js',
    module:{    
        rules: [      
            {   test:/\.js$/,        
                exclude:/node_modules/,        
                loader: 'babel-loader',        
                query: {          
                    presets: ['react', 'es2015']        
                }      
            }    
        ]  
    },  
    output: {    
        filename: 'bundle.js',    
        path: path.resolve(__dirname, 'public')  },
    devServer: {
        contentBase: './public/',
        historyApiFallback: true
        }
    } 