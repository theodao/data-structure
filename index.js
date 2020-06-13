class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getAll() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  get(index) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
      counter++;
    }

    return -1;
  }

  addAtHead(val) {
    const node = new Node(val);
    node.next = this.head;

    this.head = node;
    return;
  }

  addAtTail(val) {
    let currentNode = this.head;
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return;
  }

  addAtIndex(index, val) {
    if (this.head && index === 0) {
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
    }

    if (!this.head && index === 0) {
      this.head = new Node(val);
    } else if (!this.head && index !== 0) {
      return;
    } else {
      const newNode = new Node(val);
      let currentNode = this.head;
      let counter = 1;

      while (currentNode) {
        if (counter === index) {
          let temp = currentNode.next;
          newNode.next = temp;
          currentNode.next = newNode;
          return;
        } else {
          currentNode = currentNode.next;
          counter++;
        }
      }
    }
  }

  deleteAtIndex(index) {
    if (!this.head) {
      return;
    } else {
      if (index === 0) {
        this.head = this.head.next;
        return;
      } else {
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
          currentNode = currentNode.next;
          count++;
        }

        if (index > counter) {
          return;
        }
      }
    }
  }
}

const list = new LinkedList();

list.addAtIndex(0, 10);
list.addAtIndex(0, 20);
list.addAtIndex(1, 30);
list.getAll();
// list.deleteAtIndex(1);
