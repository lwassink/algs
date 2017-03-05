import AvlTree from './avl-tree';

const tree = new AvlTree();

const root = tree.put(5, 'first');
const left = tree.put(3, 'second');
const right = tree.put(20, 'third');

console.log(`Root is correctly set: ${tree.root.value === 'first'}`);
console.log(`Left is correctly set: ${tree.root.left.value === 'second'}`);
console.log(`Right is correctly set: ${tree.root.right.value === 'third'}`);

console.log(`Find root: ${tree.get(root.key) === root}`);
console.log(`Finds left: ${tree.get(root.left.key) === left}`);
console.log(`Finds right: ${tree.get(root.right.key) === right}`);

console.log(`Correct size: ${tree.size() === 3}`);

console.log(`Correct height: ${tree.height()}`);

console.log(`Correct Balance: ${tree.getBalance() === 0}`);

tree.put(17, 'fourth');

console.log(`Correct Balance at 1: ${tree.getBalance() === 1}`);

tree.put(16, 'fifth');

console.log(`Correct Balance after 2: ${tree.getBalance() === 1}`);

tree.put(15, 'sixth');

console.log(`Correct Balance after Left Right Rotation: ${tree.getBalance() === 0}`);
