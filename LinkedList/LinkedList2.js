function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(val) {
  this.data = val;
  this.next = null;
}

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;

  this.size++;
};

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

MyLinkedList.prototype.addAtIndex = function (val, index) {
  if (index === 0) {
    this.addAtHead(val);
    this.size++;
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    this.size++;
    return;
  } else if (index > this.size || index < 0) {
    return;
  } else {
    let newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
  }
};

MyLinkedList.prototype.print = function (head) {
  let curr = head;

  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
};

MyLinkedList.prototype.getFromIndex = function (index) {
  let curr = this.head;
  let count = 0;

  if (index === 0) {
    return this.head.data;
  } else if (index > this.size - 1 || index < 0) {
    return -1;
  } else {
    while (count < index) {
      curr = curr.next;
      count++;
    }

    return curr.data;
  }
};

MyLinkedList.prototype.deleteFromIndex = function (index) {
  let curr = this.head;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  this.size--;
};

MyLinkedList.prototype.middleNode = function (head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
};

MyLinkedList.prototype.reverse = function (head) {
  let prev = null,
    curr = head,
    next = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

MyLinkedList.prototype.hasCycle = function (head) {
  let slow = head,
    fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow == fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

MyLinkedList.prototype.isPalindrome = function (head) {
  let first = head;

  let middleNode = this.middleNode(head);

  let prev = null,
    curr = middleNode,
    next = middleNode;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let last = prev;

  while (last !== null) {
    if (first.data !== last.data) {
      return false;
    }

    first = first.next;
    last = last.next;
  }

  return true;
};

const linkedList = new MyLinkedList();

linkedList.addAtHead(5);
linkedList.addAtTail(3);
linkedList.addAtTail(6);
linkedList.addAtTail(1);
linkedList.addAtTail(8);
linkedList.addAtHead(7);
// linkedList.deleteFromIndex(0);

// console.log(linkedList.getFromIndex(0));

let newNode = linkedList.reverse(linkedList.head);
linkedList.print(newNode);

// console.log(linkedList.middleNode(linkedList.head));
