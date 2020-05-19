class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class SelfImplementDoubleLinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      newNode.previous = currentNode;
      currentNode.next = newNode;
    }
  }

  pop() {
    let currentNode = this.head;

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  }

  get(index) {
    let currentNode = this.head;
    let i = 0;
    if (currentNode !== null && (i < index)) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode.value;
  }

  remove(index) {
    let currentNode = this.head;

    if (currentNode !== null && (i < index)) {
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode) {
      currentNode.next.previous = currentNode.previous
      currentNode.previous.next = currentNode.next;
    }
  }

  insert(value, index) {
    let currentNode = this.head;
    const newNode = new Node(value);

    if (currentNode !== null && (i < index)) {
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode) {
      newNode.next = currentNode.next;
      newNode.previous = currentNode;
      currentNode.next = newNode;
    }
  }

  getAllItem() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}