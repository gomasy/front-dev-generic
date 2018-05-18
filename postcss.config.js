const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        new autoprefixer({
            browsers: [
                'last 2 versions',
            ],
        }),
    ],
};
