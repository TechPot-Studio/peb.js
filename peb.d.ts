/**
 * Peb.js JavaScript library
 * @version 3.1.0
 */
declare module 'peb' {

    /* type declare */

    type wrapPageTarget = '_blank' | '_self' | '_top' | '_parent'
    type XHRTypes = 'GET' | 'get' | 'POST' | 'post'
    type XHRResponseTypes = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'ms-stream'

    /* interface declare */
    interface ajaxConfigOptions {
        /** Request type - `GET` or `POST`*/
        type: XHRTypes,
        /** Request URL */
        url: string,
        /** Data to send */
        data?: string,
        /** Response type */
        response?: XHRResponseTypes,
        /** Function to do when success */
        success?: (response: any) => void,
        /** Function to do when fail */
        fail?: () => void
    }

    interface translationTableOptions {
        [lang: string]: {
            [word: string]: string
        }
    }

    /* namespace peb */

    /**
     * A namespace of basic peb.js method peb
     */
    namespace peb {
        /** Version of peb.js */
        let version: string;

        /**
         * Peb basically error type.
         * All other peb error are extending this.
         */
        class PebError extends Error {
            constructor(message: string)
        }

        /**
         * Throw in case of required a valid object but value is none
         */
        class PebNullObjectError extends PebError {
            constructor(message: string)
        }

        /**
         * Throw in case of missing node.js or browser environment
         */
        class PebMissingEnvironmentError extends PebError {
            constructor(message: string)
        }

        /**
         * Define translator of `peb-trans` HTML tag
         */
        class TranslationTable {

            /**
             * translation table constructor
             */
            constructor(table: translationTableOptions)

            /**
             * Set translation table
             */
            set set(table: TranslationTable)

            /**
             * Get table value
             */
            get get(): object

            /**
             * Translation by language
             */
            translate(lang: string): void
        }

        /**
         * Create an operable element or be a `sel` function result
         */
        class ElementManager {
            static FIRST_ITEM: 0;

            /** Origin element */
            element: HTMLElement|NodeList|HTMLCollection
            /** Length of list */
            length: number

            /**
             * Convert HTMLElement to operable element
             */
            constructor(node: HTMLElement|NodeList|HTMLCollection)

            /**
             * Get item by index
             */
            item(index: number): HTMLElement

            /**
             * Manage item by index
             */
            manageItem(index: number): this

            /**
             * Each all of element
             */
            forEach(callbackFn: (currentElement: HTMLElement, index: number, list: ElementManager) => void): void

            /**
             * Get or set html
             */
            html(newer: string): string|ElementManager

            /**
             * Get inner text
             */
            text(): string

            /**
             * Get or set value of a form element
             */
            value(newer: string): void

            /**
             * Get or set value of a form element
             *
             * **As known as `value` function**
             */
            val(newer: string): void

            /**
             * Bind event listener
             */
            bind(type: string, listener: Function): void

            /**
             * Bind event listener
             *
             * **As known as `bind` function**
             */
            on(type: string, listener: Function): void

            /**
             * Get DOMSettableTokenList of class
             */
            class(index?: number): DOMSettableTokenList

            /**
             * Add class token
             */
            addClass(...tokens: string[]): this

            /**
             * Remove class token
             */
            removeClass(...tokens: string[]): this

            /**
             * Clear all class
             */
            clearClass(...tokens: string[]): this

            /**
             * Hide element
             */
            hide(): this

            /**
             * Set element display type
             */
            display(type: string): this

            /**
             * Show element or set display type
             */
            show(type?: string): void

            /**
             * Remove element
             */
            delete(index?: number): void

            /**
             * Remove element
             *
             * **As known as `delete` function**
             */
            del(index?: number): void

            /**
             * Manage child of the element
             */
            child(): this

            /**
             * Manage parent of the element
             */
            parent(): this

            /**
             * Manage next element sibling
             */
            next(): this

            /**
             * Manage previous element sibling
             */
            prev(): this

            /** Click elements or bind a `click` event listener */
            click(fn?: Function): void
            /** Focus elements or bind a `focus` event listener */
            focus(fn?: Function): void
            /** Bind a `mouseenter` event listener */
            mouseenter(fn: Function): void
            /** Bind a `mouseleave` event listener */
            mouseleave(fn: Function): void
            /** Bind a `mouseup` event listener */
            mouseup(fn: Function): void
            /** Bind a `mousedown` event listener */
            mousedown(fn: Function): void
            /** Bind a `mousemove` event listener */
            mousemove(fn: Function): void
            /** Bind a `mouseover` event listener */
            mouseover(fn: Function): void
            /** Bind a `mouseout` event listener */
            mouseout(fn: Function): void
            /** Bind a `mousewheel` event listener */
            mousewheel(fn: Function): void
            /** Bind a `drag` event listener */
            drag(fn: Function): void
            /** Bind a `dragstart` event listener */
            dragstart(fn: Function): void
            /** Bind a `dragend` event listener */
            dragend(fn: Function): void
            /** Bind a `dragenter` event listener */
            dragenter(fn: Function): void
            /** Bind a `dragexit` event listener */
            dragexit(fn: Function): void
            /** Bind a `dragover` event listener */
            dragover(fn: Function): void
            /** Bind a `dragleave` event listener */
            dragleave(fn: Function): void
            /** Bind a `canplay` event listener */
            canplay(fn: Function): void
            /** Bind a `canplaythrough` event listener */
            canplaythrough(fn: Function): void
            /** Bind a `play` event listener */
            play(fn: Function): void
            /** Bind a `playing` event listener */
            playing(fn: Function): void
            /** Bind a `copy` event listener */
            copy(fn: Function): void
            /** Bind a `beforecopy` event listener */
            beforecopy(fn: Function): void
            /** Bind a `paste` event listener */
            paste(fn: Function): void
            /** Bind a `beforepaste` event listener */
            beforepaste(fn: Function): void
            /** Bind a `blur` event listener */
            blur(fn: Function): void
            /** Bind a `load` event listener */
            load(fn: Function): void
            /** Bind a `loadstart` event listener */
            loadstart(fn: Function): void
            /** Bind a `loadeddata` event listener */
            loadeddata(fn: Function): void
            /** Bind a `loadedmetadata` event listener */
            loadedmetadata(fn: Function): void
            /** Bind a `focusin` event listener */
            focusin(fn: Function): void
            /** Bind a `focusout` event listener */
            focusout(fn: Function): void
            /** Bind a `keydown` event listener */
            keydown(fn: Function): void
            /** Bind a `keyup` event listener */
            keyup(fn: Function): void
            /** Bind a `keypress` event listener */
            keypress(fn: Function): void
        }

        /**
         * Return the current time with timestamp
         */
        function now(): number

        /**
         * Stringify to json string
         * 
         * @param obj Object to stringify
         */
        function stringifyJson(obj: object): string

        /**
         * Parse json string to object
         * 
         * @param jsonString JSON string
         */
        function parseJson(jsonString: string): object

        /**
         * Select a HTMLElement and operate it.
         *
         * @param selector Css selector of the element
         * @param index Index in the list
         */
        function select(selector: string, index?: number): ElementManager

        /**
         * Convert HTMLElement into peb RElement or RElementsCollection.
         */
        function select(element: HTMLElement|HTMLCollection|NodeList): ElementManager

        /**
         * Send HTTP XML Request
         */
        function ajax(type: string, url: string, data: any, success?: (text: string, xml: Document) => void, fail?: () => void): void

        /**
         * Send HTTP XML Request
         */
        function ajax(args: ajaxConfigOptions): void

        /**
         * Create an element
         *
         * As known as: `genNode.element`
         */
        function createElement(name: string, attributes: object, inner?: string, ...child: (HTMLElement)[])

        /**
         * Send log to console
         */
        function log(...data: any[]): void

        /**
         * More console infos
         */
        namespace log {
            /**
             * Send error to console
             */
            function error(...data: any[]): void
            
            /**
             * Send warning to console
             */
            function warn(...data: any[]): void

            /**
             * Clear console
             */
            function clear(): void

            /**
             * Send table to console
             */
            function table(tabularData: any, properties: ReadonlyArray<string>): void

            /**
             * Add a console log group
             */
            function group(label: string, isCollapsed?: boolean, beetween?: Function): void

            /**
             * End a group
             */
            function groupEnd(): void

            /**
             * Trace a function
             */
            function trace(...data: any[]): void

            /**
             * Send assertion to console
             */
            function assert(condition: boolean, ...data: any[])
        }

        /**
         * Wrap URL to another page
         * 
         * @param url URL to wrap
         * @param target Same as `target` in `<a>`
         */
        function navigate(url: string, target: wrapPageTarget): void

        /**
         * Get a upper case of a string.
         */
        function upperCase(str: string): string
        
        /**
         * Get a lower case of a string.
         */
        function lowerCase(str: string): string
        
        /**
         * Remove spaces or dashes and convert to camel case.
         * 
         * Example:
         * ```
         * peb.camelCase("a good variable"); // aGoodVariable
         * peb.camelCase("a-bad-variable"); // aBadVariable
         * ```
         */
        function camelCase(str: string): string

        /**
         * A map to store data
         */
        class dataMap {
            /**
             * Construct a empty map
             */
            constructor()

            /**
             * Set key to value
             */
            set(key: string, value: any): void

            /**
             * Get a value by key
             */
            get(key: string): any

            /**
             * Get all keys
             */
            keys(): Array<string>

            /**
             * Remove a key
             */
            remove(key: string): boolean

            /**
             * Lock a type to make all of add in values match or throw an error
             */
            lockType(type: Function): void
        }

        /**
         * Get constructor name of the object
         */
        function getclass(obj: any): string

        /**
         * Insert item to array
         * 
         * @param arr Array
         * @param items Items to insert
         */
        function insert(arr: Array<any>, ...items: any[]): number

        /**
         * An empty function
         */
        function noop(): void

        /**
         * Slice array or string
         * 
         * @param obj String or array
         * @param start Start index
         * @param end End index
         */
        function slice(obj: string|Array<any>, start: number, end?: number): string|Array<any>

        /**
         * Get JSON Object format of location.search
         * 
         * Example:
         * ```plain
         * localhost:8080/?foo=b%20ar&bar=foo-foo1-foo2
         * ```
         * ```
         * getSearchData(); // {foo: "b ar", bar: "foo-foo1-foo2"}
         * ```
         */
        function getSearchData(): object

        /**
         * Get a number or string is numeric
         */
        function isdigit(obj: string|number): boolean

        /**
         * await sleep time or sleep a time then do a function
         *
         * Example:
         * ```
         * peb.sleep(1000).then(() => { alert("foo") })
         *
         * await peb.sleep(1000)
         * ```
         */
        function sleep(ms: number): Promise<undefined>

        /**
         * String multiplication.
         * 
         * This method is equivalent to string multiplication in some programming languages (e.g: Python)
         * 
         * @param str String
         * @param times Times to repeat
         * @param connector Connect character
         */
        function stringTimes(str: string, times: number, connector?: string): string

        /**
         * ForEach in any object type
         * 
         * ProTip: Likes `Array.forEach`
         */
        function forEach(obj: any, callbackFn: (current: any, index: number, array: any[]) => void): void

        /**
         * ~~Generate a node~~
         * 
         * **Warning:** This method will be removed in the next major version
         */
        namespace genNode {
            /**
             * Generate a new element with innerHTML and attributes
             * 
             * @param nodeName Node name
             * @param inner Inner HTML of the element
             * @param attr Object of attributes
             */
            function element(nodeName: string, inner?: string, attr?: object): HTMLElement

            /**
             * Generate a text node.
             */
            function text(text: string): Text

            /**
             * Parse the string of HTML content into Node
             */
            function fromStr(str: string): HTMLElement|HTMLCollection|Node|NodeList|Text

        }
    }
    export = peb
}
