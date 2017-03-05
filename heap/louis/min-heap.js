class MinHeap {
  constructor() {
    this.store = [null];
  }

  size() {
    return this.store.length;
  }

  push(el) {
    const i = this.size();
    this.store[i] = el;
    this.bubbleUp(i);
  }

  bubbleUp(i) {
    let parentIndex;

    while (i > 0) {
      parentIndex = Math.ceil(i / 2) - 1;
      if (this.store[parentIndex] > this.store[i]) {
        this.swap(parentIndex, i);
        i = parentIndex;
      } else {
        return;
      }
    }
  }

  swap(parentIndex, childIndex) {
    const tmp = this.store[parentIndex];
    this.store[parentIndex] = this.store[childIndex];
    this.store[childIndex] = tmp;
  }
}

export default MinHeap;
