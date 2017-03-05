export default class AvlNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  hasNoChildren() {
    return !this.left && !this.right;
  }

  addChild(node) {
    const hasNoChildren = this.hasNoChildren();
    if (hasNoChildren && this.key > node.key) {
      this.placeLeft(node);
    } else if (hasNoChildren && this.key < node.key) {
      this.placeRight(node);
    } else if (this.left && this.right) {
      return this.key < node.key ? this.right.addChild(node) : this.left.addChild(node);
    } else if (this.left) {
      if (this.key < node.key) {
        this.placeRight(node);
      } else {
        return this.left.addChild(node);
      }
    } else if (this.right) {
      if (this.key > node.key) {
        this.placeLeft(node);
      } else {
        return this.right.addChild(node);
      }
    }
    return node;
  }

  placeLeft(node) {
    this.left = node;
    this.left.parent = this;
    return this;
  }

  placeRight(node) {
    this.right = node;
    this.right.parent = this;
    return this;
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
    const leftHeight = this.left ? this.left.height() : 0;
    const rightHeight = this.right ? this.right.height() : 0;
    return Math.max(leftHeight, rightHeight) + 1;
  }

  getBalance() {
    const leftWeight = this.left ? this.left.height() : 0;
    const rightWeight = this.right ? this.right.height() : 0;
    return rightWeight - leftWeight;
  }

  rebalance() {
    const balance = this.getBalance();
    if (balance === 2) {
      if (this.right.getBalance() === -1) {
        this.right.rotateRight();
      }
      this.rotateLeft();
    } else if (balance === -2) {
      if (this.left.getBalance() === 1) {
        this.left.rotateLeft();
      }
      this.rotateRight();
    }
  }

  rotateLeft() {
    if (this.parent && this.parent.left === this) {
      this.parent.left = this.right;
    } else if (this.parent && this.parent.right === this) {
      this.parent.right = this.right;
    }
    this.right.parent = this.parent;
    this.parent = this.right;
    this.right.left = this;
    this.right = null;
  }

  rotateRight() {
    if (this.parent && this.parent.left === this) {
      this.parent.left = this.left;
    } else if (this.parent && this.parent.right === this) {
      this.parent.right = this.left;
    }
    this.left.parent = this.parent;
    this.parent = this.left;
    this.left.right = this;
    this.left = null;
  }
}
