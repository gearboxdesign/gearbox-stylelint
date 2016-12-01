'use strict';

module.exports = {
	'rules': {
		'declaration-bang-space-after': ['never', { 'severity': 'warning' }],
		'declaration-bang-space-before': ['never', { 'severity': 'warning' }],
		'declaration-colon-newline-after': null,
		'declaration-colon-space-after': ['always-single-line', { 'severity': 'warning' }],
		'declaration-colon-space-before': ['never', { 'severity': 'warning' }],
		'declaration-empty-line-before': null,
		'declaration-no-important': [true, { 'severity': 'warning' }],
		'declaration-property-unit-blacklist': null,
		'declaration-property-unit-whitelist': null,
		'declaration-property-value-blacklist': null,
		'declaration-property-value-whitelist': null,
		'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates'] }],
		'declaration-block-no-ignored-properties': true,
		'declaration-block-no-redundant-longhand-properties': [true, { 'severity': 'warning' }],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-properties-order': ['alphabetical', { 'severity': 'warning' }],
		'declaration-block-semicolon-newline-after': ['always', { 'severity': 'warning' }],
		'declaration-block-semicolon-newline-before': null,
		'declaration-block-semicolon-space-after': ['always-single-line', { 'severity': 'warning' }],
		'declaration-block-semicolon-space-before': ['never', { 'severity': 'warning' }],
		'declaration-block-single-line-max-declarations': null
	}
};