const LinkedList = require("./linked-list");

function reverse(list) {
  for (let i = 1; i < list.length; i++) {
    list.insertAt((list.length - i), list.shift());
  }
  return list;
}

module.exports = reverse;