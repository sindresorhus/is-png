'use strict';

module.exports = buffer => {
	if (!buffer || buffer.length < 8) {
		return false;
	}

	return (
		buffer[0] === 137 &&
		buffer[1] === 80 &&
		buffer[2] === 78 &&
		buffer[3] === 71 &&
		buffer[4] === 13 &&
		buffer[5] === 10 &&
		buffer[6] === 26 &&
		buffer[7] === 10
	);
};
