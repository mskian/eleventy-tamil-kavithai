module.exports = function(eleventyConfig) {

    eleventyConfig.addShortcode(
        'clipboard',
        require('./clipboard')
    );
    eleventyConfig.addShortcode(
        'download',
        require('./download')
    );
    eleventyConfig.addShortcode(
        'copytext',
        require('./copytext')
    );
};