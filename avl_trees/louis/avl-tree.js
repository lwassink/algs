import AvlNode from './avl-node.js';

export default class AvlTree {
  constructor() {
    this.root = null;
  }

  put(key, value) {
    const newNode = new AvlNode(key, value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root.addChild(newNode);
    }
    return newNode;
  }

  get(key) {
    if (this.root) {
      return this.root.find(key);
    }
  }

  size(node = this.root) {
    return node.size();
  }

  height(node = this.root) {
    return node.height();
  }

  getBalance(node = this.root) {
    return node.getBalance();
  }
}
