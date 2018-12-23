"use strict";
exports.__esModule = true;
var ResizingArray = /** @class */ (function () {
    function ResizingArray() {
        this._capacity = 2;
        this._size = 0;
        this._indexOfFirst = 0;
        this._array = new Array(this._capacity);
    }
    /**
     * Check if a array is full.
     * @returns `true` - queue is empty.
     * @returns `false` - queue is not empty.
     */
    ResizingArray.prototype._isFull = function () {
        if (this._size == this._capacity)
            return true;
        else
            return false;
    };
    /**
     * Returns a size of an array;
     */
    ResizingArray.prototype.length = function () {
        return this._size;
    };
    /**
     * Create a new internal storage and copy elements
     * @param capacity - new capacity of items array
     */
    ResizingArray.prototype._resizeArray = function (capacity) {
        if (capacity == 0)
            throw new Error('New capacity of an array should be bigger than 0');
        var array = new Array(capacity);
        var newIndex = 0;
        var leftElements = this._size;
        var index = this._indexOfFirst;
        while (leftElements--) {
            var circularIndex = index % this._capacity;
            array[newIndex++] = this._array[circularIndex];
            index++;
        }
        this._capacity = capacity;
        this._indexOfFirst = 0;
        this._array = array;
    };
    /**
     * Check size of internal array (extend / shrink if necessary)
     */
    ResizingArray.prototype._checkSize = function () {
        if (this._isFull())
            this._resizeArray(this._capacity * 2);
        else if ((this._size > 0) && (this._size * 4 <= this._capacity)) {
            this._resizeArray(this._capacity / 2);
        }
    };
    /**
     * Check if a queue is empty.
     * @returns `true` - queue is empty.
     * @returns `false` - queue is not empty.
     */
    ResizingArray.prototype.isEmpty = function () {
        return (this._size == 0);
    };
    /**
     * Add an `item` to the end of an array.
     * @param data - a `data` to add to the end of an arry.
     * @returns nothing.
     */
    ResizingArray.prototype.push = function (data) {
        this._checkSize();
        var newIndex = (this._indexOfFirst + this._size) % this._capacity;
        this._array[newIndex] = data;
        this._size++;
    };
    /**
     * Removes a `data` from a beginning of an array.
     * @returns `data` - an item that was first in an array.
     */
    ResizingArray.prototype.shift = function () {
        if (this.isEmpty())
            return undefined;
        this._checkSize();
        var data = this._array[this._indexOfFirst];
        this._array[this._indexOfFirst] = undefined;
        this._indexOfFirst = (this._indexOfFirst + 1) % this._capacity;
        this._size--;
        return data;
    };
    return ResizingArray;
}());
exports.ResizingArray = ResizingArray;
