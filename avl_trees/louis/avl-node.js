export default class AvlNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  hasNoChildren() {
    return !this.left && !this.right;
  }

  addChild(node) {
    const hasNoChildren = this.hasNoChildren();
    if (hasNoChildren && this.key > node.key) {
      this.left = node;
    } else if (hasNoChildren && this.key < node.key) {
      this.right = node;
    } else if (!this.right && this.key > node.key) {
      return this.left.addChild(node);
    } else if (!this.left && this.key < node.key) {
      return this.right.addChild(node);
    } else if (this.left) {
      return this.right = node;
    } else if (this.right) {
      return this.left = node;
    }
  }

  find(key) {
    if (key === this.key) {
      return this;
    } else if (this.hasNoChildren()) {
      return;
    } else if (key < this.key) {
      return this.left ? this.left.find(key) : null;
    } else if (key > this.key) {
      return this.right ? this.right.find(key) : null;
    }
  }

  size() {
    const leftSize = this.left ? this.left.size() : 0;
    const rightSize = this.right ? this.right.size() : 0;
    return leftSize + 1 + rightSize;
  }

  height() {
    const leftHeight = this.left ? this.left.height() : -1;
    const rightHeight = this.right ? this.right.height() : -1;
    return Math.max(leftHeight, rightHeight) + 1;
  }

  getBalance() {
    const leftWeight = this.left ? this.left.height() : 0;
    const rightWeight = this.right ? this.right.height() : 0;
    return leftWeight - rightWeight;
  }

  balance() {}
}
