/**
 * Checked Out JQuery ( Copyright OpenJS Foundation and other contributors, https://openjsf.org/ )
 * Uncopied Source-Code
 * 
 * @copyright TechPot Studio and other contributors
 */

;(function ( global, main ) {
    'use strict';
    if ( global.module ) {
        moudule.export = main( global );
    } else if ( global.document ) {
        main( global );
    }
})( this, function ( window ) {
    'use strict';
    window.peb = function peb() {
        return;
    }

    window.PebError = class PebError extends Error {
        constructor(message) {
            super(message);
            this.name = "PebBasicError";
        }
    }
    window.PebExtensionError = class PebExtensionError extends PebError {
        constructor(message) {
            super(message);
            this.name = "PebExtensionError";
        }
    }
    window.PebNullObjectError = class PebNullObjectError extends PebError {
        constructor(message) {
            super(message);
            this.name = "PebNullObjectError"
        }
    }

    let document = window.document
      , arr = []
      , exist = function ( value ) {
            return !(typeof value === 'undefined')
        };
    peb.platform = window.document ? "browser" : "node"
    if ( document ) {
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
                this.style = {
                    color: "attr( color ), inherit",
                    fontFamily: "attr( font ), inherit"
                }
            }
        });
        peb.Sound = class Sound {
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
    /**
     * Choose default function of peb().
     * @param {function} func Default Function
     */
    peb.setDefault = function ( func ) {
        if (func instanceof Function) {
            let backup = peb;
            peb = func;
            Object.keys( backup ).forEach( function ( current ) {
                peb[current] = backup[current]
            } );
            // Return to destroy variable
            return func;
        }
    }
    peb.translationTable = class translationTable {
        constructor(table) {
            if (typeof(tabel) === 'object') {
                this.tabel = table;
            }
        }

        /**
         * Set value
         * @param {{ [x: string]: { [x: string]: string; }; }} newTabel
         * @return {undefined}
         */
        set set(newTabel) {
            Object.keys(newTabel).forEach( function ( lang ) {
                (newTabel[lang]).forEach( function ( word ) {
                    this.tabel[lang][word] = newTabel[lang][word]
                });
            });
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
     * @param  {...[number, Array<number>]} values Values to sum
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
            Object.keys( attr ).forEach( function ( current ) {
                r.setAttribute( current, attr[current] );
            } )
            return r;
        };
        /**
         * Convert text to HTML. Usually this function is not used, sometimes combined with ajax
         * @param {string} str String
         * @return {HTMLElement}
         */
        this.fromStr = function ( str, isReturnCollection=false ) {
            document.body.appendChild( document.createElement( "peb-operation-card" ) );
            let operationCard = document.querySelector( "peb-operation-card" );
            operationCard.innerHTML = str;

            let result = operationCard.children;

            document.body.removeChild( operationCard );
            if ( isReturnCollection ) {
                return result;
            } else {
                return result[0];
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
    function RElement(el) {  
        this.tag = el.tagName,
        this.id = el.id,
        this.cls = el.classList,
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
            dats: function ( name, value ) {
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
            css: function ( name, value ) {
                if ( !exist( f ) ) {
                    switch ( typeof ( name ) ) {
                        case "string":
                            return el.style[name];
                        case "object":
                            Object.keys( name ).forEach( function ( current ) {
                                el.dataset[current] = n[current];
                            } );
                    }
                } else {
                    return el.style[n] = String( value )
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
            htm: function ( value ) {
                if ( exist( value ) ) {
                    return el.innerHTML = String( value );
                } else {
                    return el.innerHTML;
                }
            },
            txt: function () {
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
                if ( exist( func ) ) {
                    el.addEventListener( event, callback );
                } else {
                    switch ( typeof ( event ) ) {
                        case "string":
                            el.removeEventListener( listener );
                            break;
                        case "object":
                            Object.keys( event ).forEach( function ( current ) {
                                el.addEventListener( current, event[current] );
                            } );
                            break;
                    }
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
    function RElementsCollection(elements) {
        /**
         * In order to be compatible with IE.
         * Because of a feature (perhaps a bug), only the 'this' of the parent object is preserved in Arrow Function.
         * But, Internet Explorer does not support Arrow Function at this time.
         */
        ( function (this_) {
            elements.forEach( function ( element, index ) {
                this_[index] = new RElement(element);
            });
        })(this);
        
        this.length = elements.length;
        this.__proto__ = {
            forEach: function ( callbackFn, fromIndex=0 ) {
                elements.forEach( function ( _, index ) {
                    if (index >= fromIndex) {
                        callbackFn(this[index], index, this)
                    }
                });
            }
        }
        Object.freeze(this);
    }
    /**
     * Support: Chrome 54 , Firefox 22 , Safari 10 , Edge 12 , Opera 32  
     * Operate the DOM with the smallest possible code  
     * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated  
     * But this may cause some problems  
     * The return result is a custom class  
     * @param {string} selector Query Selector For the Element
     * @param {number} index Index In the List
     */
    peb.sel = function ( selector, index ) {
        if ( selector[0] === "#" || exist( index ) ) {
            let element = document.querySelectorAll( selector ).item( index || 0 ); // *El*ement
            return new RElement(element);
        } else {
            let elements = document.querySelectorAll( selector )
            return new RElementsCollection(elements);
        }
    };
    peb.ajax = function( type, url, success=function(){}, fail=function(){} ) {
        let request = window.XMLHttpRequest ? XMLHttpRequest : new ActiveXObject( "Microsoft.XMLHTTP" )
          , args;
        // The parameters are more complicated and can be passed in with `Object` objects
        if ( arguments.length === 1 && type instanceof Object ) {
            args = type;
        } else {
            // If it is passed in in the normal order
            args = {
                type: type,
                url: url,
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
        request.send();
    };

    /**
     * Allow making extends module
     * @param {object} config
     * @throws PebExtensionError
     */
    peb.extend = function ( config={} ) {
        if ( config.author && config.version && config.export ) {
            console.info( `Extension Info:\nAuthor: ${config.author} <${config.email || "null"}>\nVersion: ${config.version}` );
            return Object.assign( peb, {} );
        } else {
            throw new PebExtensionError("The parameter of peb.extend is missing some information");
        }
        
    }

    return peb;
});
