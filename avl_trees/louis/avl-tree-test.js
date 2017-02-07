import AvlTree from './avl-tree.js';

const tree = new AvlTree;

const root = tree.put(5, 'first');
const left = tree.put(3, 'second');
const right = tree.put(7, 'third');

console.log(`Root is correctly set: ${tree.root.value === 'first'}`);
console.log(`Left is correctly set: ${tree.root.left.value === 'second'}`);
console.log(`Right is correctly set: ${tree.root.right.value === 'third'}`);

console.log(`Find root: ${tree.get(root.key) === root}`);
console.log(`Finds left: ${tree.get(root.left.key) === left}`)
console.log(`Finds right: ${tree.get(root.right.key) === right}`)

console.log(`Correct size: ${tree.size() === 3}`);

console.log(`Correct height: ${tree.height() === 1}`);

console.log(`Correct Balance: ${tree.getBalance() === 0}`)
