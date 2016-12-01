'use strict';

module.exports = {
	'rules': {
		'function-blacklist': null,
		'function-calc-no-unspaced-operator': [true, { 'severity': 'warning' }],
		'function-comma-newline-after': ['always-multi-line', { 'severity': 'warning' }],
		'function-comma-newline-before': null,
		'function-comma-space-after': ['always-single-line', { 'severity': 'warning' }],
		'function-comma-space-before': ['never', { 'severity': 'warning' }],
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': [0, { 'severity': 'warning' }],
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': null,
		'function-parentheses-space-inside': ['never', { 'severity': 'warning' }],
		'function-url-data-uris': null,
		'function-url-no-scheme-relative': true,
		'function-url-quotes': ['always', { 'severity': 'warning' }],
		'function-url-scheme-whitelist': null,
		'function-whitelist': null,
		'function-whitespace-after': null
	}
};