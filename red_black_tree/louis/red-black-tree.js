import RedBlackNode from './red-black-node';

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  get(key) {
    return this.root ? this.root.find(key) : null;
  }

  put(key, value) {
    if (!this.root) this.root = new RedBlackNode(key, value);
    this.handlePut(key, value, this.root);
  }

  handlePut(key, value, node) {
    if (node === null) return new RedBlackNode(key, value);
    if (key < node.key) {
      node.left = this.handlePut(key, value, node.left);
    } else if (key > node.key) {
      node.right = this.handlePut(key, value, node.right);
    } else if (key === node.key) {
      node.setValue(value);
    }

    if (node.rightIsRed() && !node.leftIsRed()) {
      if (this.root === node) this.root = node.right;
      node = node.rotateLeft();
    }
    if (node.leftIsRed() && node.leftLeftIsRed()) {
      if (this.root === node) this.root = node.left;
      node = node.rotateRight();
    }
    if (node.leftIsRed() && node.rightIsRed()) node.flipColors();

    return node;
  }
}

export default RedBlackTree;
