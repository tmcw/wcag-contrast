const test = require("tape");
const c = require("../");

test("contrast", t => {
  t.equal(1, 1);
  t.end();
});

test("#score", t => {
  t.equal(c.score(0), "Fail", "zero contrast");
  t.equal(c.score(10), "AAA", "AAA");
  t.equal(c.score(5), "AA", "AA");
  t.end();
});

test("#rgb", t => {
  const white = [255, 255, 255];
  const black = [0, 0, 0];
  t.equal(c.rgb(white, white), 1, "same color");
  t.equal(c.rgb(white, black), 21, "same color");
  t.end();
});

test("#luminance", t => {
  t.equal(c.luminance(1, 1), 1, "same color");
  t.equal(c.luminance(1, 0), 21, "opposite luminance");
  t.end();
});

test("#hex", t => {
  const whiteHex = "#ffffff";
  const blackHex = "#000000";
  t.equal(c.hex(whiteHex, whiteHex), 1, "same color");
  t.equal(c.hex(whiteHex, blackHex), 21, "opposite luminance");
  t.end();
});
