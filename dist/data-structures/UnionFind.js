"use strict";
exports.__esModule = true;
/**
 * Union-find class with quick `find`.
 * Class represents 'Union-find' data type also known as 'disjoint data set'.
 *
 * The union–find data type models connectivity among a set of `n`
 * elements, named `0` through `n–1`.
 * All elements that are connected with each other represent one group.
 *
 * Initially each element represents its own group.
 * - `union` operation combines groups together.
 * - `find` operation returns a unique group identifier (group root).
 * - `connected` operation returns `true` if elements belong to the same group.
 *
 * Time complexity:
 * - Initialization - linear time.
 * - `union` - linear time.
 * - `find` - constant time.
 * - `connected` - constant time.
 */
var UnionFindQuickFind = /** @class */ (function () {
    /**
     * Create a union-find structure.
     * @param size - quantity of elements in a structure.
     */
    function UnionFindQuickFind(size) {
        var _this = this;
        /**
         * Find out to which group belongs element.
         * @param element - element to search.
         * @returns - union / component unique identifier / root element.
         */
        this.find = function (element) {
            _this.validateIndex(element);
            return _this._nodes[element];
        };
        /**
         * Check index boundaries
         * @param element - element to search.
         */
        this.validateIndex = function (element) {
            if ((element < 0) || (element >= _this._nodes.length)) {
                throw "Index " + element + " is out of valid range [0, " + _this._nodes.length + "]";
            }
        };
        /**
         * Check if two elements are connected.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         * returns - `true` if elements belong to the same group.
         */
        this.connected = function (elementA, elementB) {
            return _this.find(elementA) === _this.find(elementB);
        };
        /**
         * Unite groups of 2 elements together.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         */
        this.union = function (elementA, elementB) {
            var idA = _this.find(elementA);
            var idB = _this.find(elementB);
            for (var i = 0; i < _this._nodes.length; i++) {
                if (_this._nodes[i] == idA)
                    _this._nodes[i] = idB;
            }
        };
        for (var i = 0; i < size; i++) {
            this._nodes[i] = i;
        }
    }
    return UnionFindQuickFind;
}());
exports.UnionFindQuickFind = UnionFindQuickFind;
/**
 * Union-find class with quick `union`.
 * Class represents 'Union-find' data type also known as 'disjoint data set'.
 *
 * The union–find data type models connectivity among a set of `n`
 * elements, named `0` through `n–1`.
 * All elements that are connected with each other represent one group.
 *
 * Initially each element represents its own group.
 * - `union` operation combines groups together.
 * - `find` operation returns a unique group identifier (group root).
 * - `connected` operation returns `true` if elements belong to the same group.
 *
 * Time complexity:
 * - Initialization - linear time.
 * - `union` - linear time.
 * - `find` - linear time.
 * - `connected` - linear time.
 */
var UnionFindQuickUnion = /** @class */ (function () {
    /**
     * Create a union-find structure.
     * @param size - quantity of elements in a structure.
     */
    function UnionFindQuickUnion(size) {
        var _this = this;
        /**
         * Find out to which group belongs element.
         * @param element - element to search.
         * @returns - union / component unique identifier / root element.
         */
        this.find = function (element) {
            _this.validateIndex(element);
            while (element !== _this._nodes[element])
                element = _this._nodes[element];
            return element;
        };
        /**
         * Check index boundaries
         * @param element - element to search.
         */
        this.validateIndex = function (element) {
            if ((element < 0) || (element >= _this._nodes.length)) {
                throw "Index " + element + " is out of valid range [0, " + _this._nodes.length + "]";
            }
        };
        /**
         * Check if two elements are connected.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         * returns - `true` if elements belong to the same group.
         */
        this.connected = function (elementA, elementB) {
            return _this.find(elementA) === _this.find(elementB);
        };
        /**
         * Unite groups of 2 elements together.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         */
        this.union = function (elementA, elementB) {
            var idA = _this.find(elementA);
            var idB = _this.find(elementB);
            _this._nodes[idA] = idB;
        };
        for (var i = 0; i < size; i++) {
            this._nodes[i] = i;
        }
    }
    return UnionFindQuickUnion;
}());
exports.UnionFindQuickUnion = UnionFindQuickUnion;
/**
 * Weighted union-find class with quick `union`.
 * Class represents 'Union-find' data type also known as 'disjoint data set'.
 *
 * The union–find data type models connectivity among a set of `n`
 * elements, named `0` through `n–1`.
 * All elements that are connected with each other represent one group.
 *
 * Initially each element represents its own group.
 * - `union` operation combines groups together.
 * - `find` operation returns a unique group identifier (group root).
 * - `connected` operation returns `true` if elements belong to the same group.
 *
 * Time complexity:
 * - Initialization - linear time.
 * - `union` - logarithmic time.
 * - `find` - logarithmic time.
 * - `connected` - logarithmic time.
 */
var WeightedUnionFindQuickUnion = /** @class */ (function () {
    /**
     * Create a union-find structure.
     * @param size - quantity of elements in a structure.
     */
    function WeightedUnionFindQuickUnion(size) {
        var _this = this;
        /**
         * Find out to which group belongs element.
         * @param element - element to search.
         * @returns - union / component unique identifier / root element.
         */
        this.find = function (element) {
            _this.validateIndex(element);
            while (element !== _this._nodes[element])
                element = _this._nodes[element];
            return element;
        };
        /**
         * Check index boundaries
         * @param element - element to search.
         */
        this.validateIndex = function (element) {
            if ((element < 0) || (element >= _this._nodes.length)) {
                throw "Index " + element + " is out of valid range [0, " + _this._nodes.length + "]";
            }
        };
        /**
         * Check if two elements are connected.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         * returns - `true` if elements belong to the same group.
         */
        this.connected = function (elementA, elementB) {
            return _this.find(elementA) === _this.find(elementB);
        };
        /**
         * Unite groups of 2 elements together.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         */
        this.union = function (elementA, elementB) {
            var idA = _this.find(elementA);
            var idB = _this.find(elementB);
            if (idA === idB)
                return;
            // Pack smaller tree under the bigger tree of nodes
            if (_this._size[idA] < _this._size[idB]) {
                _this._nodes[idA] = idB;
                _this._size[idB] += _this._size[idA];
            }
            else {
                _this._nodes[idB] = idA;
                _this._size[idA] += _this._size[idB];
            }
        };
        for (var i = 0; i < size; i++) {
            this._nodes[i] = i;
            this._size[i] = 1;
        }
    }
    return WeightedUnionFindQuickUnion;
}());
exports.WeightedUnionFindQuickUnion = WeightedUnionFindQuickUnion;
/**
 * Weighted union-find class with quick `union`.
 * Class represents 'Union-find' data type also known as 'disjoint data set'.
 *
 * The union–find data type models connectivity among a set of `n`
 * elements, named `0` through `n–1`.
 * All elements that are connected with each other represent one group.
 *
 * Initially each element represents its own group.
 * - `union` operation combines groups together.
 * - `find` operation returns a unique group identifier (group root).
 * - `connected` operation returns `true` if elements belong to the same group.
 *
 * Time complexity:
 * - Initialization - linear time.
 * - `union` - logarithmic time.
 * - `find` - logarithmic time.
 * - `connected` - logarithmic time.
 */
var WeightedUnionFindQuickUnionWithPathCompressions = /** @class */ (function () {
    /**
     * Create a union-find structure.
     * @param size - quantity of elements in a structure.
     */
    function WeightedUnionFindQuickUnionWithPathCompressions(size) {
        var _this = this;
        /**
         * Find out to which group belongs element.
         * @param element - element to search.
         * @returns - union / component unique identifier / root element.
         */
        this.find = function (element) {
            _this.validateIndex(element);
            while (element !== _this._nodes[element]) {
                _this._nodes[element] = _this._nodes[_this._nodes[element]];
                element = _this._nodes[element];
            }
            return element;
        };
        /**
         * Check index boundaries
         * @param element - element to search.
         */
        this.validateIndex = function (element) {
            if ((element < 0) || (element >= _this._nodes.length)) {
                throw "Index " + element + " is out of valid range [0, " + _this._nodes.length + "]";
            }
        };
        /**
         * Check if two elements are connected.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         * returns - `true` if elements belong to the same group.
         */
        this.connected = function (elementA, elementB) {
            return _this.find(elementA) === _this.find(elementB);
        };
        /**
         * Unite groups of 2 elements together.
         * @param elementA - some element of structure.
         * @param elementB - another element of structure.
         */
        this.union = function (elementA, elementB) {
            var idA = _this.find(elementA);
            var idB = _this.find(elementB);
            if (idA === idB)
                return;
            // Pack smaller tree under the bigger tree of nodes
            if (_this._size[idA] < _this._size[idB]) {
                _this._nodes[idA] = idB;
                _this._size[idB] += _this._size[idA];
            }
            else {
                _this._nodes[idB] = idA;
                _this._size[idA] += _this._size[idB];
            }
        };
        for (var i = 0; i < size; i++) {
            this._nodes[i] = i;
            this._size[i] = 1;
        }
    }
    return WeightedUnionFindQuickUnionWithPathCompressions;
}());
exports.WeightedUnionFindQuickUnionWithPathCompressions = WeightedUnionFindQuickUnionWithPathCompressions;
