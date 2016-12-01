'use strict';

module.exports = {
	'rules': {
		'indentation': ['tab', { 'severity': 'warning' }], 
		'max-empty-lines': 2,
		'max-line-length': null,
		'max-nesting-depth': [3, { ignore: ['at-rules-without-declaration-blocks'] }],
		'no-browser-hacks': null,
		'no-descending-specificity': null,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-eol-whitespace': null,
		'no-extra-semicolons': true,
		'no-indistinguishable-colors': [true, { 'severity': 'warning' }],
		'no-invalid-double-slash-comments': null,
		'no-missing-end-of-source-newline': null,
		'no-unknown-animations': true,
		'no-unsupported-browser-features': [true, { 
			'browsers': 'last 2 versions',
			'severity': 'warning'
		}]
	}
};