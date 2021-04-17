/**
Check if a Buffer/Uint8Array is a [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) image.

@param buffer - The buffer to check. It only needs the first 8 bytes.
@returns Whether `buffer` contains a PNG image.

@example
```
// Node.js:
import readChunk from 'read-chunk';
import isPng from 'is-png';

const buffer = readChunk.sync('unicorn.png', 0, 8);

isPng(buffer);
//=> true

// Browser:
import readChunk from 'read-chunk';

const response = await fetch('unicorn.png');
const buffer = await response.arrayBuffer();

isPng(new Uint8Array(buffer));
//=> true
```
*/
export default function isPng(buffer: Uint8Array | Buffer): boolean;
