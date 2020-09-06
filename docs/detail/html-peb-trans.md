# HTML Tag `<peb-trans>`
Version with this added: *2.3.0*
## Example
#### HTML
```html
<div>
    <peb-trans p-word="generic.example_word" />
</div>
```
#### JS
```javascript
const t = new peb.translationTabel({
    "en-us": {
        "generic.example_word": "That's a example text"
    },
    "zh-cn": {
        "generic.example_word": "这是一个实例文本"
    }
});
t.translate("en-us");
```
## Browser Support
| <img src="https://simpleicons.org/icons/googlechrome.svg" width="20" /> | <img src="https://simpleicons.org/icons/firefox.svg" width="20" /> | <img src="https://simpleicons.org/icons/internetexplorer.svg" width="20" /> | <img src="https://simpleicons.org/icons/safari.svg" width="20" /> | <img src="https://simpleicons.org/icons/opera.svg" width="20" /> | <img src="https://simpleicons.org/icons/microsoftedge.svg" width="20" />
| :---: | :---: | :---: | :---: | :---: | :---: |
| 54 | 63 | 9 <sup><a href="#footer">1</a></sup> | 10.1 | 41 | 79 |
## Definition & Usage
`<peb-trans>` used to mark the translation area in the HTML document.  
Using this tag, you can quickly use the `peb.translation` function to translate quickly in JavaScript.  
## Footer
1. Internet Explorer 9 is not fully supported. It does not support the `customElements` tag and cannot customize HTML elements in a true sense. If you use it in IE9, it will cause the object type to be `HTMLUnknownElement`
