/**
 * Peb JavaScript Library
 * Checked Out JQuery FEATURES (NOT SOURCE CODE)
 * Most features are OC
 * 
 * @copyright TechPot Studio and other contributors
 */

import './scss/variable.scss';

(function (window, factory) {
    'use strict';

    if (typeof module === 'object' && typeof module.exports === 'object') {
        // CommonJS
        module.exports = factory(window);

    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define('peb', [], function () {
            return factory(window);
        });

    } else {
        // Browser
        factory(window);
    }

    // ES6: Outside the function

})(globalThis, function (window) {
    'use strict';
    function peb() {
        this.name = 'peb';
        console.info('Peb.js 3.1.0 is available!');
    }

    peb.version = '3.1.0';

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

    class PebMissingEnvironmentError extends PebError {
        constructor(message) {
            super(message);
            this.name = 'PebMissingEnvironmentError'
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
    peb.PebMissingEnvironmentError = PebMissingEnvironmentError;


    // Core
    let emptyArray = [null];

    peb.reqArg = (name) => {
        throw new PebMissingParameterError(name ? 'Missing parameter ' + name : 'Missing required parameters');
    };
    
    if (window.document && document instanceof Document) {
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
        // globalThis is read-only
        return window;
    };

    /**
     * Create an element
     * @param {string|Function} name
     * @param {object} attr
     * @param {string} inner
     * @param {(HTMLElement | Node)[]} child
     */
    peb.createElement = function (name, attr, inner = '', ...child) {
        let result = typeof name === 'string' ? document.createElement(name) : new name(),
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
     * Convert HTMLElement to operable element
     * @param {HTMLElement | Node} element 
     */
    peb.ElementManager = class ElementManager {
        /** @type {HTMLElement | HTMLCollection | Node | NodeList} */
        element;
        length;

        static FIRST_ITEM = 0;

        constructor(origin) {
            this.element = origin;
            this.length = origin.length || 1;
            this.forEach((element, index) => {
                this[index] = element;
            });
        }

        item(index) {
            return this[index];
        }

        manageItem(index) {
            return new ElementManager(this[index]);
        }

        splice() {
            /* Pseudo-array must have a `splice` function */
        }

        forEach(callbackFn) {
            if (this.element instanceof Node || this.element instanceof HTMLElement || this.element instanceof HTMLDocument) {
                callbackFn(this.element, 0, this);
            } else {
                this.element.forEach(callbackFn);
            }
        }

        html(newer) {
            if (newer === undefined) {
                return this.item(0).innerHTML;
            } else {
                this.forEach((eachElement) => {
                    eachElement.innerHTML = newer;
                });
                return this;
            }
        }

        text() {
            return this.item(0).innerText;
        }

        bind(type, listener) {
            this.forEach(eachElement => eachElement.addEventListener(type, listener));
        }

        on(type, listener) {
            this.bind(type, listener);
        }

        class() {
            return this.item(0).classList;
        }

        addClass(...tokens) {
            this.forEach(eachElement => eachElement.classList.add(...tokens));
            return this;
        }

        removeClass(...tokens) {
            this.forEach(eachElement => eachElement.classList.remove(...tokens));
            return this;
        }

        clearClass() {
            this.forEach(eachElement => eachElement.className = '');
            return this;
        }

        hide() {
            this.forEach((eachElement) => {
                eachElement.displayType = eachElement.style.display;
                eachElement.style.display = 'none';
            });
            return this;
        }

        display(type) {
            this.forEach((eachElement) => {
                eachElement.style.display = type;
            });
            return this;
        }

        show(type) {
            if (type === undefined) {
                this.forEach((eachElement) => {
                    eachElement.style.display = eachElement.displayType || 'initial';
                })
            } else {
                this.display(type);
            }
        }

        delete(index) {
            if (index === undefined) {
                this.forEach(eachElement => eachElement.parent.removeChild(eachElement));
            } else {
                let singleElement = this.item(index);
                singleElement.parent.removeChild(singleElement);
            }
        }

        del(index) {
            this.delete(index);
        }

        child() {
            return new ElementManager(this.item(0).children);
        }

        parent() {
            return new ElementManager(this.item(0).parentElement);
        }

        next() {
            return new ElementManager(this.item(0).nextElementSibling);
        }

        prev() {
            return new ElementManager(this.item(0).previousElementSibling);
        }

        append(...elements) {
            elements.forEach((eachChild) => {
                let child = eachChild;
                if (eachChild instanceof ElementManager) {
                    child = eachChild.element;
                }
                this.forEach(eachElement => eachElement.appendChild(child));

            });
        }

        add(...elements) {
            this.append(...elements);
        }

        toArray() {
            let result = [];
            this.forEach(eachElement => result.push(eachElement));
            return result;
        }

        click(fn) {
            fn ? this.bind('click', fn) : this.forEach(eachElement => eachElement.click());
        }

        focus(fn) {
            fn ? this.bind('focus', fn) : this.forEach(eachElement => eachElement.focus());
        }

        mouseenter(fn)     { this.bind('mouseenter', fn); }
        mouseleave(fn)     { this.bind('mouseleave', fn); }
        mouseup(fn)        { this.bind('mouseup', fn); }
        mousedown(fn)      { this.bind('mousedown', fn); }
        mousemove(fn)      { this.bind('mousemove', fn); }
        mouseover(fn)      { this.bind('mouseover', fn ); }
        mouseout(fn)       { this.bind('mouseout', fn) }
        mousewheel(fn)     { this.bind('mousewheel', fn); }
        drag(fn)           { this.bind('drag', fn); }
        dragstart(fn)      { this.bind('dragstart', fn); }
        dragend(fn)        { this.bind('dragend', fn); }
        dragenter(fn)      { this.bind('dragenter', fn); }
        dragexit(fn)       { this.bind('dragexit', fn); }
        dragover(fn)       { this.bind('dragover', fn); }
        dragleave(fn)      { this.bind('dragleave', fn); }
        canplay(fn)        { this.bind('canplay', fn); }
        canplaythrough(fn) { this.bind('canplaythrough', fn); }
        play(fn)           { this.bind('play', fn); }
        playing(fn)        { this.bind('playing', fn); }
        copy(fn)           { this.bind('copy', fn); }
        beforecopy(fn)     { this.bind('beforecopy', fn); }
        paste(fn)          { this.bind('paste', fn); }
        beforepaste(fn)    { this.bind('beforepaste', fn); }
        blur(fn)           { this.bind('blur', fn); }
        load(fn)           { this.bind('load', fn); }
        loadstart(fn)      { this.bind('loadstart', fn); }
        loadeddata(fn)     { this.bind('loadeddata', fn); }
        loadedmetadata(fn) { this.bind('loadedmetadata', fn); }
        focusin(fn)        { this.bind('focusin', fn); }
        focusout(fn)       { this.bind('focus', fn); }
        keydown(fn)        { this.bind('keydown', fn); }
        keyup(fn)          { this.bind('keyup', fn); }
        keypress(fn)       { this.bind('keypress', fn); }
    }

    /**
     * Operate the DOM with the smallest possible code  
     * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated  
     * But this may cause some problems  
     * The return result is a custom class  
     * @param {string} selector Query Selector For the Element
     * @param {number} index Index In the List
     * @return {ElementManager}
     */
    peb.sel = function (selector, index) {
        if (typeof selector === 'string') {
            if (index === undefined) {
                return new this.ElementManager(document.querySelectorAll(selector));
            } else {
                return new this.ElementManager(document.querySelectorAll(selector).item(index));
            }

        } else {
            return new this.ElementManager(selector);
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
     * Print to console
     * @param {any[]} data
     */
    peb.log = function (...data) {
        console.log(...data);
    };

    /**
     * Print to console
     * @param {any[]} data
     */
    peb.log.error = function (...data) {
        console.error(...data);
    };

    /**
     * Print to console
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
     * Print table to console
     * @param {any} tabularData
     * @param {ReadonlyArray<string>} properties
     */
    peb.log.table = function (tabularData, properties) {
        console.table(tabularData, properties)
    }

    /**
     * Start a group to console
     * @param {string} label
     * @param {boolean} isCollapsed
     * @param {Function} run
     */
    peb.log.group = function (label, isCollapsed = false, run = undefined) {
        if (isCollapsed) {
            console.groupCollapsed(label);
        } else {
            console.group(label);
        }

        if (run) {
            run();
            console.groupEnd();
        }
    }

    /**
     * Close a group
     */
    peb.log.groupEnd = function () {
        console.groupEnd();
    }

    /**
     * Trace function call
     * @param {any[]} data
     */
    peb.log.trace = function (...data) {
        console.trace(...data);
    }

    /**
     * Console assertion
     * @param {boolean} condition
     * @param {any[]} data
     */
    peb.log.assert = function (condition, ...data) {
        console.assert(condition, ...data)
    }

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
            throw PebMissingEnvironmentError('Missing environment window.location');
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

    peb.noop = function () {
        // NOOP
    };

    /**
     * Multiple String
     */
    peb.stringTimes = function (string, times, connector = '') {
        return new Array(times).fill(string).join(connector);
    };

    /**
     * Throw error
     */
    peb.error = function (message, type) {
        let errorType = type || Error;
        throw new Error(message);
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

        remove(key) {
            return delete this.map[key];
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

    peb.SearchParams = window.URLSearchParams;

    // Return final object
    window.peb = peb;
    return peb;
});

// export default peb;
