/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) { // if this is the first element in the list, it is both the head and tail
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
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
    }

    if (this.length === 2) {
      const v = this.tail.val;
      this.tail = this.head;
      this.length--;
      return v;
    }

    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const v = this.tail.val
    this.tail = currentNode;
    currentNode.next = null;
    this.length--;
    return v;
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
    const newNode = new Node(val);
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
        newNode.next = nextNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

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

module.exports = LinkedList;
