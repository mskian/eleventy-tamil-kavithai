module.exports = function(eleventyConfig) {

    eleventyConfig.addShortcode(
        'clipboard',
        require('./clipboard')
    );
};