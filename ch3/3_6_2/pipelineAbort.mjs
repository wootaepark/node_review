import {pipeline} from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

const ac = new AbortController();
const signal = ac.signal;

setTimeout(()=>ac.abort(), 1); //1ms 뒤에 중단

await pipeline(
    fs.createReadStream('./readme4.txt'),
    zlib,createGzip(),
    fs.createWriteStream('./readme4.txt.gz'),
    {signal},
);

// pipeline.js 에서 기능 추가
// AbortController를 사용해 파이프를 중단할 수 있다.