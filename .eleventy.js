const { DateTime } = require('luxon')
const navigationPlugin = require('@11ty/eleventy-navigation')
const rssPlugin = require('@11ty/eleventy-plugin-rss')
const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml')
const safeLinks = require('@sardine/eleventy-plugin-external-links')
const CleanCSS = require("clean-css")
const { minify } = require("terser")

module.exports = (config) => {
  config.addPlugin(navigationPlugin);
  config.addPlugin(rssPlugin);
  config.addPlugin(tinyHTML);
  config.addPlugin(safeLinks);
  config.addPlugin(require('./plugins'));

  config.addPassthroughCopy('static');
  config.addPassthroughCopy({ static: "/" })
  
  config.setDataDeepMerge(true);

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL, yyyy");
  });

  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  config.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      callback(null, code);
    }
  });

  config.addCollection("tagList", collection => {
    const tagsObject = {}
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => {
          if(typeof tagsObject[tag] === 'undefined') {
            tagsObject[tag] = 1
          } else {
            tagsObject[tag] += 1
          }
        });
    });

    const tagList = []
    Object.keys(tagsObject).forEach(tag => {
      tagList.push({ tagName: tag, tagCount: tagsObject[tag] })
    })
    return tagList.sort((a, b) => b.tagCount - a.tagCount)

  });

  config.addCollection("post", function(collection) {
    const coll = collection.getFilteredByTag("post");
  
    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];
  
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
  
    return coll;
  });

}