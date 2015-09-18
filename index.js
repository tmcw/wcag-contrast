var luminance = require('relative-luminance');
var hexRgb = require('hex-rgb');

// http://www.w3.org/TR/WCAG20/#contrast-ratiodef

module.exports.luminance = fromLum;
module.exports.rgb = fromRGB;
module.exports.hex = fromHex;
module.exports.score = score;

/*
 * @param {number} a luminance value
 * @param {number} b luminance value
 * @returns {number} contrast ratio
 */
function fromLum(a, b) {
    var l1 = Math.max(a, b),
        l2 = Math.min(a, b);
    return (l1 + 0.05) / (l2 + 0.05);
}

/*
 * @param {array} a rgb value
 * @param {array} b rgb value
 * @returns {number} contrast ratio
 */
function fromRGB(a, b) {
    return fromLum(luminance(a), luminance(b));
}

/*
 * @param {string} a hex value
 * @param {string} b hex value
 * @returns {number} contrast ratio
 */
function fromHex(a, b) {
    return fromRGB(hexRgb(a), hexRgb(b));
}

/*
 * @param {array} a rgb value
 * @param {array} b rgb value
 * @returns {number} contrast ratio
 */
function score(contrast) {
    return (contrast >= 7) ? 'AAA' : (contrast >= 4.5) ? 'AA' : '';
}
