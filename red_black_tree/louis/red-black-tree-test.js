import RedBlackTree from './red-black-tree';

const tree = new RedBlackTree();

const root = tree.put(5, 'first');
const left = tree.put(3, 'second');
const right = tree.put(20, 'third');

console.log(`Root is correctly set: ${tree.root.value === 'first'}`);
console.log(`Left is correctly set: ${tree.root.left.value === 'second'}`);
console.log(`Right is correctly set: ${tree.root.right.value === 'third'}`);

tree.put(1, 'fourth');

console.log(`Two node insert: ${tree.root.left.left.value === 'fourth'}`);

tree.put(25, 'fifth');

console.log(`Two node insert left rotate: ${tree.root.right.left.value === 'third'}`);

tree.put(23, 'sixth');

console.log(`Three node insert resets root: ${tree.root.value === 'sixth'}`);
console.log(`Three node properly rotates at root: ${tree.root.left.left.left.value === 'fourth'}`);
