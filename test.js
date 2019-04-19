import test from 'ava';
import readChunk from 'read-chunk';
import isPng from '.';

function check(filename) {
	return isPng(readChunk.sync(filename, 0, 8));
}

test('main', t => {
	t.true(check('fixture.png'));
	t.false(check('fixture.jpg'));
});
