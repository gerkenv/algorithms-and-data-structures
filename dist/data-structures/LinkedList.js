"use strict";
exports.__esModule = true;
/**
 * Class that keeps some data and reference to next node.
 */
var Node = /** @class */ (function () {
    // get next() : Node { return this._next; }
    // set next(node : Node) { this._next = node; }
    /**
     * Create a new node.
     * @param data - a data to keep in new node.
     */
    function Node(data) {
        this.data = data;
        this.next = undefined;
    }
    return Node;
}());
exports.Node = Node;
/**
 * Linked list with single link (one direction iteration).
 */
var SinglyLinkedList = /** @class */ (function () {
    /**
     * Create a new linked list with single direction links
     */
    function SinglyLinkedList() {
        var _this = this;
        /**
         * Get a data from the beginning of a linked list.
         * @returns undefined - if list is empty
         * @returns `data` - a data that was stored at the beginning of a list
         */
        this.peekFirst = function () {
            if (_this.isEmpty())
                return undefined;
            return _this._head.data;
        };
        /**
         * Get a data from the end of a linked list.
         * @returns undefined - if list is empty
         * @returns `data` - a data that was stored at the end of a list
         */
        this.peekLast = function () {
            if (_this.isEmpty())
                return undefined;
            return _this._tail.data;
        };
        /**
         * Insert a node at the end of a linked list
         * @param data - a data to keep in at the end.
         */
        this.push = function (data) {
            var node = new Node(data);
            if (!_this.isEmpty()) {
                _this._tail.next = node;
            }
            else {
                _this._head = node;
            }
            _this._tail = node;
            _this._size++;
        };
        /**
         * Get a data from the end of a linked list and remove it from list
         * @returns undefined - if list is empty
         * @returns `data` - a data that was stored at the end of list
         */
        this.pop = function () {
            if (_this.isEmpty())
                return undefined;
            var node = _this._head;
            _this._size--;
            if (_this._head.next === undefined) {
                _this._head = undefined;
                _this._tail = undefined;
                return node.data;
            }
            while (node.next.next !== undefined) {
                node = node.next;
            }
            var removed = node.next;
            node.next = undefined;
            return removed.data;
        };
        /**
         * Insert a data at the beginning of a linked list
         * @param data - a data to keep at the beginning of a list.
         */
        this.unshift = function (data) {
            var node = new Node(data);
            node.next = _this._head;
            _this._head = node;
            if (undefined === _this._tail) {
                _this._tail = _this._head;
            }
            _this._size++;
        };
        /**
         * Get a data from the the beginning of a linked list and remove it from list
         * @returns undefined - if list is empty
         * @returns `data` - a data that was stored at the beginning of list
         */
        this.shift = function () {
            if (_this.isEmpty())
                return undefined;
            var node = _this._head;
            _this._head = _this._head.next;
            if (_this._head === undefined) {
                _this._tail = undefined;
            }
            _this._size--;
            return node.data;
        };
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
    }
    /**
     * Returns the number of element in a list.
     */
    SinglyLinkedList.prototype.length = function () {
        return this._size;
    };
    /**
     * Check if a list is empty.
     * @returns `true` - list is empty.
     * @returns `false` - list is not empty.
     */
    SinglyLinkedList.prototype.isEmpty = function () {
        return (this._head === undefined);
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
;
