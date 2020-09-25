# Function `ajax()`
The last updated version of this function: *2.1.0*
## Browser Support
| <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/chrome.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/firefox.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/safari.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/opera.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 1| 1.2 | 10 | 12 |
## Usage
```javascript
peb.ajax(type, url, success, fail)
peb.ajax(config)
```
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| type | `String` | | AJAX request method |
| url | `String` | | Request URL |
| success | `Function` | | Function to run on success |
| fail | `Function` | | Function to run on fail |
| config | `Object` | | Configs |

Initiate an AJAX request to the URL. You can fill in the parameters in order, or use an Object to pass in. This may be difficult to understand, you can take a look at the following example:
```javascript
'use strict';
peb.ajax('GET', 'https://example.url', () => {}, () => {console.log("Fail")});
// Or this
peb.ajax({
    type: 'GET',
    url: 'https://example.url',
    fail: () => {
        console.log("Fail")
    }
});
```
