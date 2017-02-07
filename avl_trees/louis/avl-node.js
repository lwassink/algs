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
}
