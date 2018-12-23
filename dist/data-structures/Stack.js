"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
/**
 * Stack based on singly linked list
 * LIFO bag.
 */
var StackOnLinkedList = /** @class */ (function () {
    /**
     * Create a new empty stack.
     */
    function StackOnLinkedList() {
        var _this = this;
        /**
         * Check if a stack is empty.
         * @returns `true` - stack is empty.
         * @returns `false` - stack is not empty.
         */
        this.isEmpty = function () {
            return (_this._first == null);
        };
        /**
         * Push a new `item` at the top of a stack.
         * @param item - data to store in a stack.
         * @returns nothing
         */
        this.push = function (item) {
            var oldFirst = _this._first;
            _this._first = new LinkedList_1.Node(item);
            _this._first.next = oldFirst;
        };
        /**
         * Take a top `item` and remove it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.pop = function () {
            if (_this.isEmpty)
                return undefined;
            var item = _this._first.data;
            _this._first = _this._first.next;
            return item;
        };
        /**
         * Take a top `item` without removing it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.peek = function () {
            if (_this.isEmpty)
                return undefined;
            return _this._first.data;
        };
        this._first = null;
    }
    return StackOnLinkedList;
}());
exports.StackOnLinkedList = StackOnLinkedList;
/**
 * Stack based on array
 * LIFO bag.
 */
var StackOnArray = /** @class */ (function () {
    /**
     * Create a new empty stack.
     */
    function StackOnArray() {
        var _this = this;
        /**
         * Check if a stack is empty.
         * @returns `true` - stack is empty.
         * @returns `false` - stack is not empty.
         */
        this.isEmpty = function () {
            return (_this._n == 0);
        };
        /**
         * Push a new `item` at the top of a stack.
         * @param item - data to store in a stack.
         * @returns nothing
         */
        this.push = function (item) {
            _this._items[_this._n++] = item;
        };
        /**
         * Take a top `item` and remove it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.pop = function () {
            if (_this.isEmpty)
                return null;
            var item = _this._items.pop();
            _this._n--;
            return item;
        };
        /**
         * Take a top `item` without removing it from a stack.
         * @returns `item` - data, that was stored at the top.
         * @return `undefined` - if a stack is empty.
         */
        this.peek = function () {
            if (_this.isEmpty)
                return undefined;
            return _this._items[_this._n - 1].data;
        };
        this._n = 0;
    }
    return StackOnArray;
}());
exports.StackOnArray = StackOnArray;
