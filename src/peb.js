/**
 * Peb JavaScript Library
 * Checked Out JQuery FEATURES (NOT SOURCE CODE)
 * Most features are OC
 * 
 * @copyright TechPot Studio and other contributors
 */

(function ( global, factory ) {
    'use strict';

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // CommonJS
        module.exports = factory( global );

    } else if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( "peb", [], function () {
            return factory( global );
        });

    } else {
        // Browser
        factory( global );
    }

    // ES6: Outside the function

})( this, function ( window ) {
    'use strict';
    function peb() {
        this.name = "peb";
        console.info("%cP%ceb\n%cPeb.js is avaliable. We are committed to making Javascript easier. \n\n%cCopyright © TechPot Studio\nMIT License", "font-weight: 600; color: #00a8fa; font-size: 30px", "font-weight: 600; color: #3f48cc; font-size: 30px", "", "color: #999");
        console.info(`PLATFORM INFO: \n${navigator.userAgent}`)
    }

    peb.info = function () {
        return {
            version: "3.0.0",
            platform: (function () {
                if ( window.window ) {
                    return "browser";

                } else if ( window.module ) {
                    return "node";

                } else {
                    return "unknown";

                }
            })()
        }
    }

    // Error type
    class PebError extends Error {
        constructor(message) {
            super(message);
            this.name = "PebBasicError";
        }
    }

    class PebExtensionError extends PebError {
        constructor(message) {
            super(message);
            this.name = "PebExtensionError";
        }
    }

    class PebNullObjectError extends PebError {
        constructor(message) {
            super(message);
            this.name = "PebNullObjectError"
        }
    }

    peb.PebError = PebError,
    peb.PebExtensionError = PebExtensionError,
    peb.PebNullObjectError = PebExtensionError;


    // Core

    let document = window.document
      , arr = []
      , exist = function ( value ) {
            return !(typeof( value ) === 'undefined')
        };
    if ( window.window ) {
        customElements.define( "p-trans", window.pebTransElement = class PebTransElement extends HTMLElement {
            constructor() {
                // Call super in class to use `this` and `constructor`
                // This comment will no longer show again
                super();
            }
        } );

        customElements.define( "p-mark", window.pebMarkElement = class PebMarkElement extends HTMLElement {
            constructor() {
                super();
                this.style.color = "attr(color),inherit",
                this.style.fontFamily = "attr(font), inherit"
            }
        });

        peb.QuickAudio = class QuickAudio {
            constructor( url ) {
                this.url = url;
                /* INIT */
                this.player = new Audio();
                this.player.style.display = "none";
                this.player.src = this.url;
                document.body.appendChild( this.player );
            }
            
            destroy( obj ) {
                document.body.removeChild( obj.player );
            }
            play() {
                this.player.play()
            }
            pause() {
                this.player.pause();
            }
            /**
             * Set repeat or not
             * @param {boolean} isLoop
             */
            loop( isLoop ) {
                this.player.onended = isLoop ? this.player.play : new Function;
            }
        }
    }
    String.prototype.multi = function ( times, connect="" ) {
        return Array( times )
            .fill( this )
            .join( connect );
    };
    Object.prototype.forEach = function ( callbackFn ) {
        arr.forEach.call( Object.keys( this ), callbackFn )
    };
    
    peb.translationTable = class translationTable {
        constructor(table) {
            if (typeof(tabel) === 'object') {
                this.tabel = table;
            }
        }

        /**
         * Set value
         * @param {{ [lang: string]: { [word: string]: string; }; }} newTabel
         * @return {undefined}
         */
        set set(newTabel) {
            Object.keys(newTabel).forEach( function ( lang ) {
                (newTabel[lang]).forEach( function ( word ) {
                    this.tabel[lang][word] = newTabel[lang][word]
                });
            });
            return this;
        }

        get get() {
            return this.tabel
        }

        /**
         * Translation
         * @param {string} lang 
         */
        translation(lang) {
            document.querySelectorAll( "peb-trans" ).forEach(function ( element ) {
                element.innerHTML = this.table[lang][c.getAttribute( "p-word" )];
            });
        }
    }
    /** 
     * Quick sum items
     * @param  {number[] | Array<number>} values Values to sum
     * @return {number}
     */
    peb.sum = function ( ...values ) {
        if ( values[0] instanceof Array ) {
            return peb.sum( values[0] );
        } else {
            return eval( values.join( "+" ) );
        }
    };
    peb.genNode = new ( function () {
        /**
         * Quickly create an HTMLElement
         * @param {string} node Element Name
         * @param {string} content Element Content
         * @param {object} attr Element Attributes
         * @return {HTMLElement}
         */
        this.element = function ( node, content="", attr={} ) {
            let r = document.createElement( node )
            r.appendChild( document.createTextNode( String( content ) ) );
            Object.keys( attr ).forEach( function ( attrName ) {
                r.setAttribute( attrName, attr[attrName] );
            } )
            return r;
        };
        /**
         * Convert text to HTML. Usually this function is not used, sometimes combined with ajax
         * @param {string} str String
         */
        this.fromStr = function ( str ) {
            document.body.appendChild( document.createElement( "peb-operation-card" ) );
            let operationCard = document.querySelector( "peb-operation-card" )
              , result;
            operationCard.innerHTML = str;

            result = operationCard.children;

            document.body.removeChild( operationCard );
            if (result.length == 1) {
                return result[0];
            } else {
                return result
            }
            
        };
        /**
         * Create a text node quickly
         * @param {string} text String
         * @return {Text}
         */
        this.text = function ( text ) {
            return document.createTextNode( String( text ) );
        };
    } )();

    /**
     * Convert HTMLElement to operatable element
     * @param {HTMLElement | Node} el 
     */
    peb.RElement = function RElement(el) {

        this.size = 1
        this.tag = el.tagName,
        this.id = el.id,
        this.oringin = el;
        this.__proto__ = {
            attr: function ( name, index ) {
                if ( !exist( name ) ) {
                    return el.attributes
                } else if ( !exist( index ) ) {
                    switch ( typeof ( name ) ) {
                        case "string":
                            return el.getAttribute( name );
                        case "object":
                            Object.keys( name ).forEach( function ( current ) {
                                el.setAttribute( current, name[current] );
                            } );
                            break;
                    }
                } else {
                    return el.setAttribute( n, String( f ) );
                }
            },
            class: function () {
                return el.classList;
            },
            data: function ( name, value ) {
                if ( !exist( name ) ) {
                    return el.dataset;
                } else if ( !exist( value ) ) {
                    switch ( typeof ( name ) ) {
                        case "string":
                            return el.dataset[name];
                        case "object":
                            Object.keys( name ).forEach( function ( current ) {
                                el.dataset[current] = name[current];
                            } );
                            break;
                    }
                } else {
                    return el.dataset[n] = String( f );
                }
            },
            item: function ( key, value ) {
                if ( exist( value ) ) {
                    return el[key] = value;
                } else {
                    return el[key];
                }
            },
            insert: function ( ...nodes ) {
                nodes.forEach( function ( current ) {
                    if ( current instanceof RElement ) {
                        el.appendChild( current.oringin )
                    } else {
                        el.appendChild( current );
                    }
                    
                } )
            },
            del: function () {
                return el.parentNode.removeChild( el );
            },
            html: function ( value ) {
                if ( exist( value ) ) {
                    return el.innerHTML = String( value );
                } else {
                    return el.innerHTML;
                }
            },
            text: function () {
                return el.innerText
            },
            val: function ( value ) {
                if ( exist( value ) ) {
                    return el.value = String( value );
                } else {
                    return el.value;
                }
            },
            hide: function () {
                // dbh: Display Before Hide
                el.dbh = el.style.display;
                return el.style.display = "none";
            },
            show: function ( type ) {
                if ( exist( type ) ) {
                    return el.style.display = String( type );
                } else {
                    return el.style.display = el.dbh;
                }
            },
            on: function ( event, listener ) {
                let bindEventListener = function ( eventStr, callback ) {
                    if ( el.addEventListener ) {
                        el.addEventListener( eventStr, callback )
                    } else {
                        el.attachEvent( "on" + eventStr, callback.call( el ) )
                    }
                }

                if ( exist( listener ) ) {
                    bindEventListener( event, listener )
                } else if ( typeof listener === 'object' ) {
                    Object.keys( event ).forEach( function ( current ) {
                        bindEventListener( current, event[current] );
                    } );
                }
            },
            parent: function () {
                return new RElement( el.parentElement );
            },
            child: function () {
                return new RElement( el.children[0] )
            },
            next: function () {
                let result = el.nextElementSibling
                if (result === null) {
                    throw new PebNullObjectError("Element is null");
                }
                return new RElement( result );
            },
            prev: function () {
                let result = el.previousElementSibling;
                if (result === null) {
                    throw new PebNullObjectError("Element is null");
                }
                return new RElement( result );
            }
        }
        Object.freeze(this);
    }

    
    /**
     * Convert HTMLCollection to operatable element collection
     * @param {HTMLCollection | NodeList} elements
     */
    peb.RElementsCollection = function RElementsCollection( elements ) {
        this.size = elements.length

        elements.forEach( ( element, index ) => {
            this[index] = new RElement(element);
        });
        
        this.length = elements.length;
        this.__proto__ = {
            forEach: function ( callbackFn, fromIndex=0 ) {
                elements.forEach( ( _, index ) => {
                    if (index >= fromIndex) {
                        callbackFn(this[index], index, this)
                    }
                });
            }
        }
        Object.freeze(this);
    }
    /**
     * Operate the DOM with the smallest possible code  
     * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated  
     * But this may cause some problems  
     * The return result is a custom class  
     * @param {string} selector Query Selector For the Element
     * @param {number} index Index In the List
     */
    peb.sel = function ( selector, index ) {
        if (typeof selector === 'string') {
            let matchesElements = document.querySelectorAll( selector )

            if ( matchesElements.length === 1 ) {
                // ONLY MATCHES 1
                return new RElement( matchesElements.item( 0 ) );

            } else if ( exist( index ) ) {
                return new RElement( matchesElements.item( index ) );

            } else {
                return new RElementsCollection(matchesElements);

            }
        } else {
            // Instant covert

            if (selector instanceof HTMLElement || selector instanceof Node) {
                return new RElement( selector )
            } 
            if (selector instanceof HTMLCollection || selector instanceof NodeList) {
                return new this.RElementsCollection( selector );
            }
        }
    };
    peb.ajax = function( type, url, data, success, fail ) {
        let request = new XMLHttpRequest()
          , args;
        // The parameters are more complicated and can be passed in with `Object` objects
        if ( arguments.length === 1 && type instanceof Object ) {
            args = type;
        } else {
            // If it is passed in in the normal order
            args = {
                type: type,
                url: url,
                data: data,
                success: success,
                fail: fail,
            }
        }
        request.onreadystatechange = function () {
            if ( request.readystate === '4' && request.status === '200' ) {
                if ( args.success ) args.success( request.responseText );
            } else {
                if ( args.fail ) args.fail();
            }
        }
        request.open( args.type, args.url, true );
        request.send( data || null );
    };

    /**
     * print to console
     * @param {any[]} data
     */
    peb.log = function ( ...data ) {
        console.log( ...data )
    }

    /**
     * print to console
     * @param {any[]} data
     */
    peb.log.error = function ( ...data ) {
        console.error( ...data )
    }

    /**
     * print to console
     * @param {any[]} data
     */
    peb.log.warn = function ( ...data ) {
        console.error( ...data )
    }

    /**
     * Clear console
     */
    peb.log.clear = function () {
        console.clear();
    }

    /**
     * return a new string upper cased
     * @param {string} str 
     * @return {string}
     */
    peb.upperCase = (str) => {
        return str.toUpperCase()
    }
    /**
     * return a new string lower cased
     * @param {string} str 
     * @return {string}
     */
    peb.lowerCase = (str) => {
        return str.toLowerCase()
    }

    /**
     * Remove spaces or dashes and convert to camel case
     * @param {string} str
     * @return {string}
      */
    peb.camelCase = (str) => {
        return str.replace(/[ -]./g, ( word ) => {
            return word.replace(/[ -]/g, "").toUpperCase()
        })
    }

    /**
     * Get a class of value
     * @param {any} val 
     */
    peb.classof = function (obj) {
        if (obj && obj.constructor && obj.constructor.toString()) {
            if ( obj.constructor.name ) {
                return obj.constructor.name;
            }
            let str = obj.constructor.toString()
              , arr;
            if ( str.charAt(0) == '[' )
            {
                arr = str.match(/\w+\s∗(\w+)/);
            } else {
                arr = str.match(/function\s*(\w+)/);
            }
            if (arr && arr.length == 2) {
                return arr[1];
            }
        }
        return undefined; 
    }

    /**
     * Return a boolean of is obj a number
     * Contains `123` `"123"` `1.23` `"1.23"` `.23` `".23"` `0xff00` `"0xf3"`
     * @param {string | number} obj 
     */
    peb.isdigit = function (obj) {
        // isNan supports string
        return !isNaN(obj - 0)
    }

    /**
     * Sleep time
     * `peb.sleep(time).then(Fn)` = setTimeOut
     * `await sleep(time)` is normal sleep time
     * @param {number} time 
     */
    peb.sleep = async function (time) {
        return new Promise(resolve => {
            setTimeout( resolve, time );
        });
    }

    /**
     * forEach in ANY OBJECT TYPE
     * @param {object} obj Object for each
     * @param {funtion} callbackFn call back function
     */
    peb.forEach = function (obj, callbackFn) {
        Object.keys(obj).forEach( (value, _, object) => {
            callbackFn( object[value], value, object )
        } )
    }

    /**
     * Return is this in array
     * @param {array} arr
     * @param {any} obj
     */
    peb.inArray = function (arr, obj, returnIndex=false) {
        if (returnIndex) {
            return arr.indexOf(obj) > -1 ? arr.indexOf(obj) : null
        } else {
            return arr.indexOf(obj) > -1
        }
    }

    // Common function integration
    peb.parseJson = JSON.parse;
    peb.stringifyJson = JSON.stringify;
    peb.now = Date.now();

    /**
     * Get search string data
     */
    peb.getSearchData = function () {
        if ( window.location ) {
            let str = location.search
            
            return eval("({" + decodeURIComponent(str.replace(/[?]/g, "").replace(/=/g, ":\"").replace(/&/g, "\",")) + "\"})")
            
        } else {
            throw ReferenceError("window.location is not defined. Are you in browser?")
        }
    }

    /**
     * Wrap URL
     */
    peb.navigate = function ( url, target="_self" ) {
        if ( window.window ) {
            window.opener = null;
            window.open(url, target);
        }
    }

    // Return final object
    window.peb = peb;
    return peb;
});

export default peb;