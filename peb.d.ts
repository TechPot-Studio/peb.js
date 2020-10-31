/**
 * Peb.js JavaScript library
 * @version 3.1.0
 */
declare module 'peb' {

    /* interface declare */
    interface ajaxConfigOptions {
        /** Request type - `GET` or `POST`*/
        type: string,
        /** Request URL */
        url: string,
        /** Data to send */
        data?: string,
        /** Response type */
        response?: string,
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

    /* type declare */

    type wrapPageTarget = '_blank' | '_self' | '_top' | '_parent'

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
         * Create an operable elements collection
         */
        class RElementsCollection {
            /**
             * construct by exist node list
             */
            constructor(elements: NodeList)

            /**
             * Get item by index
             */
            item(index: number): RElement

            /**
             * ForEach loop.
             * 
             * @param callbackFn executed each time loop
             * @param startIndex start from index
             */
            forEach(callbackFn: (currentElement: RElement, index: number, collection: RElementsCollection) => void, startIndex?: number): void
        }

        /**
         * Create an operable element or be a `sel` function result
         */
        class RElement {
            constructor(element: HTMLElement)

            /**
             * Edit attribute `attributeName` to `becoming`
             */
            attr(attributeName: string, becoming: string): void

            /**
             * Get all attributes or attribute `attributeName`
             */
            attr(attributeName?: string): string|NamedNodeMap

            /**
             * Edit multiple attributes
             * 
             * Example:
             * ```
             * peb.sel("div", 0).attr({
             *     foo: "val",
             *     bar: "val"
             * })
             * ```
             */
            attr(attributesCollection: object): void

            /**
             * Add, Remove, Get or Set class of the element
             */
            class(): DOMSettableTokenList

            /**
             * Click element
             */
            click(): void

            /**
             * Set dataset `name` to `becoming`.
             */
            data(name: string, becoming: string): string

            /**
             * Set dataset by object `key` to `value`.
             * 
             * Example:
             * ```
             * peb.sel("div", 0).data({
             *     foo: "val",
             *     bar: "val"
             * })
             * ```
             */
            data(sequence: object): void

            /**
             * Insert new element to current element
             */
            insert(...nodes: Node[]|HTMLElement[]|RElement[]): void

            /**
             * Insert to another element and delete this element
             */
            insertTo(node: HTMLElement|RElement): void

            /**
             * Delete element
             */
            del(): void

            /**
             * Get inner (html)
             */
            html(): string

            /**
             * Set inner (html) value.
             * Allow HTML in string
             */
            html(becoming: string): string

            /**
             * Get inner plain text
             */
            text(): string

            /**
             * Get value (`<input>` element, etc.)
             */
            val(): string

            /**
             * Set value (`<input>` element, etc.)
             */
            val(becoming: string): string

            /**
             * Hide element.
             * Actually is set style.display to none
             */
            hide(): void

            /**
             * Show element (if already hide)
             */
            show(): string

            /**
             * Set style
             */
            style(sheet: object): void

            /**
             * Set element display type
             */
            show(type: string): string

            /**
             * Add event listener
             */
            on(event: string, listener: Function): void

            /**
             * Add multiple event listener
             * 
             * Example:
             * ```
             * peb.sel("div#foo").on({
             *     click: () => {
             *         alert("bar")
             *     },
             *     mouseover: () => {
             *         console.log("bar")
             *     }
             * })
             * ```
             */
            on(eventListenerSequence: Object): void

            /**
             * Return parent node
             */
            parent(): RElement

            /**
             * Return first child node
             */
            child(): RElement

            /**
             * Get next sibling
             * @param isContainTextNode If true then contains text nodes
             */
            next(isContainTextNode: boolean): RElement

            /**
             * Get previous sibling
             * @param isContainTextNode If true then contains text nodes
             */
            prev(isContainTextNode: boolean): RElement
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
         * No need `index` when selector can only match ONE element
         * 
         * @param selector Css Selector of the element
         * @param index Index in the list
         */
        function sel(selector: string, index?: number): RElement

        /**
         * Select multiple HTMLElements and operate it.
         * 
         * @param selector Css Selector of elements
         */
        function sel(selector: string): RElementsCollection

        /**
         * Convert Node or HTMLElement into peb RElement or RElementsCollection.
         */
        function sel(element: HTMLElement|HTMLCollection|Node|NodeList): RElement|RElementsCollection

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
