/**
 * Peb.js JavaScript library
 * @version 3.0.0
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
        /** Function to do when success */
        success?: function,
        /** Function to do when fail */
        fail?: function
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

        const parseJson = JSON.parse
        const stringifyJson = JSON.stringify
        const now = Date.now()

        /**
         * Peb basicly error type.
         * All other peb error are extending this.
         */
        class PebError extends Error {
            constructor(message: string)
        }
        /**
         * If required a valid object but value is none, then throw this.
         */
        class PebNullObjectError extends PebError {
            constructor(message: string)
        }

        /**
         * Select a HTMLElement and operate it.
         * 
         * No need `index` when selector can only match ONE element
         */
        function sel(selector: string, index?: number): RElement

        /**
         * Select multiple HTMLElements and operate it.
         */
        function sel(selector: string): RElementsCollection

        /**
         * Convert Node or HTMLElement into peb RElement or RElementsCollection.
         */
        function sel(element: HTMLElement|HTMLCollection|Node|NodeList): RElement|RElementsCollection

        /**
         * Send HTTPXML Request
         */
        function ajax(type: string, url: string, data: any, success: function, fail: function): undefined

        /**
         * Send HTTPXML Request
         */
        function ajax(args: ajaxConfigOptions): undefined

        /**
         * Send log to console
         */
        function log(...data: any[]): undefined

        /**
         * More console infos
         */
        namespace log {
            /**
             * Send error to console
             */
            function error(...data: any[]): undefined
            
            /**
             * Send warning to console
             */
            function warn(...data: any[]): undefined

            /**
             * Clear console
             */
            function clear(): undefined
        }
        
        /**
         * Wrap URL to another page
         */
        function navigate(url: string, target: wrapPageTarget): undefined

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
         * Get constructor name of the object
         */
        function getclass(obj: any): string

        /**
         * Slice array or string
         */
        function slice(obj: string|Array, start: number, end?: number): string|Array

        /**
         * Get JSON Object format of location.search
         * 
         * Example:
         * ```plain
         * locahost:8080/?foo=b%20ar&bar=foo-foo1-foo2
         * ```
         * ```
         * getSearchData(); // {foo: "b ar", bar: "foo-foo1-foo2"}
         * ```
         */
        function getSearchData(): object

        /**
         * Get a number or string is numberic
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
         * ForEach in any object type
         */
        function forEach(obj: any, callbackFn: (current: any, index: number, array: any[]) => void): undefined

        /**
         * Generate a node
         */
        namespace genNode {
            /**
             * Generate a new element with innerHTML and attributes
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


        /**
         * Define translator of `peb-trans` HTML tag
         */
        class translationTable {

            /**
             * translation table constructor
             */
            constructor(table: translationTableOptions)

            /**
             * Set translation table
             */
            set set(table: translationTable): translationTable

            /**
             * Get table value
             */
            get get(): object

            /**
             * Translation by languange
             */
            translate(lang: string): undefined
        }

        /**
         * Cteate an operatable elements collection
         */
        class RElementsCollection {
            /**
             * construct by exist node list
             */
            constructor(elements: NodeList)

            /**
             * ForEach loop.
             */
            forEach(callbackFn: (currentElement: RElement, index: number, collection: RElementsCollection) => void, startIndex?: number): undefined
        }

        /**
         * Create an operatable element or be a `sel` function result
         */
        class RElement {
            constructor(element: HTMLElement|Node)

            /**
             * Edit attribute `attributeName` to `becoming`
             */
            attr(attributeName: string, becoming: string): undefined

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
            attr(attributesCollection: object): undefined

            /**
             * Add, Remove, Get or Set class of the element
             */
            class(): DOMSettableTokenList

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
            data(sequence: object): undefined

            /**
             * Insert new element to current element
             */
            insert(...nodes: Node[]|HTMLElement[]|RElement[]): undefined

            /**
             * Delete element
             */
            del(): undefined

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
            hide(): undefined

            /**
             * Show element (if already hide)
             */
            show(): string

            /**
             * Set element display type
             */
            show(type: string): string

            /**
             * Add event listener
             */
            on(event: string, listener: function): undefined

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
            on(eventListenerSequence: Object): undefined

            /**
             * Return parent node
             */
            parent(): RElement

            /**
             * Return first child node
             */
            child(): RElement

            /**
             * Get next elementSibling
             */
            next(): RElement

            /**
             * Get previous elementSibling
             */
            prev(): RElement
        }
    }
}