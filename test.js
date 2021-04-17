import test from 'ava';
import readChunk from 'read-chunk';
import isPng from './index.js';

const check = filename => isPng(readChunk.sync(filename, 0, 8));

test('main', t => {
	t.true(check('fixture.png'));
	t.false(check('fixture.jpg'));
});
