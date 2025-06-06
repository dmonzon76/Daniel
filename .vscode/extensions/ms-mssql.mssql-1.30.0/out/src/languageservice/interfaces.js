"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageError = exports.FirewallRuleError = void 0;
class FirewallRuleError extends Error {
    constructor(connectionUri, errorMessage) {
        super(errorMessage);
        this.connectionUri = connectionUri;
    }
}
exports.FirewallRuleError = FirewallRuleError;
class PackageError extends Error {
    // Do not put PII (personally identifiable information) in the 'message' field as it will be logged to telemetry
    constructor(message, pkg = undefined, innerError = undefined) {
        super(message);
        this.message = message;
        this.pkg = pkg;
        this.innerError = innerError;
    }
}
exports.PackageError = PackageError;

//# sourceMappingURL=interfaces.js.map
