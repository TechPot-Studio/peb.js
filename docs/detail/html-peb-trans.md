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
| <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/chrome.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/firefox.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/safari.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/opera.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 54 | 63 | 10.1 | 41 | 79 |
## Definition & Usage
`<peb-trans>` used to mark the translation area in the HTML document.  
Using this tag, you can quickly use the `peb.translation` function to translate quickly in JavaScript.  
