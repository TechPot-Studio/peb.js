# Funtion `gen()`
**The last updated version of this function**: *1.0.0*
## Usage
```javascript
gen(objectName, ...arguments)
```
## Arguments
### `objectName`
String. The object to be created. The currently accepted values are:
- `el`: HTMLElement  
  Corresponding to `argruments`: `(name, content, attributes)`
  * `Name`: The name of the element.
  * `Content`: The innerHTML of the element, HTML content can be used.
  * `Attributes`: `Object` type parameter that provides the parameter value.
- `tn`: TextNode  
  Corresponding to `argruments`: `(text)`
  * `Text`: Text of `TextNode`
