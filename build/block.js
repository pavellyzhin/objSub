"use strict";
exports.__esModule = true;
exports.objBlock = void 0;
var objBlock = /** @class */ (function () {
    function objBlock(name, col, row) {
        if (name === void 0) { name = 'A'; }
        if (col === void 0) { col = 0; }
        if (row === void 0) { row = 0; }
        this.name = 'A';
        this.col = 0;
        this.row = 0;
    }
    objBlock.prototype.setName = function (name) {
        if (name === void 0) { name = 'A'; }
        this.name = name;
    };
    objBlock.prototype.getName = function () {
        return this.name;
    };
    objBlock.prototype.setCol = function (col) {
        if (col === void 0) { col = 0; }
        this.col = col;
    };
    objBlock.prototype.setRow = function (row) {
        if (row === void 0) { row = 0; }
        this.row = row;
    };
    objBlock.prototype.getCol = function () {
        return this.col;
    };
    objBlock.prototype.getRow = function () {
        return this.row;
    };
    return objBlock;
}());
exports.objBlock = objBlock;
