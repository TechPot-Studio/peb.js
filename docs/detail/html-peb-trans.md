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
| <img src="https://github.com/TechPot-Studio/svg-gallery/blob/master/chrome.svg" width="30" /> | <img src="https://github.com/TechPot-Studio/svg-gallery/blob/master/firefox.svg" width="30" /> | <img src="https://github.com/TechPot-Studio/svg-gallery/blob/master/ie.svg" width="30" /> | <img src="https://github.com/TechPot-Studio/svg-gallery/blob/master/safari.svg" width="30" /> | <img src="https://github.com/TechPot-Studio/svg-gallery/blob/master/opera.svg" width="30" /> | <img src="https://github.com/TechPot-Studio/svg-gallery/blob/master/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 54 | 63 | 9 <sup><a href="#footer">1</a></sup> | 10.1 | 41 | 79 |
## Definition & Usage
`<peb-trans>` used to mark the translation area in the HTML document.  
Using this tag, you can quickly use the `peb.translation` function to translate quickly in JavaScript.  
## Footer
1. Internet Explorer 9 is not fully supported. It does not support the `customElements` tag and cannot customize HTML elements in a true sense. If you use it in IE9, it will cause the object type to be `HTMLUnknownElement`
