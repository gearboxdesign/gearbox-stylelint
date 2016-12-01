'use strict';

module.exports = {
	'rules': {
		'value-keyword-case': 'lower',
		'value-no-vendor-prefix': true,
		'value-list-comma-newline-after': ['always-multi-line', { 'severity': 'warning' }],
		'value-list-comma-newline-before': null,
		'value-list-comma-space-after': ['always-single-line', { 'severity': 'warning' }],
		'value-list-comma-space-before': ['never', { 'severity': 'warning' }],
		'value-list-max-empty-lines': [0, { 'severity': 'warning' }]
	}
};