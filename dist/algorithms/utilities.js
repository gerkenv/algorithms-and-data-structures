"use strict";
exports.__esModule = true;
/**
 * Check if `a` is less than `b`.
 * @param a
 * @param b
 */
function less(a, b) {
    return a < b;
}
exports.less = less;
/**
 * checks if an `array` is sorted in ascending order.
 * @param array
 */
function isSortedInAscendingOrder(array) {
    for (var i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1])
            return false;
    }
    return true;
}
exports.isSortedInAscendingOrder = isSortedInAscendingOrder;
/**
 * Checks if an `array` is truthfully-compared with given `compare` callback.
 * @param array - an `array` to check.
 * @param compare - a callback for an order check. If omitted default
 * callback is `less`, so it will be checked if an array is sorted in
 * ascending order.
 */
function isSorted(array, compare) {
    if (compare === void 0) { compare = less; }
    for (var i = 1; i < array.length; i++) {
        if (!compare(array[i - 1], array[i]))
            return false;
    }
    return true;
}
exports.isSorted = isSorted;
/**
 * Swap values of two array elements.
 * @param indexA - index of element A
 * @param indexB - index of element B
 */
function swap(array, indexA, indexB) {
    var temporaryValue = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temporaryValue;
}
exports.swap = swap;
/**
 * Shuffle an array randomly.
 * 'Knuth-Fisher-Yates shuffle' algorithm.
 * @param array - an `array` to shuffle.
 * @param descending - an `array` is shuffled in descending order.
 * Some links:
 * - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * - https://jsperf.com/array-shuffle-comparator/5
 * - https://blog.codinghorror.com/the-danger-of-naivete/
 */
function shuffle(array, descending) {
    if (descending) {
        for (var index = array.length - 1; index > 0; index--) {
            var random = ~~(Math.random() * (index + 1));
            swap(array, index, random);
        }
    }
    else { // ascending shuffling
        for (var index = 0; index < array.length - 1; index++) {
            var random = ~~(Math.random() * (index + 1));
            swap(array, index, random);
        }
    }
}
exports.shuffle = shuffle;
/**
 * Compares values of 3 array elements and returns the index of median (middle) one.
 * @param array
 * @param indexA - index of element A
 * @param indexB - index of element B
 * @param indexC - index of element C
 * @returns index of median (middle) element.
 */
function median3Index(array, indexA, indexB, indexC) {
    var a = array[indexA];
    var b = array[indexB];
    var c = array[indexC];
    if (a < b) {
        if (b < c) {
            return indexB;
        }
        else { // c <= b && a < b
            if (a < c) {
                return indexC;
            }
            else {
                return indexA;
            }
        }
    }
    else { // b <= a
        if (c < b) {
            return indexB;
        }
        else { // b <= c && b <= a
            if (c < a) {
                return indexC;
            }
            else {
                return indexA;
            }
        }
    }
}
exports.median3Index = median3Index;
/**
 * Compares 3 values and returns the median (middle) one.
 * Restrictions:
 * - all 3 arguments - `a`, `b` and `c` should have the same type.
 * @param a
 * @param b
 * @param c
 * @returns median (middle) element.
 */
function median3(a, b, c) {
    if (a < b) {
        if (b < c) {
            return b;
        }
        else { // c <= b && a < b
            if (a < c) {
                return c;
            }
            else {
                return a;
            }
        }
    }
    else { // b <= a
        if (c < b) {
            return b;
        }
        else { // b <= c && b <= a
            if (c < a) {
                return c;
            }
            else {
                return a;
            }
        }
    }
}
exports.median3 = median3;
