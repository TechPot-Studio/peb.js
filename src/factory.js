import {pebVersion} from './util/variables';
import errors from './util/errors';
import elementOperator from './util/elementOperator';
import ElementManager from './util/ElementManager';

export default function factory(window) {
    'use strict';
    function peb() {
        this.name = 'peb';
        console.info('Peb.js 3.1.0 is available!');
    }

    peb.version = pebVersion;
    peb.peb = peb.version;

    // Error type

    peb.PebError = errors.PebError;
    peb.PebExtensionError = errors.PebExtensionError;
    peb.PebMissingEnvironmentError = errors.PebMissingEnvironmentError;
    peb.PebMultipleElementError = errors.PebMultipleElementError;
    peb.PebMissingParameterError = errors.PebMissingParameterError;

    let emptyArray = [null];

    peb.FIRST_ITEM = 0
    peb.GLOBAL = window;
    peb.UA = window.navigator ? navigator.userAgent : null

    peb.reqArg = (name) => {
        throw new errors.PebMissingParameterError(name ? 'Missing parameter ' + name : 'Missing required parameters');
    };

    if (window.document && document instanceof Document) {
        customElements.define('peb-trans', class PebTransElement extends HTMLElement {
            constructor() {
                super();
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
                element.innerHTML = this.table[lang][element.getAttribute('word')];
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
     * @param {string | Array<string, Function>} name
     * @param {object} attr
     * @param {...(HTMLElement | string)} child
     */
    peb.createElement = function (name, attr, ...child) {
        let is = name instanceof Array,
            create = document.createElement,
            result = is ? create(name[0], {is: name[1]}) : create(name);
        elementOperator.setMultipleAttributes(result, attr);
        result.append(...child)
        return result;
    };

    /**
     * Convert HTMLElement to operable element
     * @param {HTMLElement | Node} element
     */
    peb.ElementManager = ElementManager;

    /**
     * Operate the DOM with the smallest possible code
     * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated
     * But this may cause some problems
     * The return result is a custom class
     * @param {string} selector Query Selector For the Element
     * @param {number} index Index In the List
     * @return {ElementManager}
     */
    peb.sel = peb.select = function (selector, index) {
        if (typeof selector === 'string') {
            if (index === undefined) {
                return new ElementManager(document.querySelectorAll(selector), selector);
            } else {
                return new ElementManager(document.querySelectorAll(selector).item(index), selector);
            }

        } else {
            return new ElementManager(selector);
        }
    };

    /**
     * Select a element
     * @param {string} selector Query Selector of the element
     */
    peb.query = function (selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Send ajax requests
     * @param {object} config
     */
    peb.ajax = function (config) {
        let request = new XMLHttpRequest()
            , arg = config;
        arg.success = config.success || this.noop;
        arg.fail = config.fail || this.noop;

        arg.preset ? arg.preset(request) : null;
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
    peb.isNumeric = function (obj) {
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
            throw errors.PebMissingEnvironmentError('Missing environment window.location');
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
        throw new errorType(message);
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
}
