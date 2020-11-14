# Change Log

## 4.0.0 rc1 - Not Published

### Added
- `variable.scss`
- Error type `PebMultipleElementError`
- `query` function

### Changed
- Rewrite `RElement` and `RElementsCollection` and renamed to `ElementManager`
- `sel` now is a shorthand of `select`

### Removed
- `RElement` & `RElementCollection`
- Error type `PebNullObjectError`
- `genNode`

### Fixed
- _No issues recorded yet_

## [3.1.0] - 2020-10-31

### Added

- `peb.noop` empty function
- Add `ajax` typings
- `log` to print log directly
- *Beta* `dataMap` class to store data
- Error types `PebMissingEnvironmentError` and `PebMissingParameterError`
- `reqArg` function
- `RElement.animate`

### Changed
- `.editorconfig`
- A boolean parameter for `RElement.prev` and `RElement.next`
- `translationTable` => `TranslationTable`
-


### Deprecated

- `peb.genNode`
  * _The alternative plan: `peb.createElement`_

[3.1.0]: https://github.com/TechPot-Studio/peb.js/tree/v3.1.0
