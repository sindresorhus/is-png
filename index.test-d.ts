/// <reference lib="dom"/>
import {expectType} from 'tsd';
import isPng from './index.js';

expectType<boolean>(isPng(new Uint8Array(0)));
expectType<boolean>(isPng(Buffer.from('')));

const response = await fetch('unicorn.png');
const buffer = await response.arrayBuffer();

isPng(new Uint8Array(buffer));
