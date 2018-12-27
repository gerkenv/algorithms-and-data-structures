"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var ResizingArray_1 = require("./ResizingArray");
/**
 * Stack based (LIFO bag) on singly linked list.
 */
var StackOnSinglyLinkedList = /** @class */ (function () {
    /**
     * Create a new empty stack.
     */
    function StackOnSinglyLinkedList() {
        var _this = this;
        /**
         * Push a new `item` at the top of a stack.
         * @param item - data to store in a stack.
         * @returns nothing
         */
        this.push = function (item) {
            _this._items.unshift(item);
        };
        /**
         * Take a top `item` and remove it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.pop = function () {
            return _this._items.shift();
        };
        /**
         * Take a top `item` without removing it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.peek = function () {
            return _this._items.peekFirst();
        };
        this._items = new LinkedList_1.SinglyLinkedList();
    }
    /**
     * Returns a size of an array;
     */
    StackOnSinglyLinkedList.prototype.length = function () {
        return this._items.length();
    };
    return StackOnSinglyLinkedList;
}());
exports.StackOnSinglyLinkedList = StackOnSinglyLinkedList;
/**
 * Stack based (LIFO bag) on resizing array.
 */
var StackOnResizingArray = /** @class */ (function () {
    /**
     * Create a new empty stack.
     */
    function StackOnResizingArray() {
        var _this = this;
        /**
         * Push a new `item` at the top of a stack.
         * @param item - data to store in a stack.
         * @returns nothing
         */
        this.push = function (item) {
            _this._items.unshift(item);
        };
        /**
         * Take a top `item` and remove it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.pop = function () {
            return _this._items.shift();
        };
        /**
         * Take a top `item` without removing it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.peek = function () {
            return _this._items.peekFirst();
        };
        this._items = new ResizingArray_1.ResizingArray();
    }
    /**
     * Returns a size of an array;
     */
    StackOnResizingArray.prototype.length = function () {
        return this._items.length();
    };
    return StackOnResizingArray;
}());
exports.StackOnResizingArray = StackOnResizingArray;
