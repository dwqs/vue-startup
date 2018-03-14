module.exports = {
    plugins: [
        require('autoprefixer')({ 
            browsers: [
                'last 5 versions',
                'Android >= 4.0', 
                'iOS >= 8',
                'safari > 8',
                'not ie <= 8'
            ] 
        })
    ]
};
