class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const newNode = new _Node(data, this.last);
    if (this.first === null) {
      this.first = newNode;
    }
    if (this.last) {
      this.last.next = newNode;
    }
    this.last = newNode;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const firstNode = this.first;
    if (firstNode.next === null) {
      this.last = null;
    } else {
      firstNode.next.prev = null;
      this.first = firstNode.next;
    }
    return firstNode.value;
  }
}

// const main = () => {
//   let starTrekQ = new Queue();

//   starTrekQ.enqueue('Kirk');
//   starTrekQ.enqueue('Spock');
//   starTrekQ.enqueue('Uhura');
//   starTrekQ.enqueue('Sulu');
//   starTrekQ.enqueue('Checkov');
//   // display(starTrekQ);
//   starTrekQ.dequeue();
//   starTrekQ.dequeue();
//   display(starTrekQ);
// };

// main();

const mainD = () => {
  let starTrekQ = new DoubleQueue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // display(starTrekQ);
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  display(starTrekQ);
};

mainD();

function peek(queue) {
  if (!queue.first) {
    return null;
  }
  return queue.first.value;
}
function isEmpty(queue) {
  return queue.first === null;
}
function display(queue) {
  let curNode = queue.first;
  if (curNode === null) {
    console.log('Empty Queue');
  }
  while (curNode.next !== null) {
    console.log(curNode.value);
    curNode = curNode.next;
  }
  console.log(curNode.value);
}
