# Function `pb()`
**The last updated version of this function**: *1.0.0*
## Usage
```javascript
pb(selector, ?itemIndex)
```
## Arguments
### `selector`
The selector of the element is the same as the selector in CSS.
### `itemIndex`
**No need to pass in most of the time**. The index value of the element in the HTMLCollection. Must be a number.
## Return Item
The returned value is `RElement` or `RElements`.
Different in the two cases.
### ID Selector or passed in `itemIndex`
#### Set/Get Attribute
###### `RElement.attr()`
Get all of attributes.
###### `RElement.attr(mergeValueList)`
It is required to pass in an object. The key is the name of the attribute, and the key value is the value to be changed.
###### `RElement.attr(attributeName)`
Get `attributeName` attribute.
###### `RElement.attr(attributeName, mergeValue)`
Merge value of `attributeName` attribute to `mergeValue`.
  
#### Set/Get Dataset (Attribute With Prefix `data-`)
###### `RElement.dats()`
Get all of dataset values.
###### `RElement.dats(mergeValueList)`
It is required to pass in an object. The key is the name of the dataset, and the key value is the value to be changed.
###### `RElement.dats(datasetName)`
Get `datasetName` dataset.
###### `RElement.attr(datasetName, mergeValue)`
Merge value of `datasetName` attribute into `mergeValue`.
  
#### Set/Get Style
###### `RElement.css(styleList)`
It is required to pass in an object. The key is the name of the style, and the key value is the value to be changed.
###### `RElement.css(style)`
Get style `style`
###### `RElement.css(style, mergeValue)`
Merge value of `style` style into `mergeValue`.
  
#### Append Child
###### `RElement.insert(...nodeList)`
Append all items in `nodeList` to element.
  
#### Remove Element
###### `RElement.del()`
Remove element.
  
#### Set/Get Inner HTML
###### `RElement.htm()`
Get inner HTML.
###### `RElement.htm(mergeValue)`
Merge innerHTML into `mergeValue`
  
#### Get Inner Text
###### `RElement.txt()`
  
#### Set/Get Value
*Like `RElement.html()` but usage is `RElement.val()`*
  
#### Hide Element
###### `RElement.hide()`
  
#### Show Element
###### `RElement.show()`
Show Element (Restore to the value of the last time hide)
###### `RElement.show(displayType)`
Set display type in style of element to `displayType`
  
#### Add/Remove Event Listener
###### `RElement.evt(event)`
Remove event listener `event`
###### `RElement.evt(eventList)`
Add content one by one
###### `RElement.evt(event, function)`
Add event listener `event`: `function`
  
  
### In Other Cases
#### `RElements.forEach((currentItem, index) => {})`
*Like `Array.forEach`*
#### `RElements.item(index)`
Get `index` index element.
  
  
  
  
FINALLY! IT WAS END!!!
