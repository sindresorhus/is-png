# is-png

> Check if a Buffer/Uint8Array is a [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) image

## Install

```
$ npm install is-png
```

## Usage

##### Node.js

```js
import readChunk from 'read-chunk'; // npm install read-chunk
import isPng from 'is-png';

const buffer = readChunk.sync('unicorn.png', 0, 8);

isPng(buffer);
//=> true
```

##### Browser

```js
import isPng from 'is-png';

const response = await fetch('unicorn.png');
const buffer = await response.arrayBuffer();

isPng(new Uint8Array(buffer));
//=> true
```

## API

### isPng(buffer)

Accepts a Buffer (Node.js) or Uint8Array. Returns a `boolean` of whether `buffer` is a PNG image.

#### buffer

The buffer to check. It only needs the first 8 bytes.

## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array/ArrayBuffer
