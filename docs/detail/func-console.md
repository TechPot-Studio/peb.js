# Function `console`
**The last updated version of this function**: *3.0.0-pre.3*
## Browser Support
| <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/chrome.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/firefox.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/safari.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/opera.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: |
| Yes | Yes | Yes | Yes | Yes |

## Usage
```javascript
peb.console(msgType, ...data)
```
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| msgType | `String|Number` |  | Message Type |
| data | `String[]` | Yes | Message |
### `msgType` value
| String | ID | Description |
| :---: | :---: | :---: |
| `log` | 0 | send log to console |
| `info` | 1 | send info to console |
| `error` | 2 | send error to console |
| `warn` | 3 | send warning to console |
| `clear` | 4 | clear console |