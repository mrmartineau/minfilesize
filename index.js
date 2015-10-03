'use strict';
var gzipSize = require('gzip-size');
var prettyBytes = require('pretty-bytes');
var chalk = require('chalk');
var figures = require('figures');
var arrow = ' ' + figures.arrowRight + ' ';

function format(size) {
	return chalk.red(prettyBytes(size));
}

module.exports = function (src, useGzip) {
	var ret = format(typeof src === 'number' ? src : src.length);

	if (useGzip === true && typeof src !== 'number') {
		ret += arrow + format(gzipSize.sync(src)) + chalk.gray(' (gzip)');
	}

	return ret;
};
