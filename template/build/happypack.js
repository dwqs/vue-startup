const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 6 });

module.exports = function (opts) {
    return {
        id: opts.id,
        threadPool: happyThreadPool,
        loaders: opts.loaders,
    }
};
