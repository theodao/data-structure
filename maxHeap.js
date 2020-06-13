class SelfImplementedMaxHeap {
  constructor() {
    this.data = [];
  }

  _isEmpty() {

  };

  _getParentIndex(childIndex) {
    return Math.trunc(childIndex / 2);
  }
  
  _getParent(index) {
    return this.data[this._getParentIndex(index)];
  }

  _hasParent(index) {
    return this._getParent(index) >= 0;
  }

  _getLeftChildIndex(parentIndex) {
    return parentIndex * 2
  };

  _getLeftChild(index) {
    return this.data[this._getLeftChildIndex(index)];
  }

  _hasLeftChild(index) {
    return this._getLeftChildIndex() < this.data.length
  }

  _getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 1
  }

  _getRightChild(index) {
    return this.data[this._getRightChildIndex(index)];
  }

  _hasRightChild(index) {
    return this._getRightChildIndex(index) < this.data.length;
  }

  _swap(index1, index2) {
    let temp = this.data[index1];

    this.data[index1] = this.data[index2];
    this.data[index2] = temp;

    return;
  }

  _heapifyUp() {
    let index = this.data.length - 1;

    while (this._hasParent(index) && (this._getParent(index) < this.data[index])) {
      this._swap(index, this._getParentIndex(index));
      index = this._getParentIndex(index);
    }
  }

  _heapifyDown() {
    let index = 0

    while (this._hasLeftChild(index)) {
      let largerChildrenIndex = this._getLeftChildIndex(index);
      if (this._hasRightChild(index) && (this._getLeftChild(index) < this._getRightChild(index))) {
        largerChildrenIndex = this._getRightChildIndex(index);
      }

      if (this.data[index] > this.data[largerChildrenIndex]) {
        break;
      } else {
        this._swap(index, largerChildrenIndex);
      }

      index = largerChildrenIndex;
    }
  }

  add(item) {
    this.data[this.data.length] = item;
    this._heapifyUp();

    return;
  }

  poll() {
    if (!this._isEmpty()) {
      let item = this.data[0];
      this._heapifyDown();
      this.data[0] = this.data[this.data.length - 1];

      return item;
    }

    return null;
  }
  
  peek() {
    if (!this._isEmpty()) {
      return this.data[0];
    }

    return null;
  }
}
