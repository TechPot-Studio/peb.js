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
const t = new peb.TranslationTable({
    "en-us": {
        "generic.example_word": "Example text"
    },
    "zh-cn": {
        "generic.example_word": "实例文本"
    }
});
t.translate("en-us");
```
#### Result
Example text
## Browser Support
| <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/chrome.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/firefox.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/safari.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/opera.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 54 | 63 | 10.1 | 41 | 79 |
## Definition & Usage
`<peb-trans>` used to mark the translation area in the HTML document.  
Using this tag, you can quickly use the `peb.translation` function to translate quickly in JavaScript.  
