# Function `pb()`
**The last updated version of this function**: *1.1.1*
## Usage
```javascript
pb(selector, itemIndex)
```
## Arguments
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
| sequence | `Object` | | |
Change all \[key\] attributes to \[key value\]
#### `.attr(name, value)`
| Parameter | Type | Optional | Description |
| :---: | :---: | :---: | :---: |
| name | `String`\|`Object` | | Propertie |
| value | `String` | Yes | The value to be changed |

Change the attribute `name` to `value` when available, otherwise, return the attribute value corresponding to name
#### `.dats()`
Please refer to the `.attr` section. The function parameters here are the same as the above part, but the object of operation is not attributes but dataset
#### `css()`
Please refer to the `.attr` section. The function parameters here are the same as the above part, but the object of operation is not attributes but style \[*Note*: You cannot use empty functions to get all values here. \]
  
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
Please refer to the `.htm` section. The usage is the same, but the `value` is modified
  
#### `.hide()`
duh
  
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
  
### And Others...
#### `RElements.forEach()`
*Like `Array.forEach` but the third parameter is not avaliable*
