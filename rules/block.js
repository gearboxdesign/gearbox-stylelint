'use strict';

module.exports = {
	'rules': {
		'block-closing-brace-empty-line-before': ['never', { 'severity': 'warning' }],
		'block-closing-brace-newline-after': ['always-multi-line', { 'severity': 'warning' }],
		'block-closing-brace-newline-before': ['always-multi-line', { 'severity': 'warning' }],
		'block-closing-brace-space-after': null,
		'block-closing-brace-space-before': ['always-single-line', { 'severity': 'warning' }],
		'block-no-empty': true,
		'block-no-single-line': null,
		'block-opening-brace-newline-after': ['always-multi-line', { 'severity': 'warning' }],
		'block-opening-brace-newline-before': null,
		'block-opening-brace-space-after': ['always-single-line', { 'severity': 'warning' }],
		'block-opening-brace-space-before': ['always', { 'severity': 'warning' }]
	}
};