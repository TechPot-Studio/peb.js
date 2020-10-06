# Function `switchCase()`
**The last updated version of this function**: *3.0.0-pre.3* 
## Browser Support
| <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/chrome.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/firefox.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/safari.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/opera.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: |
| Yes | Yes | Yes | Yes | Yes |
## Usage
```javascript
peb.classof(obj)
```

Return constructor name of obj
### *Example*
```javascript
peb.classof(123);                   // Number
peb.classof([]);                    // Array
peb.classof({});                    // Object
peb.classof("str");                 // String
peb.classof(function () {return;}); // Function
peb.classof(Date);                  // Function
peb.classof(new Date);              // Date
```
