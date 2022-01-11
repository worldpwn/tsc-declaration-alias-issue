"use strict";
exports.__esModule = true;
exports.A = void 0;
var index_1 = require("@alias/index");
var A = /** @class */ (function () {
    function A() {
        this.aliasClass = new index_1.AliasClass();
    }
    A.prototype["do"] = function () {
        console.log("do from A");
        this.aliasClass["do"]();
        return this.aliasClass;
    };
    return A;
}());
exports.A = A;
