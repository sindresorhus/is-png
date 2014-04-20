'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isPng = require('./index');

function check(filename) {
	return isPng(readChunk.sync(filename, 0, 4));
}

it('should detect PNG from Buffer', function () {
	assert(check('fixture.png'));
	assert(!check('fixture.jpg'));
});
