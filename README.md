[![Build Status](https://travis-ci.org/tmcw/wcag-contrast.svg)](https://travis-ci.org/tmcw/wcag-contrast)

## wcag color constrast

[WCAG](http://www.w3.org/WAI/intro/wcag.php) [contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef)
measurement and scoring.

### api

### `luminance(a, b)`

Return contrast as a numeric ratio given two relative luminances

### `rgb(a, b)`

Return contrast as a numeric ratio given two rgb triplets

### `hex(a, b)`

Return contrast as a numeric ratio given two hex values

### `score(contrast)`

Return score in ('AAA', 'AA', '') given contrast ratio as number.

### example

```js
var contrast = require('wcag-contrast');
var ratio = contrast.rgb([0, 0, 0], [255, 255, 255]); // is 21
var score = contrast.score(ratio); // is 'AAA'
```
