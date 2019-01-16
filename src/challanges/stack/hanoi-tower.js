const Stack = require('../../dist/data-structures/Stack').StackOnSinglyLinkedList;

function hanoiTower(disks) {
    let from = new Stack();
    for (let i = disks; i > 0; i--) from.push(i);
    let to = new Stack();
    let cache = new Stack();
    move(disks, from, to, cache);
}

function move(n, from, to, cache) {
    if (n == 0) return;
    move(n-1, from, cache, to);
    from.push(to.pop());
    move(n-1, cache, to, from);
}

module.exports.hanoiTower = hanoiTower;