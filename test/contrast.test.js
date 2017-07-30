var { hex, luminance, score, rgb } = require("../");
require("tap").mochaGlobals();
var should = require("should");

const white = [255, 255, 255];
const black = [0, 0, 0];

const whiteHex = "#ffffff";
const blackHex = "#000000";

describe("contrast", () => {
  describe("#score", () => {
    it("zero contrast", () => {
      score(0).should.equal("");
    });
    it("AAA-level", () => {
      score(10).should.equal("AAA");
    });
    it("AA-level", () => {
      score(5).should.equal("AA");
    });
  });

  describe("#rgb", () => {
    it("same color", () => {
      rgb(white, white).should.equal(1);
    });
    it("same color", () => {
      rgb(white, black).should.equal(21);
    });
  });

  describe("#luminance", () => {
    it("same color", () => {
      luminance(1, 1).should.equal(1);
    });
    it("opposite luminance", () => {
      luminance(1, 0).should.equal(21);
    });
  });

  describe("#hex", () => {
    it("same color", () => {
      hex(whiteHex, whiteHex).should.equal(1);
    });
    it("opposite luminance", () => {
      hex(whiteHex, blackHex).should.equal(21);
    });
  });
});
