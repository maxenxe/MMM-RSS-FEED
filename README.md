# MMM-RSS-FEED
Display any RSS feed on your MagicMirror.

[![Preview](https://s28.postimg.org/v6uhxrhbx/github.gif)](https://postimg.org/image/vjlw3xzll/)
Word of the day RSS feed (red border is edit added)
## Installing the module

To install the module, just clone this repository to your _modules_ folder:
`git clone https://github.com/Taolanoz/MMM-RSS-FEED`.

## Updating the module

Pull the git updates: `git pull`.
Then update dependencies in the module folder: `cd MMM-RSS-FEED`.


## Using the module
To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
		 {
			module: 'MMM-RSS-FEED',
			position: 'top_bar',
			config: {
			url: ''
			}
		 },
]
````

## Configuration options

| **Option** | **Default** | **Description** |
| :---: | :---: | --- |
| url | '' | <BR>The url of the RSS feed <BR><EM> Must be a string </EM><P> |




