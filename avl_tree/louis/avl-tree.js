import AvlNode from './avl-node';

export default class AvlTree {
  constructor() {
    this.root = null;
  }

  put(key, value) {
    const newNode = new AvlNode(key, value);
    if (!this.root) {
      this.root = newNode;
    } else {
      const lastStop = this.root.addChild(newNode);
      this.rebalance(lastStop);
    }
    return newNode;
  }

  get(key) {
    if (this.root) {
      return this.root.find(key);
    }
    return null;
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

  rebalance(node) {
    let currentNode = node;
    while (currentNode !== this.root) {
      currentNode = currentNode.parent;
      currentNode.rebalance();
      while (this.root.parent) {
        this.root = this.root.parent;
      }
    }
  }
}
