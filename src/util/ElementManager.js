export default class ElementManager {
    /** @type {HTMLElement | HTMLCollection | Node | NodeList} */
    element;
    /** @type {number} */
    length;

    constructor(origin, selector) {
        this.element = origin;
        this.length = origin.length || 1;
        this.selector = selector || null;
        this.forEach((element, index) => {
            this[index] = element;
        });
    }

    item(index) {
        return this[index];
    }

    manageItem(index) {
        return new ElementManager(this[index]);
    }

    first() {
        return this.manageItem(0);
    }

    last() {
        return this.manageItem(this.length - 1)
    }

    splice() {
        /* Pseudo-array must have a `splice` function */
    }

    forEach(callbackFn) {
        if (this.element instanceof Node || this.element instanceof HTMLElement || this.element instanceof HTMLDocument) {
            callbackFn(this.element, 0, this);
        } else {
            this.element.forEach(callbackFn);
        }
    }

    html(newer) {
        if (newer === undefined) {
            return this.item(0).innerHTML;
        } else {
            this.forEach((eachElement) => {
                eachElement.innerHTML = newer;
            });
            return this;
        }
    }

    text() {
        return this.item(0).innerText;
    }

    value(newer) {
        if (newer === undefined) {
            return this.item(0).value;
        } else {
            this.forEach(eachElement => eachElement.value = newer);
        }
    }

    val(newer) {
        this.value(newer)
    }

    bind(type, listener) {
        this.forEach(eachElement => eachElement.addEventListener(type, listener));
    }

    on(type, listener) {
        this.bind(type, listener);
    }

    class() {
        return this.item(0).classList;
    }

    addClass(...tokens) {
        this.forEach(eachElement => eachElement.classList.add(...tokens));
        return this;
    }

    removeClass(...tokens) {
        this.forEach(eachElement => eachElement.classList.remove(...tokens));
        return this;
    }

    clearClass() {
        this.forEach(eachElement => eachElement.className = '');
        return this;
    }

    hide() {
        this.forEach((eachElement) => {
            eachElement.displayType = eachElement.style.display;
            eachElement.style.display = 'none';
        });
        return this;
    }

    display(type) {
        this.forEach((eachElement) => {
            eachElement.style.display = type;
        });
        return this;
    }

    show(type) {
        if (type === undefined) {
            this.forEach((eachElement) => {
                eachElement.style.display = eachElement.displayType || 'initial';
                delete eachElement.displayType;
            })
        } else {
            this.display(type);
        }
    }

    toggle() {
        this.forEach((eachElement) => {
            if (eachElement.displayType) {
                eachElement.displayType = eachElement.style.display;
                eachElement.style.display = 'none';
            } else {
                eachElement.style.display = eachElement.displayType || 'initial';
                delete eachElement.displayType;
            }
        });
    }

    toggleVisible() {
        this.toggle();
    }

    delete(index) {
        if (index === undefined) {
            this.forEach(eachElement => eachElement.parent.removeChild(eachElement));
        } else {
            let singleElement = this.item(index);
            singleElement.parent.removeChild(singleElement);
        }
    }

    del(index) {
        this.delete(index);
    }

    child() {
        return new ElementManager(this.item(0).children);
    }

    parent() {
        return new ElementManager(this.item(0).parentElement);
    }

    next() {
        return new ElementManager(this.item(0).nextElementSibling);
    }

    prev() {
        return new ElementManager(this.item(0).previousElementSibling);
    }

    append(...elements) {
        this.element.append(...elements);
    }

    add(...elements) {
        this.append(...elements);
    }

    toArray() {
        let result = [];
        this.forEach(eachElement => result.push(eachElement));
        return result;
    }

    click(fn) {
        fn ? this.bind('click', fn) : this.forEach(eachElement => eachElement.click());
    }

    focus(fn) {
        fn ? this.bind('focus', fn) : this.forEach(eachElement => eachElement.focus());
    }

    mouseenter(fn)     { this.bind('mouseenter', fn); }
    mouseleave(fn)     { this.bind('mouseleave', fn); }
    mouseup(fn)        { this.bind('mouseup', fn); }
    mousedown(fn)      { this.bind('mousedown', fn); }
    mousemove(fn)      { this.bind('mousemove', fn); }
    mouseover(fn)      { this.bind('mouseover', fn ); }
    mouseout(fn)       { this.bind('mouseout', fn) }
    mousewheel(fn)     { this.bind('mousewheel', fn); }
    drag(fn)           { this.bind('drag', fn); }
    dragstart(fn)      { this.bind('dragstart', fn); }
    dragend(fn)        { this.bind('dragend', fn); }
    dragenter(fn)      { this.bind('dragenter', fn); }
    dragexit(fn)       { this.bind('dragexit', fn); }
    dragover(fn)       { this.bind('dragover', fn); }
    dragleave(fn)      { this.bind('dragleave', fn); }
    canplay(fn)        { this.bind('canplay', fn); }
    canplaythrough(fn) { this.bind('canplaythrough', fn); }
    play(fn)           { this.bind('play', fn); }
    playing(fn)        { this.bind('playing', fn); }
    copy(fn)           { this.bind('copy', fn); }
    beforecopy(fn)     { this.bind('beforecopy', fn); }
    paste(fn)          { this.bind('paste', fn); }
    beforepaste(fn)    { this.bind('beforepaste', fn); }
    blur(fn)           { this.bind('blur', fn); }
    load(fn)           { this.bind('load', fn); }
    loadstart(fn)      { this.bind('loadstart', fn); }
    loadeddata(fn)     { this.bind('loadeddata', fn); }
    loadedmetadata(fn) { this.bind('loadedmetadata', fn); }
    focusin(fn)        { this.bind('focusin', fn); }
    focusout(fn)       { this.bind('focus', fn); }
    keydown(fn)        { this.bind('keydown', fn); }
    keyup(fn)          { this.bind('keyup', fn); }
    keypress(fn)       { this.bind('keypress', fn); }
}
