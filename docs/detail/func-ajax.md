# Function `ajax()`
The last updated version of this function: *2.1.0*
## Browser Support
| <img src="https://simpleicons.org/icons/googlechrome.svg" width="20" /> | <img src="https://simpleicons.org/icons/firefox.svg" width="20" /> | <img src="https://simpleicons.org/icons/internetexplorer.svg" width="20" /> | <img src="https://simpleicons.org/icons/safari.svg" width="20" /> | <img src="https://simpleicons.org/icons/opera.svg" width="20" /> | <img src="https://simpleicons.org/icons/microsoftedge.svg" width="20" /> |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1 | 5 | 10 | 1.2 | 12 |
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

Initiate an AJAX request to the URL. You can fill in the parameters in order, or use an Object to pass in. This may be difficult to understand, you can take a look at the following example.
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
