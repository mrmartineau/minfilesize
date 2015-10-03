# filesizegzip [![Build Status](https://travis-ci.org/mrmartineau/filesizegzip.svg?branch=master)](https://travis-ci.org/mrmartineau/filesizegzip)

> Get a pretty output of the original & gzipped size of a string or buffer

![](screenshot.png)

Useful for logging the difference between original and minified file in e.g. a build-system.


## Install

```sh
$ npm install --save filesizegzip
```


## Usage

```js
var filesizegzip = require('filesizegzip');

var src = '(function(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.a=a===this.a?++a:a})()';

console.log(filesizegzip(src, true));
//=> 91 B → 53 B (gzip)
```

## API

### filesizegzip(src, useGzip)

#### max

*Required*  
Type: `string`, `buffer`, `number`

Original string or its size in bytes.

#### useGzip

Type: `boolean`  
Default: `false`

Show gzipped size of `src`. Pretty slow. Not shown when `src` is a `number`.


## License

MIT © [Zander Martineau](http://martineau.tv)
