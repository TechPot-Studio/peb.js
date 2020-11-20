class PebError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PebBasicError';
    }
}
export class PebExtensionError extends PebError {
    constructor(message) {
        super(message);
        this.name = 'PebExtensionError';
    }
}

export class PebMissingEnvironmentError extends PebError {
    constructor(message) {
        super(message);
        this.name = 'PebMissingEnvironmentError'
    }
}

export class PebMissingParameterError extends PebError {
    constructor(message) {
        super(message)
        this.name = 'PebMissingParameterError';
    }
}

export class PebMultipleElementError extends PebError {
    constructor(message) {
        super(message);
        this.name = 'PebMultipleElementError'
    }
}

export default {
    PebError,
    PebExtensionError,
    PebMissingEnvironmentError,
    PebMissingParameterError,
    PebMultipleElementError
}

