/**
 * Peb.js JavaScript library
 * @version 3.0.0-rc.1
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
         * Operate the DOM with the smallest possible code.
         * 
         * See the `RElement` and `RElementsCollection` for more information
         */
        function sel(selector: string, index: number): RElement|RElementsCollection

        /**
         * Send HTTPXML Request
         */
        function ajax(type: string, url: string, success: function, fail: function): undefined

        /**
         * Send HTTPXML Request
         */
        function ajax(args: string): undefined

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
         * Get a upper case of a string
         */
        function switchCase(caseNum: 0, str: string): string
        
        /**
         * Get a lower case of a string
         */
        function switchCase(caseNum: 1, str: string): string

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
        function forEach(obj: any): undefined

        /**
         * Create an operatable element.
         */
        class RElement {
            constructor(element: HTMLElement)

            /**
             * Edit attribute `attributeName` to `becoming`
             */
            attr(attributeName: string, becoming: string): undefined

            /**
             * Get attribute `attributeName`
             */
            attr(attributeName: string): string

            /**
             * Edit multy attributes
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
             * Get all attributes
             */
            attr(): NamedNodeMap

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
             * Reffer to attr().
             * In HTML5, attributes like `data-{}` are collected into `dataset`.
             * 
             * `object`         -> merge key to value  
             * `string`         -> get dataset by name  
             * `string, string` -> merge dataset to another string  
             * 
             * Example:
             * ```
             * peb.sel("div", 0).data(foo, "bar")
             * ```
             */
            data(name: string, becomeing: string): undefined|string|object

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