/**
Check if a Buffer/Uint8Array is a [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) image.

@param buffer - The buffer to check. It only needs the first 8 bytes.
@returns Whether `buffer` contains a PNG image.

@example
```
// Node.js:
import {readChunk} from 'read-chunk';
import isPng from 'is-png';

const buffer = await readChunk('unicorn.png', {length: 8});

isPng(buffer);
//=> true
```

@example
```
import isPng from 'is-png';

// Browser:
const response = await fetch('unicorn.png');
const buffer = await response.arrayBuffer();

isPng(new Uint8Array(buffer));
//=> true
```
*/
export default function isPng(buffer: Uint8Array): boolean;
