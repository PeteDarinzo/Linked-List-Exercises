const DoublyLinkedList = require("./doubly-linked-list");

describe("push", function () {
  it("appends node and increments length", function () {
    let dblLst = new DoublyLinkedList();

    dblLst.push(5);
    expect(dblLst.length).toBe(1);
    expect(dblLst.head.val).toBe(5);
    expect(dblLst.tail.val).toBe(5);
    expect(dblLst.head.prev).toBe(null);

    dblLst.push(10);
    expect(dblLst.length).toBe(2);
    expect(dblLst.head.val).toBe(5);
    expect(dblLst.head.next.val).toBe(10);
    expect(dblLst.tail.val).toBe(10);

    dblLst.push(15);
    expect(dblLst.length).toBe(3);
    expect(dblLst.head.val).toBe(5);
    expect(dblLst.head.next.next.val).toBe(15);
    expect(dblLst.tail.val).toBe(15);
    expect(dblLst.tail.prev.val).toBe(10);
  });
});

describe("unshift", function () {
  it("adds node at start and increments length", function () {
    let dblLst = new DoublyLinkedList();

    dblLst.unshift(5);
    expect(dblLst.length).toBe(1);
    expect(dblLst.head.val).toBe(5);
    expect(dblLst.tail.val).toBe(5);

    dblLst.unshift(10);
    expect(dblLst.length).toBe(2);
    expect(dblLst.head.val).toBe(10);
    expect(dblLst.head.next.val).toBe(5);
    expect(dblLst.tail.val).toBe(5);

    dblLst.unshift(15);
    expect(dblLst.length).toBe(3);
    expect(dblLst.head.prev).toBe(null);
    expect(dblLst.head.val).toBe(15);
    expect(dblLst.head.next.next.val).toBe(5);
    expect(dblLst.tail.val).toBe(5);
    expect(dblLst.tail.prev.val).toBe(10);
  });
});

describe("pop", function () {
  it("removes node at end and decrements length", function () {
    let dblLst = new DoublyLinkedList([5, 10]);

    expect(dblLst.pop()).toBe(10);
    expect(dblLst.head.val).toBe(5);
    expect(dblLst.tail.val).toBe(5);
    expect(dblLst.length).toBe(1);

    expect(dblLst.pop()).toBe(5);
    expect(dblLst.tail).toBe(null);
    expect(dblLst.head).toBe(null);
    expect(dblLst.length).toBe(0);
  });
});

describe("shift", function () {
  it("removes node at start and decrements length", function () {
    let dblLst = new DoublyLinkedList([5, 10]);

    expect(dblLst.shift()).toBe(5);
    expect(dblLst.head.prev).toBe(null);
    expect(dblLst.tail.val).toBe(10);
    expect(dblLst.length).toBe(1);

    expect(dblLst.shift()).toBe(10);
    expect(dblLst.tail).toBe(null);
    expect(dblLst.head).toBe(null);
    expect(dblLst.length).toBe(0);
  });
});

describe("getAt", function () {
  it("gets val at index", function () {
    let dblLst = new DoublyLinkedList([5, 10]);

    expect(dblLst.getAt(0)).toBe(5);
    expect(dblLst.getAt(1)).toBe(10);
  });
});

describe("setAt", function () {
  it("sets val at index", function () {
    let dblLst = new DoublyLinkedList([5, 10]);

    expect(dblLst.setAt(0, 1));
    expect(dblLst.setAt(1, 2));
    expect(dblLst.head.val).toBe(1);
    expect(dblLst.head.next.val).toBe(2);
  });
});

describe("insertAt", function () {
  it("inserts node and adjusts nearby nodes", function () {
    let dblLst = new DoublyLinkedList([5, 10, 15, 20]);

    dblLst.insertAt(2, 12);
    expect(dblLst.length).toBe(5);
    expect(dblLst.head.val).toBe(5);
    expect(dblLst.head.next.val).toBe(10);
    expect(dblLst.head.next.next.val).toBe(12);
    expect(dblLst.head.next.next.next.val).toBe(15);
    expect(dblLst.head.next.next.next.next.val).toBe(20);

    dblLst.insertAt(5, 25);
    expect(dblLst.head.next.next.next.next.next.val).toBe(25);
    expect(dblLst.tail.val).toBe(25);
  });

  it("inserts into empty list", function () {
    let dblLst = new DoublyLinkedList();

    dblLst.insertAt(0, 5);
    expect(dblLst.length).toBe(1);
    expect(dblLst.head.val).toBe(5);
    expect(dblLst.head.prev).toBe(null);
    expect(dblLst.tail.val).toBe(5);
    expect(dblLst.tail.next).toBe(null);
  });
});

describe("removeAt", function () {
  it("removes from 1-item list", function () {
    let dblLst = new DoublyLinkedList(["a"]);

    dblLst.removeAt(0);
    expect(dblLst.length).toBe(0);
    expect(dblLst.head).toBe(null);
    expect(dblLst.tail).toBe(null);
  });
});

describe("average", function () {
  it("calculates the average of items in a list", function () {
    let dblLst = new DoublyLinkedList([2, 3, 1, 1, 7, 6, 9]);
    expect(dblLst.average()).toBeCloseTo(4.1429, 4);
  });

  it("returns 0 for empty lists", function () {
    let dblLst = new DoublyLinkedList();
    expect(dblLst.average()).toBe(0);
  });
});
