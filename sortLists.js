const LinkedList = require("./linked-list");

function sortLists(list1, list2) {
  let sortedList = new LinkedList();

  while (list1.length && list2.length) {
    let val1 = list1.head.val;
    let val2 = list2.head.val;
    if (val1 >= val2) {
      console.log(`pushing ${list2.head} from list 2`)
      sortedList.push(list2.shift());
    } else {
      console.log(`pushing ${list1.head} from list 1`)
      sortedList.push(list1.shift());
    }
  }

  while (list1.length) {
    sortedList.push(list1.shift());
  }

  while (list2.length) {
    sortedList.push(list2.shift());
  }

  return sortedList;
}

module.exports = sortLists;