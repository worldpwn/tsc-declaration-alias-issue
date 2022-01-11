"use strict";
exports.__esModule = true;
exports.AliasClass = void 0;
var AliasClass = /** @class */ (function () {
    function AliasClass() {
        console.log('AliasClass');
    }
    AliasClass.prototype["do"] = function () {
        console.log("do from AliasClass");
    };
    return AliasClass;
}());
exports.AliasClass = AliasClass;
