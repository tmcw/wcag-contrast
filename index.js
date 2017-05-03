var relativeLuminance = require("relative-luminance");
var hexRgb = require("hex-rgb");

// http://www.w3.org/TR/WCAG20/#contrast-ratiodef

module.exports.luminance = luminance;
module.exports.rgb = rgb;
module.exports.hex = hex;
module.exports.score = score;

/**
 * Get the contrast ratio between two relative luminance values
 * @param {number} a luminance value
 * @param {number} b luminance value
 * @returns {number} contrast ratio
 * @example
 * luminance(1, 1); // = 1
 */
function luminance(a, b) {
  var l1 = Math.max(a, b);
  var l2 = Math.min(a, b);
  return (l1 + 0.05) / (l2 + 0.05);
}

/**
 * Get a score for the contrast between two colors as rgb triplets
 * @param {array} a
 * @param {array} b
 * @returns {number} contrast ratio
 * @example
 * rgb([0, 0, 0], [255, 255, 255]); // = 21
 */
function rgb(a, b) {
  return luminance(relativeLuminance(a), relativeLuminance(b));
}

/**
 * Get a score for the contrast between two colors as hex strings
 * @param {string} a hex value
 * @param {string} b hex value
 * @returns {number} contrast ratio
 * @example
 * hex('#000', '#fff'); // = 21
 */
function hex(a, b) {
  return rgb(hexRgb(a), hexRgb(b));
}

/**
 * Get a textual score from a numeric contrast value
 * @param {number} contrast
 * @returns {string} score
 * @example
 * score(10); // = 'AAA'
 */
function score(contrast) {
  return contrast >= 7 ? "AAA" : contrast >= 4.5 ? "AA" : "";
}
