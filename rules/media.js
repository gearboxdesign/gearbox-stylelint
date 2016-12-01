'use strict';

module.exports = {
	'rules': {
		'media-feature-colon-space-after': ['always', { 'severity': 'warning' }],
		'media-feature-colon-space-before': ['never', { 'severity': 'warning' }],
		'media-feature-name-blacklist': null,
		'media-feature-name-case': 'lower',
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-no-missing-punctuation': true,
		'media-feature-parentheses-space-inside': ['never', { 'severity': 'warning' }],
		'media-feature-range-operator-space-after': ['always', { 'severity': 'warning' }],
		'media-feature-range-operator-space-before': ['always', { 'severity': 'warning' }],
		'custom-media-pattern': null,
		'media-query-list-comma-newline-after': ['always-multi-line', { 'severity': 'warning' }],
		'media-query-list-comma-newline-before': null,
		'media-query-list-comma-space-after': ['always-single-line', { 'severity': 'warning' }],
		'media-query-list-comma-space-before': ['never', { 'severity': 'warning' }]
	}
};