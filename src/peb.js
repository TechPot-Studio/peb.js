/**
 * Checked Out JQuery ( Copyright OpenJS Foundation and other contributors, https://openjsf.org/ )
 * Uncopied Source-Code
 * 
 * Used features like arrow functions ( `=>` ), **Do not** support IE in any version
 */
var peb = function(){};

;( function ( window ) {
    'use strict';
    // In node, `typeof( document ) === undefined`
    let document = window.document
      , arr = []
      , exist = function (  value  ) {
            if ( typeof value === 'undefined' ) {
                return false;
            } else {
                return true;
            }
        };
    // Informations
    peb.version = "2.1.0",
    peb.platform = window.document ? "browser" : "node"
    // Node.js does not support these functions, needs to check whether the document is undefined
    peb.Sound = class Sound {
        static destroy( obj ) {
            document.body.removeChild( obj.player );
        }
        constructor( url ) {
            this.url = url;
            /* INIT */
            this.player = new Audio();
            this.player.style.display = "none";
            this.player.src = this.url;
            document.body.appendChild( this.player );
        }
        play() {
            this.player.play()
        }
        pause() {
            this.player.pause();
        }
        /**
         * Set repeat or not
         * @param {boolean} b
         */
        loop( b ) {
            this.player.onended = b ? this.player.play : new Function;
        }
    }
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
        } );
    }
    String.prototype.multi = function ( times, connect="" ) {
        return Array( times )
            .fill( this )
            .join( connect );
    };
    Object.prototype.forEach = ( f ) => {
        arr.forEach.call( Object.keys( this ), f )
    };
    /**
     * Choose default function of peb().
     * @param {function} func Default Function
     */
    peb.setDefault = function ( func ) {
        let backup = peb;
        peb = func;
        Object.keys( backup ).forEach( function ( current ) {
            peb[current] = backup[current]
        } );
        // Return to destroy variable
        return func;
    }
    peb.translation = function ( table ) {
        document.querySelectorAll( "peb-trans" ).forEach(( c ) => {
            c.innerHTML = table[c.getAttribute( "p-lang" )][c.getAttribute( "p-word" )];
        });
    };
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
        this.elementFromText = function ( str ) {
            document.body.appendChild( document.createElement( "peb-operation-card" ) );
            let operationCard = document.querySelector( "peb-operation-card" );
            operationCard.innerHTML = str;

            let result = operationCard.children[0];
            document.body.removeChild( operationCard );
            return result;
        };
        /**
         * Create a text node quickly
         * @param {string} text String
         * @return {Text}
         */
        this.textNode = function ( text ) {
            return document.createTextNode( String( text ) );
        };
    } )();
    /**
     * Support: Chrome 54 , Firefox 22 , Safari 10 , Edge 12 , Opera 32  
     * Operate the DOM with the smallest possible code  
     * In order to be compatible with other APIs, the HTMLElement prototype is not directly manipulated  
     * But this may cause some problems  
     * The return result is a custom class  
     * @param {string} selector Query Selector For the Element
     * @param {number} index Index In the List
     */
    peb.sel = function (  selector, index  ) {
        if ( selector[0] === "#" || exist( index ) ) {
            let el = document.querySelectorAll( selector ).item( index || 0 ); // *El*ement
            return new ( function RElement() {
                this.selector = selector,
                    this.id = el.id,
                    this.cls = el.classList,
                    this.tag = el.tagName,
                    this.obj = el,

                    this.__proto__ = {
                        attr: function ( name, index ) {
                            if ( !exist( name ) ) {
                                return el.attributes
                            } else if ( !exist( index ) ) {
                                switch ( typeof ( name ) ) {
                                    case "string":
                                        return el.getAttribute( name );
                                    case "object":
                                        Object.keys( name ).forEach( ( current ) => {
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
                                        Object.keys( name ).forEach( ( current ) => {
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
                                        Object.keys( name ).forEach( ( current ) => {
                                            el.dataset[current] = n[current];
                                        } );
                                }
                            } else {
                                return el.style[n] = String( value )
                            }
                        },
                        insert: function ( ...nodes ) {
                            nodes.forEach( ( current ) => {
                                el.appendChild( current );
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
                                        Object.keys( event ).forEach( ( current ) => {
                                            el.addEventListener( current, event[current] );
                                        } );
                                        break;
                                }
                            }
                        }
                    }
            } )();
        } else {
            /**
             * `RElementsCollection` is a collection of `RElement`
             * The contained methods will call this function repeatedly
             */ 
            return new ( function RElementsCollection() {
                let elements = document.querySelectorAll( selector )
                elements.forEach( ( current, index ) => {
                    this[index] = current;
                } );
                this.length = elements.length;
                this.__proto__ = {
                    forEach: function ( func ) {
                        elements.forEach( ( _current, index ) => {
                            func( peb.pb( selector, index ), index );
                        } );
                    }
                }
            } )();
        }
    };
    peb.ajax = function( type, url, success=function(){}, fail=function(){} ) {
        let request = window.XMLHttpRequest ? XMLHttpRequest : new ActiveXObject( "Microsoft.XMLHTTP" )
          , args;
        // The parameters are more complicated and can be passed in with `Object` objects
        if ( arguments.length === 1 && typeof type === 'object' ) {
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
                args.success( request.responseText );
            } else {
                args.fail();
            }
        }
        request.open( args.type, args.url, true );
        request.send();
    }
} )( this );
