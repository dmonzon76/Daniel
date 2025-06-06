"use strict";
// This code is originally from https://github.com/DonJayamanne/bowerVSCode
// License: https://github.com/DonJayamanne/bowerVSCode/blob/master/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("./prompt");
const LocalizedConstants = require("../constants/locConstants");
const escapeException_1 = require("../utils/escapeException");
class ConfirmPrompt extends prompt_1.default {
    constructor(question, vscodeWrapper, ignoreFocusOut) {
        super(question, vscodeWrapper, ignoreFocusOut);
    }
    render() {
        let choices = {};
        choices[LocalizedConstants.msgYes] = true;
        choices[LocalizedConstants.msgNo] = false;
        let options = this.defaultQuickPickOptions;
        options.placeHolder = this._question.message;
        return this._vscodeWrapper.showQuickPickStrings(Object.keys(choices), options)
            .then(result => {
            if (result === undefined) {
                throw new escapeException_1.default();
            }
            return choices[result] || false;
        });
    }
}
exports.default = ConfirmPrompt;

//# sourceMappingURL=confirm.js.map
