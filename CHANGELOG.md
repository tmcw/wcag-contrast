# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/tmcw/wcag-contrast/compare/v2.1.2-0...v3.0.0) (2019-11-05)


### ⚠ BREAKING CHANGES

* alters the output of failing tests. If you're using the empty string as a failure status, please adjust to looking for 'Fail' instead.

This adds `AA Large` from 3-4.5 and returns `'Fail'` when under 3 now. The empty string I think could be misconstrued as an error, since the output is not explicit.

### Features

* Support AA Large and Fail ([#57](https://github.com/tmcw/wcag-contrast/issues/57)) ([9dccf2a](https://github.com/tmcw/wcag-contrast/commit/9dccf2a24f9e20b9748379cb6d57970c76d5e844))

<a name="2.1.2-0"></a>
## [2.1.2-0](https://github.com/tmcw/wcag-contrast/compare/v2.1.1...v2.1.2-0) (2018-09-24)



<a name="2.1.1"></a>
## [2.1.1](https://github.com/tmcw/wcag-contrast/compare/v2.1.0...v2.1.1) (2018-09-24)



<a name="2.1.0"></a>
# [2.1.0](https://github.com/tmcw/wcag-contrast/compare/v2.0.0...v2.1.0) (2018-08-20)


### Features

* unpkg field ([eb9e840](https://github.com/tmcw/wcag-contrast/commit/eb9e840))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/tmcw/wcag-contrast/compare/v1.2.0...v2.0.0) (2018-08-20)


### Features

* use microbundle, switch from tap to tape, improve structure ([3db73e2](https://github.com/tmcw/wcag-contrast/commit/3db73e2))


### BREAKING CHANGES

* new entry points, dependencies now bundled.



<a name="1.2.0"></a>
# [1.2.0](https://github.com/tmcw/wcag-contrast/compare/v1.0.0...v1.2.0) (2018-04-16)


### Bug Fixes

* Move esm dependency out of devDeps ([26a1553](https://github.com/tmcw/wcag-contrast/commit/26a1553))


### Features

* Internalize hexRgb dependency, making this and its dependents all es6-safe ([def207c](https://github.com/tmcw/wcag-contrast/commit/def207c))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/tmcw/wcag-contrast/compare/v1.0.0...v1.1.0) (2018-03-21)


### Features

* Internalize hexRgb dependency, making this and its dependents all es6-safe ([95a16e9](https://github.com/tmcw/wcag-contrast/commit/95a16e9))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/tmcw/wcag-contrast/compare/v0.1.1...v1.0.0) (2018-03-21)


### Bug Fixes

* **package:** update relative-luminance to version 1.0.0 ([59d9229](https://github.com/tmcw/wcag-contrast/commit/59d9229))



<a name="0.1.2-0"></a>
## [0.1.2-0](https://github.com/tmcw/wcag-contrast/compare/v0.1.1...v0.1.2-0) (2018-03-21)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/tmcw/wcag-contrast/compare/v0.1.0...v0.1.1) (2018-01-10)


### Bug Fixes

* **package:** update hex-rgb to version 2.0.0 ([2ef3eb7](https://github.com/tmcw/wcag-contrast/commit/2ef3eb7))
* **package:** update relative-luminance to version 0.0.1 ([497542e](https://github.com/tmcw/wcag-contrast/commit/497542e))



# 0.1.0

* Add `hex(a, b)` method
