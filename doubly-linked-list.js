/** DoubleNode: node for a double linked list. */

class DoubleNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new DoubleNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift(val) {
    const newNode = new DoubleNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 1) {
      const v = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return v;
    } else if (this.length === 2) {
      const v = this.tail.val;
      this.tail = this.head;
      this.length--;
      return v;
    }

    let lastNode = this.tail;
    this.tail = lastNode.prev;
    this.tail.next = null;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const v = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return v;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return v;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new DoubleNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let currentNode = this.head;
      for (let i = 1; i < idx; i++) {
        currentNode = currentNode.next;
      }
      let nextNode = currentNode.next;
      if (nextNode) {
        currentNode.next = newNode;
        newNode.prev = currentNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx. */

  removeAt(idx) {
    if (this.length === 1) {
      let v = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return v;
    }
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = nextNode.next;
    nextNode.next.prev = currentNode;
    this.length--;
    return nextNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let nodes = 0;
    if (this.length === 0) {
      return 0;
    }
    let currentNode = this.head;
    while (currentNode) {
      total += currentNode.val;
      nodes++;
      currentNode = currentNode.next;
    }
    return (total / nodes);
  }
}

module.exports = DoublyLinkedList;