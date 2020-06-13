class SelfImplementedMinHeap {
  constructor() {
    this.data = [];
  }

  /**
   * Get left child index
   * @param {index} Parent Index
   * @returns {index} Left child children index 
   */
  _getLeftChildIndex(parentIndex) {
    return 2 * parentIndex;
  }

  /**
   * Get right child index
   * @param {index} parentIndex Index
   * @returns {index} Right child children index
   */
  _getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  
  /**
   * Get parent index
   * @param {*} childIndex Index
   * @returns {index} Parent index
   */
  _getParentIndex(childIndex) {
    return Math.trunc(childIndex / 2);
  }

  /**
   * Check if the current node has left child or not
   * @param {*} index 
   */
  _hasLeftChild(index) {
    return this._getLeftChildIndex(index) < this.data.length; 
  }

  /**
   * Check if the current node has right child or not
   * @param {*} index 
   */
  _hasRightChild(index) {
    return this._getRightChildIndex(index) < this.data.length;
  }
  
  /**
   * Check if the current node has parent or not
   * @param {*} index 
   */
  _hasParent(index) {
    return this._getParentIndex(index) >= 0;
  }

  /**
   * Get the left child
   * @param {*} index 
   */
  _leftChild(index) {
    return this.data[this._getLeftChildIndex(index)];
  }

  /**
   * Get the right child
   * @param {*} index 
   */
  _rightChild(index) {
    return this.data[this._getRightChildIndex(index)];
  }

  /**
   * Get the parent node
   * @param {*} index 
   */
  _parent(index) {
    return this.data[this._getParentIndex(index)];
  }

  /**
   * Swap position of the two node
   * @param {*} index1 
   * @param {*} index2 
   */
  _swap(index1, index2) {
    let temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  /**
   * Check if the heap is empty or not
   */
  _isEmpty() {
    return this.data.length === 0;
  }

  _heapifyDown() {
    let index = 0;
    
    while (this._hasLeftChild(index)) {
      let smallerChildIndex = this._getLeftChildIndex(index);
      if (this._hasRightChild(index) && this._rightChild(index) < this._leftChild(index)) {
        smallerChildIndex = this._getRightChildIndex(index);
      }

      if (this.data[index] < this.data[smallerChildIndex]) {
        break;
      } else {
        this._swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }

  /**
   * Modify the heap
   */
  _heapifyUp() {
    let index = this.data.length - 1;
    while (this._hasParent(index) && (this._parent(index) > this.data[index])) {
      this._swap(this._getParentIndex(index), index);
      index = this._getParentIndex(index);
    }
  }

  /**
   * See the first value of the heap;
   */
  peek() {
    if (!this._isEmpty()) {
      return this.data[0];
    }

    return null;
  }

  /**
   * Get the first value of the heap
   */
  poll() {
    if (!this._isEmpty()) {
      let item = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this._heapifyDown();

      return item;
    }

    return null
  }

  add(item) {
    this.data[this.data.length] = item;
    this._heapifyUp();
    return null;
  }

  getAll() {
    console.log(this.data);
  }
}

const minHeap = new SelfImplementedMinHeap();
minHeap.add(4);
minHeap.add(3);
minHeap.add(2);
minHeap.add(1);
minHeap.getAll();