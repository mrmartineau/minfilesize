'use strict';
var gzipSize = require('gzip-size');
var prettyBytes = require('pretty-bytes');
var chalk = require('chalk');
var figures = require('figures');
var arrow = ' ' + figures.arrowRight + ' ';

function formatY(size) {
	return chalk.yellow(prettyBytes(size));
}
function formatG(size) {
	return chalk.green(prettyBytes(size));
}

module.exports = function (src, useGzip) {
	var ret = formatY(typeof src === 'number' ? src : src.length);

	if (useGzip === true && typeof src !== 'number') {
		ret += arrow + formatG(gzipSize.sync(src)) + chalk.gray(' (gzip)');
	}

	return ret;
};
