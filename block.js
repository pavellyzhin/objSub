"use strict";
exports.__esModule = true;
exports.ObjObjblock = void 0;
var ObjObjblock = /** @class */ (function () {
    function ObjObjblock() {
        this.name = '';
        this.row = 0;
        this.col = 0;
    }
    ObjObjblock.prototype.setName = function (name) {
        this.name = name;
    };
    ObjObjblock.prototype.getName = function () {
        return this.name;
    };
    ObjObjblock.prototype.setCol = function (col) {
        this.col = col;
    };
    ObjObjblock.prototype.setRow = function (row) {
        this.row = row;
    };
    ObjObjblock.prototype.getCol = function () {
        return this.col;
    };
    ObjObjblock.prototype.getRow = function () {
        return this.row;
    };
    return ObjObjblock;
}());
exports.ObjObjblock = ObjObjblock;
