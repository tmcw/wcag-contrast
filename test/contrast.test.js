var expect = require('expect.js'),
    contrast = require('../');

var white = [255, 255, 255];
var black = [0, 0, 0];

var whiteHex = '#ffffff';
var blackHex = '#000000';

describe('contrast', function() {
    describe('#score', function() {
        it('zero contrast', function() {
            expect(contrast.score(0)).to.eql('');
        });
        it('AAA-level', function() {
            expect(contrast.score(10)).to.eql('AAA');
        });
        it('AA-level', function() {
            expect(contrast.score(5)).to.eql('AA');
        });
    });

    describe('#rgb', function() {
        it('same color', function() {
            expect(contrast.rgb(white, white)).to.eql(1);
        });
        it('same color', function() {
            expect(contrast.rgb(white, black)).to.eql(21);
        });
    });

    describe('#luminance', function() {
        it('same color', function() {
            expect(contrast.luminance(1, 1)).to.eql(1);
        });
        it('opposite luminance', function() {
            expect(contrast.luminance(1, 0)).to.eql(21);
        });
    });

    describe('#hex', function() {
        it('same color', function() {
            expect(contrast.hex(whiteHex, whiteHex)).to.eql(1);
        });
        it('opposite luminance', function() {
            expect(contrast.hex(whiteHex, blackHex)).to.eql(21);
        });
    });
});
