# Function `sel()`
**The last updated version of this function**: *2.0.0*  
## Browser Support
| <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/chrome.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/firefox.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/safari.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/opera.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/edge.svg" width="30" /> |
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
#### `.attr(sequence: object)`
Change all \[key\] attributes to \[key value\]
#### `.attr(name: string, value: string)`

Change the attribute `name` to `value` when available, otherwise, return the attribute value corresponding to `name`
#### `.data(name: string, value: string)`

Change the dataset `name` to `value` when available, otherwise, return the dataset value corresponding to `name`
  
#### `insert(...nodes: Node[] | HTMLElement[] | RElement[])`
Add child elements to the object
  
#### `del()`
Remove Element

#### `.html(value?: string)`
Get it if no parameters are passed in, otherwise set value to `value`

#### `.text()`
Get innerText
  
#### `.val(value?: string)`
Get it if no parameters are passed in, otherwise set value to `value`
  
#### `.hide()`
Hide element
  
#### `.show(type?: string)
set value of `Element.style.display` if passed in parameter, otherwise set display type to value of lastest time hide

#### `.on(event: string, listener?: function)`
Add event listener if `listener` is passed in, otherwise remove

#### `.class()`
Returns HTMLSettableTokenList

#### `.style(sheet)`
Set style by sheet. sheet is a object like `{width: .5em}`

#### `.next()`
Get next element sibling
#### `.prev()`
Get previous element sibling
#### `.parent()`
Get parent
#### `.child()`
Get **first** child element  
*Tip:* Better effect with `.next()`

### And Others
#### `.forEach(callbackFn: function, startIndex: number)`

- `callbackFn` function parameter

| Parameter | Value Type | Description |
| :---: | :---: | :---: |
| currentItem | `RElement` | Reffer to single mode |
| index | `Number` | Index |
| collection | `RElementsCollection` | this |
