import tap from "tap";
import { score, rgb, luminance, hex } from "../index.mjs";

const { test } = tap;

tap.test("contrast", t => {
  t.equal(1, 1);
  t.end();
});

test("#score", t => {
  t.equal(score(0), "", "zero contrast");
  t.equal(score(10), "AAA", "AAA");
  t.equal(score(5), "AA", "AA");
  t.end();
});

test("#rgb", t => {
  const white = [255, 255, 255];
  const black = [0, 0, 0];
  t.equal(rgb(white, white), 1, "same color");
  t.equal(rgb(white, black), 21, "same color");
  t.end();
});

test("#luminance", t => {
  t.equal(luminance(1, 1), 1, "same color");
  t.equal(luminance(1, 0), 21, "opposite luminance");
  t.end();
});

test("#hex", t => {
  const whiteHex = "#ffffff";
  const blackHex = "#000000";
  t.equal(hex(whiteHex, whiteHex), 1, "same color");
  t.equal(hex(whiteHex, blackHex), 21, "opposite luminance");
  t.end();
});
