"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataQueryRequest = exports.MetadataQueryResult = exports.MetadataQueryParams = void 0;
const vscode_languageclient_1 = require("vscode-languageclient");
class MetadataQueryParams {
}
exports.MetadataQueryParams = MetadataQueryParams;
class MetadataQueryResult {
}
exports.MetadataQueryResult = MetadataQueryResult;
// ------------------------------- < Metadata Events > ------------------------------------
var MetadataQueryRequest;
(function (MetadataQueryRequest) {
    MetadataQueryRequest.type = new vscode_languageclient_1.RequestType("metadata/list");
})(MetadataQueryRequest || (exports.MetadataQueryRequest = MetadataQueryRequest = {}));

//# sourceMappingURL=metadataRequest.js.map
