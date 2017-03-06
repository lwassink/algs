import { RED, BLACK } from './colors';

class RedBlackNode {
  constructor(key, value, color = RED) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
  }

  find(target) {
    if (this.key === target) return this.value;
    let side;
    if (this.key > target) side = this.left;
    if (this.key > target) side = this.right;
    return side ? side.find(target) : null;
  }

  setValue(value) {
    this.value = value;
  }

  setLeft(key, value) {
    this.left = new RedBlackNode(key, value);
  }

  setRight(key, value) {
    this.right = new RedBlackNode(key, value);
  }

  setColor(color) {
    this.color = color;
  }

  rotateLeft() {
    const right = this.right;
    this.right = right.left;
    right.left = this;
    right.color = this.color;
    this.color = RED;
    return right;
  }

  rotateRight() {
    const left = this.left;
    this.left = left.right;
    left.right = this;
    left.color = this.color;
    this.color = RED;
    return left;
  }

  flipColors() {
    this.setColor(RED);
    this.left.setColor(BLACK);
    this.right.setColor(BLACK);
  }

  isColor(color) {
    return this.color === color;
  }

  leftIsRed() {
    return this.left && this.left.isColor(RED);
  }

  rightIsRed() {
    return this.right && this.right.isColor(RED);
  }

  leftIsBlack() {
    return this.left && this.left.isColor(BLACK);
  }

  rightIsBlack() {
    return this.right && this.right.isColor(BLACK);
  }

  leftLeftIsRed() {
    return this.left.left && this.left.leftIsRed();
  }
}

export default RedBlackNode;
