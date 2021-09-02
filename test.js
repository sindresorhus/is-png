import test from 'ava';
import {readChunkSync} from 'read-chunk';
import isPng from './index.js';

const check = filename => isPng(readChunkSync(filename, {length: 8}));

test('main', t => {
	t.true(check('fixture.png'));
	t.false(check('fixture.jpg'));
});
