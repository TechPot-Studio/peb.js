# Function `sel()`
**The last updated version of this function**: *2.0.0*  
## Browser Support
| <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/chrome.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/firefox.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/safari.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/opera.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: |
| 45 | 39 | 10 | 32 | 12 |
## Usage
```javascript
peb.sel(selector, itemIndex)
```
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| selector | `String` |  | Query Selector to element |
| itemIndex | `Number` | Yes | Item Index in collection |
## Properties
### ID Selector or passed in `itemIndex`
#### `.attr()`
Get all attributes
#### `.attr(sequence)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| sequence | `Object` | |Change all \[key\] attributes to \[key value\]|
#### `.attr(name, value)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| name | `String`\|`Object` | | Propertie |
| value | `String` | Yes | The value to be changed |

Change the attribute `name` to `value` when available, otherwise, return the attribute value corresponding to `name`
#### `.dats(name, value)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| name | `String`\|`Object` | | Propertie |
| value | `String` | Yes | The value to be changed |

Change the dataset `name` to `value` when available, otherwise, return the dataset value corresponding to `name`
#### `.css(name, value)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| name | `String`\|`Object` | | Propertie |
| value | `String` | Yes | The value to be changed |

Change style value `name` to `value` when avaliable, otherwise, return the value corresponding to `name`  
**Attention:** No `use strict`
  
#### `insert(...nodes)`
Add child elements to the object
  
#### `del()`
Remove Element

#### `.htm(value)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| value | `String` | Yes | The value to be changed |

Get it if no parameters are passed in
#### `.txt()`
Get innerText
  
#### `.val()`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| value | `String` | Yes | The value to be changed |

Get it if no parameters are passed in
  
#### `.hide()`
Hide element
  
#### `.show(type)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| type | `String` | Yes | value of `Element.style.display` |

If no parameters are passed in, the default value is the last value of `hide()`.

#### `.on(event, listener)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| event | `String` |  | Event that triggers the listener |
| listener | `Function` | Yes | Listener |

Add event listener if `listener` is passed in, otherwise remove
#### `.next()`
Get next element sibling
#### `.prev()`
Get previous element sibling
#### `.parent()`
Get parent
#### `.child()`
Get **first** child element  
*Tip:* Better effect with `.next()`

### And Others...
#### `.forEach(callbackFn, startIndex)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| callbackFn | `Function` |  | callback function |
| startIndex | `Number` | Yes | Start index of loop |

- `callbackFn` function parameter

| Parameter | Value Type | Description |
| :---: | :---: | :---: |
| currentItem | `RElement` | Reffer to single mode |
| index | `Number` | Index |
| collection | `RElementsCollection` | this |
