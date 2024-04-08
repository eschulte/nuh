const config = {};

module.exports = function(eleventyConfig) {
  // Customized Markdown Export.
  let markdownIt = require("markdown-it");
  let md = markdownIt({html: true})
  md.use(require("markdown-it-anchor"));
  md.use(require("markdown-it-footnote"));
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addLiquidFilter("fixDate", function(value){
    value.setTime(value.getTime() + (5*60*60*1000));
    return value; })

  return config;
};
