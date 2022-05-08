"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.subBlock = void 0;
var block_1 = require("./block");
var subBlock = /** @class */ (function (_super) {
    __extends(subBlock, _super);
    function subBlock(name) {
        if (name === void 0) { name = 'A'; }
        var _this = _super.call(this, name) || this;
        _this.rows = 0;
        _this.cols = 0;
        return _this;
    }
    subBlock.prototype.setRows = function (rows) {
        if (rows === void 0) { rows = 0; }
        this.rows = rows;
    };
    subBlock.prototype.setCols = function (cols) {
        if (cols === void 0) { cols = 0; }
        this.cols = cols;
    };
    subBlock.prototype.getRows = function () {
        return this.rows;
    };
    subBlock.prototype.getCols = function () {
        return this.cols;
    };
    subBlock.prototype.moveLeft = function () {
        this.setCol(this.getCol() - 1);
    };
    subBlock.prototype.moveUp = function () {
        this.setRow(this.getRow() - 1);
    };
    subBlock.prototype.moveRight = function () {
        this.setCol(this.getCol() + 1);
    };
    subBlock.prototype.moveDown = function () {
        this.setRow(this.getRow() + 1);
    };
    // поменяться местами
    // мы же самостоятельные
    subBlock.prototype.moveReplace = function (block) {
        var _a = [block.getCol(), block.getRow()], col = _a[0], row = _a[1];
        var _b = [this.getCol(), this.getRow()], col1 = _b[0], row1 = _b[1];
        block.setCol(col1);
        block.setRow(row1);
        this.setCol(col);
        this.setRow(row);
    };
    return subBlock;
}(block_1.objBlock));
exports.subBlock = subBlock;
