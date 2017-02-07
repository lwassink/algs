import AvlNode from './avl-node.js';

export default class AvlTree {
  constructor() {
    this.root = null;
  }

  put(key, value) {
    const newNode = newAvlNode(key, value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root.addChild(newNode);
    }
    return newNode;
  }
}
