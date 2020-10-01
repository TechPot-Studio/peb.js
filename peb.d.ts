/**
 * Peb.js JavaScript library
 * @version 3.0.0-rc.2
 */
declare module 'peb' {

    /**
     * A namespace of basic peb.js method peb
     */
    namespace peb {

        const parseJson = JSON.parse
        const stringifyJson = JSON.stringify
        const now = Date.now()

        /**
         * Select a HTMLElement and operate it.
         * 
         * No need `index` parameter if `selector` is id selector,
         * but we recommended pass in `null`
         */
        function sel(selector: string, index?: number): RElement

        /**
         * Select multiple HTMLElements and operate it.
         */
        function sel(selector: string): RElementsCollection

        /**
         * Send HTTPXML Request
         */
        function ajax(type: string, url: string, success: function, fail: function): undefined

        /**
         * Send HTTPXML Request
         */
        function ajax(args: object): undefined

        /**
         * Send console log
         * 
         * msg types
         * 
         * | Name       | ID  |
         * | :--------: | :-: |
         * | `"log"`    | `0` |
         * | `"info"`   | `1` |
         * | `"error"`  | `2` |
         * | `"warn"`   | `3` |
         * | `"clear"`  | `4` |
         */
        function console(msgType: string, ...data: string[]): undefined
        
        /**
         * Get a upper or lower case of a string.
         * 
         * caseNum is 0 (lower case) or 1 (upper case)
         */
        function switchCase(caseNum: number, str: string): string

        /**
         * Get constructor name of the object
         */
        function getclass(obj: any): string

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
         * Cteate an operatable elements collection
         */
        class RElementsCollection {
            /**
             * construct by exist node list
             */
            constructor(elements: NodeList)

            forEach(callbackFn: (element: RElement, index: number, collection: RElementsCollection) => void, startIndex: number): undefined
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
             * Get full class list
             */
            class(method: "get"): DOMSettableTokenList

            /**
             * Set token list
             * 
             * `to` parameter example: `"foo"` `"foo bar"`
             */
            class(method: "set", to: string): string

            /**
             * Add a class to class list
             */
            class(method: "add", className: string): DOMSettableTokenList

            /**
             * Remove class in class list
             */
            class(method: "remove", className: string): DOMSettableTokenList

            /**
             * Get all or one of dataset.
             * Dataset is attributes like `data-{}`
             */
            data(name?: string): object

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
            on(eventListenrSequence: Object): undefined

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