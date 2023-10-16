const autoprefixer = require('autoprefixer');
const postcssNesting = require('postcss-nesting');
const tailwindcss = require('tailwindcss');

const config = {
	plugins: [
    postcssNesting,
    autoprefixer,
    tailwindcss
  ]
};

module.exports = config;
