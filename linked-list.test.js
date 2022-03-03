const LinkedList = require("./linked-list");
const sortLists = require("./sortLists");
const reverse = require("./reverse");

describe("push", function () {
  it("appends node and increments length", function () {
    let lst = new LinkedList();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.tail.val).toBe(10);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.next.val).toBe(15);
    expect(lst.tail.val).toBe(15);
  });
});

describe("unshift", function () {
  it("adds node at start and increments length", function () {
    let lst = new LinkedList();

    lst.unshift(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(10);
    expect(lst.head.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(15);
    expect(lst.head.next.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });
});

describe("pop", function () {
  it("removes node at end and decrements length", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.pop()).toBe(10);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.length).toBe(1);

    expect(lst.pop()).toBe(5);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });
});

describe("shift", function () {
  it("removes node at start and decrements length", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.shift()).toBe(5);
    expect(lst.tail.val).toBe(10);
    expect(lst.length).toBe(1);

    expect(lst.shift()).toBe(10);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });
});

describe("getAt", function () {
  it("gets val at index", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.getAt(0)).toBe(5);
    expect(lst.getAt(1)).toBe(10);
  });
});

describe("setAt", function () {
  it("sets val at index", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.setAt(0, 1));
    expect(lst.setAt(1, 2));
    expect(lst.head.val).toBe(1);
    expect(lst.head.next.val).toBe(2);
  });
});

describe("insertAt", function () {
  it("inserts node and adjusts nearby nodes", function () {
    let lst = new LinkedList([5, 10, 15, 20]);

    lst.insertAt(2, 12);
    expect(lst.length).toBe(5);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.head.next.next.val).toBe(12);
    expect(lst.head.next.next.next.val).toBe(15);
    expect(lst.head.next.next.next.next.val).toBe(20);

    lst.insertAt(5, 25);
    expect(lst.head.next.next.next.next.next.val).toBe(25);
    expect(lst.tail.val).toBe(25);
  });

  it("inserts into empty list", function () {
    let lst = new LinkedList();

    lst.insertAt(0, 5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });
});

describe("removeAt", function () {
  it("removes from 1-item list", function () {
    let lst = new LinkedList(["a"]);

    lst.removeAt(0);
    expect(lst.length).toBe(0);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });
});

describe("average", function () {
  it("calculates the average of items in a list", function () {
    let lst = new LinkedList([2, 3, 1, 1, 7, 6, 9]);
    expect(lst.average()).toBeCloseTo(4.1429, 4);
  });

  it("returns 0 for empty lists", function () {
    let lst = new LinkedList();
    expect(lst.average()).toBe(0);
  });
});

describe("sort lists", function () {
  it("merges two sorted lists into one sorted list", function () {
    let list1 = new LinkedList([1, 3, 5, 7, 9]);
    let list2 = new LinkedList([2, 4, 6, 8, 10]);
    let sorted = sortLists(list1, list2);
    let sortedVals = [];
    while (sorted.length) {
      sortedVals.push(sorted.shift());
    }
    expect(sortedVals).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("merges two sorted lists of unequal length into one sorted list", function () {
    let list1 = new LinkedList([1, 3]);
    let list2 = new LinkedList([2, 4, 6, 8, 10]);
    let sorted = sortLists(list1, list2);
    let sortedVals = [];
    while (sorted.length) {
      sortedVals.push(sorted.shift());
    }
    expect(sortedVals).toEqual([1, 2, 3, 4, 6, 8, 10]);
  });

  it("merges two sorted lists with duplicates into one sorted list", function () {
    let list1 = new LinkedList([1, 1, 2, 2, 2, 4, 6, 8]);
    let list2 = new LinkedList([1, 2, 2, 3, 5, 6, 8, 8]);
    let sorted = sortLists(list1, list2);
    let sortedVals = [];
    while (sorted.length) {
      sortedVals.push(sorted.shift());
    }
    expect(sortedVals).toEqual([1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 6, 8, 8, 8]);
  });
});

describe("reverse", function () {
  it("reverses a list in place", function () {
    let lst = new LinkedList(["a", "b", "c", "d", "e", "f"]);
    lst = reverse(lst);
    let reversedVals = [];
    while (lst.length) {
      reversedVals.push(lst.shift());
    }
    expect(reversedVals).toEqual(["f", "e", "d", "c", "b", "a"]);
  });
});