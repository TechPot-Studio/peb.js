# Function `pb()`
**The last updated version of this function**: *1.0.0*
## Usage
```javascript
pb(selector, ?itemIndex)
```
## Parameters
### `selector`
The selector of the element is the same as the selector in CSS.
### `itemIndex`
**No need to pass in most of the time**. The index value of the element in the HTMLCollection. Must be a number.
## Return Item
The returned value is different in the two cases.
### When the selector can always find only one element or the `itemIndex` parameter is passed in
Id: `id`  
Class List: `cls`  
Tag Name: `tag`  
Get Attribute: `attr(name)`  
Set Attribute: `attr(name, valueSetTo)`  
Get Style: `css(name)`  
Set Style: `css(name, valueSetTo)`  
Insert Chile Element: `insert(node)`  
Delete: `del()`  
Get Inner HTML: `htm()`
Set Inner HTML: `htm(valueSetTo)`
Get Inner Text: `txt()`
Get Value: `val()`  
Set Value: `val(valueSetTo)`  
Hide: `hide()`
Show: `show()`
Set Display Type: `show(type)`
Original Content: `item(name)`
