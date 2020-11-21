/**
 * Peb JavaScript Library
 * Checked Out JQuery FEATURES (NOT SOURCE CODE)
 * Most features are OC
 * 
 * @copyright TechPot Studio and other contributors
 */

import './scss/styles.scss';
import factory from './factory';


if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    module.exports = factory(globalThis);
} else if (typeof define === 'function' && define.amd) {
    // AMD
    define('peb', [], function () {
        return factory(globalThis);
    });
} else {
    // Browser
    factory(globalThis);
}


