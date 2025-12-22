// LinkedList Node
function Node(val) {
  this.val = val;
  this.next = null;
}

// LinkedList Object
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

// Adding element at head
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// Adding element at tail
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  this.size++;
};

// Adding element at index
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);

  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else if (index > this.size || index < 0) {
    return;
  } else {
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
  }
};

// Get value from index
MyLinkedList.prototype.getFromIndex = function (index) {
  let curr = this.head;

  if (index < 0 || index >= this.size) {
    return -1;
  }

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};

// Delete element from index
MyLinkedList.prototype.deleteFromIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;

  this.size--;
};

// Print elements of the LinkedList
MyLinkedList.prototype.print = function (head) {
  let curr = head;

  for (let i = 0; i < this.size; i++) {
    console.log(curr.val);
    curr = curr.next;
  }
};

// Finding the middle node of the LinkedList
MyLinkedList.prototype.middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

// Reversing a LinkedList
MyLinkedList.prototype.reverse = function (head) {
  let prev = null,
    curr = head,
    temp = head;

  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

// Checking LinkedList has cycle or not
MyLinkedList.prototype.hasCycle = function (head) {
  if (head == null) {
    return false;
  }

  let mySet = new Set();
  let curr = head;

  while (curr !== null) {
    if (mySet.has(curr.val)) {
      return true;
    }
    mySet.add(curr);
    curr = curr.next;
  }

  return false;
};

// Checking LinkedList has cycle or not using Floyd's Algorithm
MyLinkedList.prototype.hasCycleFloyd = function (head) {
  if (head == null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

// Checking whether the LinkedList is palindrome or not
MyLinkedList.prototype.isPalindrome = function (head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null,
    curr = slow,
    temp = slow;

  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let fList = head,
    sList = prev;

  while (sList !== null) {
    if (fList.val !== sList.val) {
      return false;
    }
  }

  return true;
};

// Checking for intersection in two LinkedList
MyLinkedList.prototype.intersection = function (head1, head2) {
  let mySet = new Set();

  let curr1 = head1,
    curr2 = head2;

  while (curr2 !== null) {
    mySet.add(curr2);
    curr2 = curr2.next;
  }

  while (curr1 !== null) {
    if (mySet.has(curr1)) {
      return curr1;
    }
    curr1 = curr1.next;
  }

  return null;
};

// removing the given value node from the LinkedList
MyLinkedList.prototype.removeElement = function (head, val) {
  let sentinel = new Node();
  sentinel.next = head;
  let prev = sentinel;

  while (prev !== null && prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinel.next;
};

// removing the nth element from the end of the LinkedList in two pass
MyLinkedList.prototype.removeNthElementFromEnd = function (head, n) {
  let size = 0;
  let curr = head;
  let index = 0;

  while (curr !== null) {
    size++;
    curr = curr.next;
  }

  if (n === size) {
    head = head.next;
  } else {
    curr = head;
    while (index < size - n - 1) {
      curr = curr.next;
      index++;
    }
    curr.next = curr.next.next;
  }

  return head;
};

// removing the nth element from the end of the LinkedList in one pass
MyLinkedList.prototype.removeNthElementFromEnd = function (head, n) {
  let sentinel = new Node();
  sentinel.next = head;

  let s = sentinel;
  let f = sentinel;

  for (let i = 0; i < n; i++) {
    f = f.next;
  }

  while (f.next !== null) {
    s = s.next;
    f = f.next;
  }

  s.next = s.next.next;

  return sentinel.next;
};

// removing duplicates from the sorted LinkedList
MyLinkedList.prototype.removeDuplicates = function (head) {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

// ordering odd index first and then even index values in the LinkedList
MyLinkedList.prototype.oddEven = function (head) {
  if (head === null) {
    return null;
  }

  let odd = head,
    even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

// adding the numbers of two LinkedList
MyLinkedList.prototype.addTwoNumbers = function (l1, l2) {
  let dummy = new Node(0);
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    curr.next = new Node(sum % 10);
    carry = Math.floor(sum / 10);
    curr = curr.next;
  }

  return dummy.next;
};

// merging two sorted LinkedList
MyLinkedList.prototype.mergeList = function (list1, list2) {
  let dummy = new Node(0);
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  curr.next = list1 !== null ? list1 : list2;

  return dummy.next;
};

// rotate the LinkedList by k times
MyLinkedList.prototype.rotateKTimes = function (head, k) {
  let size = 0;
  let curr = head;

  while (curr !== null) {
    size++;
    curr = curr.next;
  }

  k = k % size;

  if (k === 0) {
    return head;
  }

  let f = head;
  let s = head;

  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  while (f.next !== null) {
    s = s.next;
    f = f.next;
  }

  let newHead = s.next;
  s.next = null;
  f.nex = head;

  return newHead;
};

MyLinkedList.prototype.swapPair = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new Node();
  dummy.next = head;

  let p = dummy;
  let c = head;
  let n = head.next;

  while (c !== null && n !== null) {
    p.next = n;
    curr.next = n.next;
    n.next = c;

    p = c;
    c = p.next;
    n = c && c.next;
  }

  return dummy.next;
};

const list = new MyLinkedList();

list.addAtHead(1);
list.addAtTail(6);
list.addAtIndex(1, 2);
list.addAtIndex(2, 3);
list.addAtIndex(3, 4);
list.addAtIndex(4, 5);

// list.print(list.head);
// console.log(list.reverse(list.head));

// let newHead = list.reverse(list.head);
// list.print(newHead);

console.log(list.hasCycle(list.head));
