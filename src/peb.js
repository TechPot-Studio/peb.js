/**
 * Peb JavaScript Library
 * Checked Out JQuery FEATURES (NOT SOURCE CODE)
 * Most features are OC
 * 
 * @copyright TechPot Studio and other contributors
 */

(function (global, factory) {
    'use strict';

    if (typeof module === 'object' && typeof module.exports === 'object') {
        // CommonJS
        module.exports = factory(global);

    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define('peb', [], function () {
            return factory(global);
        });

    } else {
        // Browser
        factory(global);
    }

    // ES6: Outside the function

})(globalThis, function (window) {
    'use strict';
    function peb() {
        this.name = 'peb';
        console.info('Peb.js 3.1.0 is available!');
    }

    // Error type
    class PebError extends Error {
        constructor(message) {
            super(message);
            this.name = 'PebBasicError';
        }
    }

    class PebExtensionError extends PebError {
        constructor(message) {
            super(message);
            this.name = 'PebExtensionError';
        }
    }

    class PebNullObjectError extends PebError {
        constructor(message) {
            super(message);
            this.name = 'PebNullObjectError';
        }
    }
    
    class PebMissingParameterError extends PebError {
        constructor(message) {
            super(message)
            this.name = 'PebMissingParameterError';
        }
    }

    peb.PebError = PebError;
    peb.PebExtensionError = PebExtensionError;
    peb.PebNullObjectError = PebExtensionError;


    // Cor
    let emptyArray = [],
        exist = (value) => !(typeof (value) === 'undefined');

    peb.reqArg = (name) => {
        throw new PebMissingParameterError(name ? 'Missing parameter ' + name : 'Missing required parameters');
    };
    
    if (window.window) {
        customElements.define('p-trans', class PebTransElement extends HTMLElement {
            constructor() {
                super();
                this.style.display = 'inline';
            }
        });

        customElements.define('p-mark', class PebMarkElement extends HTMLElement {
            constructor() {
                super();
                this.style.color = 'attr(color),inherit';
                this.style.fontFamily = 'attr(font), inherit';
            }
        });

        peb.QuickAudio = class QuickAudio {
            constructor(url) {
                this.url = url;
                /* INIT */
                this.player = new Audio();
                this.player.style.display = 'none';
                this.player.src = this.url;
                document.body.appendChild(this.player);
            }

            destroy(obj) {
                document.body.removeChild(obj.player);
            }

            async play() {
                return this.player.play();
            }
            pause() {
                this.player.pause();
            }
            /**
             * Set repeat or not
             * @param {boolean} isLoop
             */
            loop(isLoop) {
                this.player.onended = isLoop ? this.player.play : () => { };
            }

        };
    }
    peb.TranslationTable = class TranslationTable {
        constructor(table) {
            if (typeof (table) === 'object') {
                this.tabel = table;
            }
        }

        /**
         * Set value
         * @param {object} newTable
         */
        set set(newTable) {
            Object.keys(newTable).forEach(function (lang) {
                (newTable[lang]).forEach(function (word) {
                    this.tabel[lang][word] = newTable[lang][word];
                });
            });
            return this;
        }

        get get() {
            return this.tabel;
        }

        /**
         * Translation
         * @param {string} lang 
         */
        translation(lang) {
            document.querySelectorAll('peb-trans').forEach(function (element) {
                element.innerHTML = this.table[lang][element.getAttribute('p-word')];
            });
        }
    };
    /** 
     * Quick sum items
     * @param  {number[] | Array<number>} values Values to sum
     * @return {number}
     */
    peb.sum = function (...values) {
        if (values[0] instanceof Array) {
            return peb.sum(values[0]);
        } else {
            let result = 0;
            values.forEach((value) => {
                result += value;
            });
            return result;
        }
    };

    peb.getGlobal = function () {
        // window was a parameter
        if (window.window) return window;

        // CommonJS
        if (typeof global === 'object') return global;
        // WebWorker
        if (typeof self === 'object') return self;

        if (typeof globalThis !== 'undefined') {
            return globalThis;
        }

        // None of them
        return undefined;
    };

    peb.genNode = {
        /**
         * Quickly create an HTMLElement
         * @param {string} node Element Name
         * @param {string} content Element Content
         * @param {object} attr Element Attributes
         * @return {HTMLElement}
         */
        element: function (node, content = '', attr = {}) {
            let r = document.createElement(node);
            r.appendChild(document.createTextNode(String(content)));
            Object.keys(attr).forEach(function (attrName) {
                r.setAttribute(attrName, attr[attrName]);
            });
            return r;
        },
        /**
         * Convert text to HTML. Usually this function is not used, sometimes combined with ajax
         * @param {string} str String
         */
        fromStr: function (str) {
            let operationCard = document.createElement('peb-operation-card'),
                result;
            
            operationCard.innerHTML = str;
            result = operationCard.children;

            if (result.length === 1) {
                return result[0];
            } else {
                return result;
            }

        },
        /**
         * Create a text node quickly
         * @param {string} text String
         * @return {Text}
         */
        text: function (text) {
            return document.createTextNode(String(text));
        }
    };

    /**
     * Create an element
     * @param {string} name
     * @param {object} attr
     * @param {string} inner
     * @param {(HTMLElement | Node)[]} child
     */
    peb.createElement = function (name, attr, inner = '', ...child) {
        let result = document.createElement(name),
            setMultipleAttributes = (target, objectSeq) => {
                Object.keys(objectSeq).forEach((attrName) => {
                    target.setAttribute(attrName, objectSeq[attrName])
                });
            },
            addMultipleChildrenToElement = (target, children) => {
                if (!children) {
                    return false;
                }

                children.forEach((eachChild) => {
                    target.appendChild(eachChild)
                });
          };
        result.innerHTML = inner;
        setMultipleAttributes(result, attr);
        addMultipleChildrenToElement(result, child)
        return result;
    };

    /**
     * Convert HTMLElement to operatable element
     * @param {HTMLElement | Node} element 
     */
    peb.RElement = class {
        constructor(element) {
            if (element === null) {
                throw new PebNullObjectError('Element is null');
            }
            this.size = 1;
            this.tag = element.tagName;
            this.id = element.id;
            this.element = element;
            this[0] = this;

            Object.freeze(this);
        }
        
        attr(name, index) {
            if (!exist(name)) {
                return this.element.attributes;
            } else if (!exist(index)) {
                switch (typeof (name)) {
                    case 'string':
                        return this.element.getAttribute(name);
                    case 'object':
                        Object.keys(name).forEach(function (current) {
                            this.element.setAttribute(current, name[current]);
                        });
                        break;
                }
            } else {
                return this.element.setAttribute(n, String(f));
            }
        }

        class() {
            return this.element.classList;
        }

        data(name, value) {
            if (!exist(name)) {
                return this.element.dataset;
            } else if (!exist(value)) {
                switch (typeof (name)) {
                    case 'string':
                        return this.element.dataset[name];
                    case 'object':
                        Object.keys(name).forEach(function (current) {
                            this.element.dataset[current] = name[current];
                        });
                        break;
                }
            } else {
                this.element.dataset[name] = String(value);
                return String(value);
            }
        }

        get(key, value) {
            if (exist(value)) {
                this.element[key] = value;
                return value;
            } else {
                return this.element[key];
            }
        }

        insert(...nodes) {
            nodes.forEach(function (current) {
                if (current instanceof RElement) {
                    this.element.appendChild(current.element);
                } else {
                    this.element.appendChild(current);
                }
            });
        }

        insertTo(target) {
            target.appendChild(this.element)
        }

        del() {
            return this.element.parentNode.removeChild(element);
        }

        html(value) {
            if (exist(value)) {
                this.element.innerHTML = String(value);
                return String(value);
            } else {
                return this.element.innerHTML;
            }
        }

        text() {
            return this.element.innerText;
        }

        val(value) {
            if (exist(value)) {
                this.element.value = String(value);
                return String(value);
            } else {
                return this.element.value;
            }
        }

        hide(){
            // dbh: Display Before Hide
            this.element.dbh = this.element.style.display;
            this.element.style.display = 'none';
            return 'none';
        }

        show(type) {
            if (exist(type)) {
                this.element.style.display = String(type);
                return String(type);
            } else {
                this.element.style.display = this.element.dbh;
                return this.element.dbh;
            }
        }

        on(event, listener) {
            let bindEventListener = function (eventStr, callback) {
                if (this.element.addEventListener) {
                    this.element.addEventListener(eventStr, callback);
                } else {
                    this.element.attachEvent('on' + eventStr, callback.call(element));
                }
            };
            if (exist(listener)) {
                bindEventListener(event, listener);
            } else if (typeof listener === 'object') {
                Object.keys(event).forEach(function (current) {
                    bindEventListener(current, event[current]);
                });
            }
        }

        parent() {
            return new RElement(this.element.parentElement);
        }

        child() {
            return new RElement(this.element.children[0]);
        }

        next(isContainTextNode = false) {
            if (isContainTextNode) {
                return new RElement(this.element.nextSibling);
            } else {
                return new RElement(this.element.nextElementSibling);
            }
        }

        prev(isContainTextNode = false) {
            if (isContainTextNode) {
                return new RElement(this.element.previousSibling);
            } else {
                return new RElement(this.element.previousElementSibling);
            }
        }

        click() {
            this.element.click();
        }

        style(sheet) {
            Object.keys(sheet).forEach((styleName) => {
                this.element.style[styleName] = sheet[styleName];
            });
        }
    
        // Video and audio
        pause(isPause = true) {
            if (isPause) {
                this.element.pause();
            } else {
                this.element.play();
            }
        }

        play() {
            this.element.play();
        }

        // RElementsCollection
        forEach(callbackFn) {
            callbackFn(this, 0, this);
        }

        item() {
            return this;
        }
    };


    /**
     * Convert HTMLCollection to operatable element collection
     * @param {HTMLCollection | NodeList} elements
     */
    peb.RElementsCollection = class {
        constructor(elements) {
            if (elements === null) {
                throw new PebNullObjectError('Element is null');
            }
            this.size = this.length = elements.length;
            this.elements = elements;
            
            elements.forEach((element, index) => {
                this[index] = new RElement(element);
            });
            Object.freeze(this);
        }
        
        item(index=0) {
            return this[index];
        }

        forEach(callbackFn, fromIndex = 0) {
            this.elements.forEach((_, index) => {
                if (index >= fromIndex) {
                    callbackFn(this[index], index, this);
                }
            });
        };
    };

    /**
     * Operate the DOM with the smallest possible code  
     * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated  
     * But this may cause some problems  
     * The return result is a custom class  
     * @param {string} selector Query Selector For the Element
     * @param {number} index Index In the List
     */
    peb.sel = function (selector, index) {
        if (typeof selector === 'string') {
            let matchesElements = document.querySelectorAll(selector);

            if (matchesElements.length === 1) {
                // ONLY MATCHES 1
                return new this.RElement(matchesElements.item(0));

            } else if (exist(index)) {
                return new this.RElement(matchesElements.item(index));

            } else {
                return new this.RElementsCollection(matchesElements);

            }
        } else {
            // Instant covert

            if (selector instanceof HTMLElement || selector instanceof Node) {
                return new this.RElement(selector);
            }
            if (selector instanceof HTMLCollection || selector instanceof NodeList) {
                return new this.RElementsCollection(selector);
            }
        }
    };

    /**
     * Send ajax requests
     * @param {object} config
     */
    peb.ajax = function (config) {
        let request = new XMLHttpRequest()
          , arg = config;
        arg.success = config.success || function () {};
        arg.fail = config.fail || function () {};

        request.open(arg.type, arg.url, true);
        request.send(arg.data || null);
        request.responseType = config.response || 'text';
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    // 200: Loading or Successful
                    arg.success(request.response);
                } else {
                    // 0: Unset or Opened
                    arg.fail();
                }
            }
        }
    };

    /**
     * print to console
     * @param {any[]} data
     */
    peb.log = function (...data) {
        console.log(...data);
    };

    /**
     * print to console
     * @param {any[]} data
     */
    peb.log.error = function (...data) {
        console.error(...data);
    };

    /**
     * print to console
     * @param {any[]} data
     */
    peb.log.warn = function (...data) {
        console.error(...data);
    };

    /**
     * Clear console
     */
    peb.log.clear = function () {
        console.clear();
    };

    /**
     * return a new string upper cased
     * @param {string} str 
     * @return {string}
     */
    peb.upperCase = function (str) {
        return str.toUpperCase();
    };
    /**
     * return a new string lower cased
     * @param {string} str 
     * @return {string}
     */
    peb.lowerCase = function (str) {
        return str.toLowerCase();
    };

    /**
     * Remove spaces or dashes and convert to camel case
     * @param {string} str
     * @return {string}
      */
    peb.camelCase = function (str) {
        return str.replace(/[ -]./g, (word) => {
            return word.replace(/[ -]/g, '').toUpperCase();
        });
    };

    /**
     * Get a class of value
     * @param {any} obj
     */
    peb.classof = function (obj) {
        if (obj && obj.constructor && obj.constructor.toString()) {
            if (obj.constructor.name) {
                return obj.constructor.name;
            }
            let str = obj.constructor.toString()
              , arr;
            if (str.charAt(0) === '[') {
                arr = str.match(/\w+\s∗(\w+)/);
            } else {
                arr = str.match(/function\s*(\w+)/);
            }
            if (arr && arr.length === 2) {
                return arr[1];
            }
        }
        return undefined;
    };

    /**
     * Return a boolean of is obj a number
     * Contains `123` `"123"` `1.23` `"1.23"` `.23` `".23"` `0xff00` `"0xf3"`
     * @param {string | number} obj 
     */
    peb.isdigit = function (obj) {
        return !isNaN(obj - 0);
    };

    /**
     * Sleep time
     * `peb.sleep(time).then(Fn)` = setTimeOut
     * `await sleep(time)` is normal sleep time
     * @param {number} time 
     */
    peb.sleep = async function (time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    };

    /**
     * forEach in ANY OBJECT TYPE
     * @param {object} obj Object for each
     * @param {Function} callbackFn call back function
     */
    peb.forEach = function (obj, callbackFn) {
        Object.keys(obj).forEach((value, _, object) => {
            callbackFn(object[value], value, object);
        });
    };

    /**
     * Return is this in array
     * @param {array} arr
     * @param {any} obj
     * @param {boolean} returnIndex
     */
    peb.inArray = function (arr, obj, returnIndex = false) {
        if (returnIndex) {
            return arr.indexOf(obj) > -1 ? arr.indexOf(obj) : null;
        } else {
            return arr.indexOf(obj) > -1;
        }
    };

    /**
     * Slice string or array
     * @param {Array<> | string} obj
     * @param {number} start
     * @param {number} end
     */
    peb.slice = function (obj, start, end) {
        return obj.slice(start, end || start);
    };

    /**
     * Get search string data
     */
    peb.getSearchData = function (data) {
        if (window.location) {
            let str = data || location.search;

            return JSON.parse('{\"' + decodeURIComponent(str.replace(/"/g,'\\\"').replace(/[?]/g, '').replace(/=/g, '\":\"').replace(/&/g, '\",\"')) + '\"}');

        } else {
            throw ReferenceError('window.location is not defined');
        }
    };

    /**
     * Wrap URL
     */
    peb.navigate = function (url, target = '_self') {
        if (window.window) {
            window.opener = null;
            window.open(url, target);
        }
    };

    /**
     * Multiple String
     */
    peb.stringTimes = function (string, times, connector = '') {
        return new Array(times).fill(string).join(connector);
    };

    /**
     * Data map
     */
    peb.dataMap = class {
        constructor() {
            /* Generate a object with no proto */
            this.map = new Object(null);
            this.lockedType = null;
        }

        lockType(type) {
            if (type === undefined) {
                throw new ReferenceError('Type locking of undefined is meaningless');
            } else if (typeof type !== 'function') {
                throw new TypeError('Locked type is not a constructor')
            } else {
                this.lockedType = type;
            }
        }

        get(key) {
            return this.map[key];
        }

        set(key, value) {
            if (this.lockedType !== null && value instanceof this.lockedType) {
                this.map[key] = value;
            } else {
                throw new TypeError('The type is locked but the incoming value does not match');
            }
        }

        keys() {
            return Object.keys(this.map);
        }

    }

    // Common function integration
    peb.parseJson = JSON.parse;
    peb.stringifyJson = JSON.stringify;
    peb.now = Date.now;
    peb.insert = emptyArray.push.call;

    // Return final object
    window.peb = peb;
    return peb;
});

export default peb;
