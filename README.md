# Gearbox - StyleLint

These rules dictate the SCSS / CSS linting standards endorsed by [Gearbox Design](http://www.gearboxdesign.co.uk).

## Installation

1. Install Node dependencies

		npm install

## Usage

1. Ensure an initial .stylelintrc.js exists in the target directory with appropriate configuration options:
	
	**Example '.stylelintrc.js'**
	```javascript
	module.exports = {
		'extends': [
			'gearbox-stylelint'
		].map(require.resolve),
		// Local override rules...
		'rules': {
			'no-unsupported-browser-features': [true, { // Recommended specific project browser features are noted here.
				'browsers': 'last 2 versions',
				'severity': 'warning'
			}
		}
	};
	``` 
2. Run stylelint standalone (provided stylelint is installed globally) with:

		stylelint <DIRECTORY>

Or via other workflow tooling designed to interface with the stylelint API.

### Links

- [StyleLint Documentation](http://stylelint.io/)