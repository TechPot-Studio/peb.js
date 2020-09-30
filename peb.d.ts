declare module 'peb' {

    /**
     * A namespace of basic peb.js method peb
     */
    namespace peb {

        /**
         * Operate the DOM with the smallest possible code.
         * 
         * See the `RElement` and `RElementsCollection` for more information
         */
        function sel(selector: string, index: number): RElement|RElementsCollection
        
        class RElement {
            constructor(element: HTMLElement)

            /**
             * Edit attribute
             */
            attr(attributeName: string, becoming: string): undefined

            /**
             * Get attribute
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
             * See document
             */
            class(method: string|number, operatingString: string): undefined|DOMSettableTokenList

            /**
             * Reffer to attr().
             * In HTML5, attributes like `data-{}` are collected into `dataset`.
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
             * Get value ()
             */
        }
    }
}