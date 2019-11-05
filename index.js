import relativeLuminance from "relative-luminance";

const hexChars = "a-f\\d";
const match3or4Hex = `#?[${hexChars}]{3}[${hexChars}]?`;
const match6or8Hex = `#?[${hexChars}]{6}([${hexChars}]{2})?`;

function hexRgb(hex) {
  hex = hex.replace(/^#/, "");
  let alpha = 255;

  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16);
    hex = hex.substring(0, 6);
  }

  if (hex.length === 4) {
    alpha = parseInt(hex.slice(3, 4).repeat(2), 16);
    hex = hex.substring(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const num = parseInt(hex, 16);
  const red = num >> 16;
  const green = (num >> 8) & 255;
  const blue = num & 255;

  return [red, green, blue, alpha];
}

// http://www.w3.org/TR/WCAG20/#contrast-ratiodef

/**
 * Get the contrast ratio between two relative luminance values
 * @param {number} a luminance value
 * @param {number} b luminance value
 * @returns {number} contrast ratio
 * @example
 * luminance(1, 1); // = 1
 */
export function luminance(a, b) {
  const l1 = Math.max(a, b);
  const l2 = Math.min(a, b);
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
export function rgb(a, b) {
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
export function hex(a, b) {
  return rgb(hexRgb(a, { format: "array" }), hexRgb(b, { format: "array" }));
}

/**
 * Get a textual score from a numeric contrast value
 * @param {number} contrast
 * @returns {string} score
 * @example
 * score(10); // = 'AAA'
 */
export function score(contrast) {
  if (contrast  >= 7) {
    return 'AAA';
  }
  
  if (contrast >= 4.5) {
    return 'AA';
  }
  
  if (contrast >= 3) {
    return 'AA Large';
  }
  
  return 'Fail';
}
