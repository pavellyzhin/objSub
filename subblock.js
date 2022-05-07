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
    function subBlock(cols, rows) {
        if (cols === void 0) { cols = 0; }
        if (rows === void 0) { rows = 0; }
        var _this = _super.call(this) || this;
        _this.rows = 0;
        _this.cols = 0;
        _this.setCols(cols);
        _this.setRows(rows);
        return _this;
    }
    subBlock.prototype.moveDown = function () {
        if (this.getRow() <= this.getRows()) {
            this.setRow(this.getRow() + 1);
        }
    };
    subBlock.prototype.moveUp = function () {
        if (this.getRow() >= 0) {
            this.setRow(this.getRow() - 1);
        }
    };
    subBlock.prototype.moveLeft = function () {
        if (this.getCol() >= 0) {
            this.setCol(this.getCol() - 1);
        }
    };
    subBlock.prototype.moveRight = function () {
        if (this.getCol() <= this.getCols()) {
            this.setCol(this.getCol() + 1);
        }
    };
    subBlock.prototype.setRows = function (rows) {
        this.rows = rows;
    };
    subBlock.prototype.setCols = function (cols) {
        this.cols = cols;
    };
    subBlock.prototype.getCols = function () {
        return this.cols;
    };
    subBlock.prototype.getRows = function () {
        return this.rows;
    };
    return subBlock;
}(block_1.ObjObjblock));
exports.subBlock = subBlock;
