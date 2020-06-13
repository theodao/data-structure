class SelfImplementedCircularStack {
  /**
   * 
   * @param {number} size the size of the stack
   */
  constructor(size) {
    this.size = size;
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  /**
   * Check if the stack is empty or not
   * @returns {boolean} 
   */
  isEmpty() {
    return this.head === this.tail;
  }
  
  /**
   * Check if the stack is full or not
   * @returns {boolean}
   */
  isFull() {
    return this.head === (this.tail + 1) % this.size;
  }

  /**
   * Get the front item from the queue
   * Return -1 if not found
   */
  Front() {
    return this.isEmpty() ? -1 : this.data[this.head];
  }

  /**
   * Get the last item from the queue
   * Return -1 if not found
   */
  Rear() {
    return this.isEmpty() ? -1 : this.data[this.tail];
  }

  /**
   * Add item to the queue
   */
  enQueue(value) {
    if (this.isFull()) {
      return false;
    };

    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    return true;
  }

  /**
   * Remove the item from the queue
   */
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }

    this.data[this.head] = value;
    this.head = (this.head + 1) % this.size;
    return true;
  }


}

const circurlarStack = new SelfImplementDoubleLinkedList(3);