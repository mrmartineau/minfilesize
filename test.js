'use strict';
var test = require('ava');
var chalk = require('chalk');
var filesizegzip = require('./');

var src = 'function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a}function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a}function smoothRangeRandom(b,c){var a=Math.floor(Math.random()*(c-b+1)+b);return this.prev=a===this.prev?++a:a};';

test('should generate correct output for strings', function (t) {
	t.assert(chalk.stripColor(filesizegzip(src)) === '334 B');
	t.assert(chalk.stripColor(filesizegzip(src, true)) === '334 B → 120 B (gzip)');
});

test('should generate correct output for buffers', function (t) {
	t.assert(chalk.stripColor(filesizegzip(new Buffer(src))) === '334 B');
	t.assert(chalk.stripColor(filesizegzip(new Buffer(src), true)) === '334 B → 120 B (gzip)');
});

test('should generate correct output for integers', function (t) {
	t.assert(chalk.stripColor(filesizegzip(src.length)) === '334 B');
	t.assert(chalk.stripColor(filesizegzip(src.length, true)) === '334 B');
});
