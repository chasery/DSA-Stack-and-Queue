class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    } else {
      const node = new _Node(data, this.top);
      this.top = node;
    }
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const main = () => {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // display(starTrek);
  // starTrek.pop();
  // starTrek.pop();
  // console.log(starTrek)
};

main();

// 2. Useful methods for a stack
function peek(stack) {
  if (stack.top) {
    return stack.top.data;
  }
  return;
}
function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}
function display(stack) {
  let tempNode = stack.top;
  while (tempNode !== null) {
    console.log(tempNode);
    tempNode = tempNode.next;
  }
}

// 3. Check for palindromes using a stack
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  for (let j = 0; j < s.length; j++) {
    if (s[j] !== stack.top.data) {
      return false;
    }
    stack.pop();
  }
  return true;
}

// True, true, true, false
// console.log(is_palindrome("dad"));

// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// 4. Matching parentheses in an expression
function parens(exp) {
  let stack = new Stack();
  let open = 0;
  let close = 0;

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(' || exp[i] === ')') {
      console.log('I should push');
      stack.push(exp[i]);
    }
  }
  if (stack.top === null) {
    return 'There are no parens in the expression.';
  }
  while (stack.top !== null) {
    if (stack.top.data === '(') {
      open++;
      stack.pop();
    } else if (stack.top.data === ')') {
      close++;
      stack.pop();
    }
  }
  if (open < close) {
    console.log('You are missing an opening paren.');
    return false;
  } else if (open > close) {
    console.log('You are missing a closing paren.');
    return false;
  } else {
    return true;
  }
}

parens('y = x + 2');

// 5. Sort stack
let unsortedStack = new Stack();
unsortedStack.push(5);
unsortedStack.push(2);
unsortedStack.push(4);
unsortedStack.push(3);
unsortedStack.push(1);
// [1, 3, 4, 2, 5]

function sortStack(s) {
  let bufferStack = new Stack();
  let top = s.top;
  if (!top) {
    return null;
  }
  const temp = () => {
    if (!bufferStack.top) {
      bufferStack.push(s.pop());
      return;
    }
    if (top.value > bufferStack.top.value) {
      const big = s.pop();
      const small = bufferStack.pop();
      bufferStack.push(small);
      bufferStack.push(big);
    } else if (top.value < bufferStack.top.value) {
      const big = bufferStack.pop();
      const small = s.pop();
      bufferStack.push(small);
      bufferStack.push(big);
    } else return;
  };
  while (top.next) {
    temp();
    top = top.next;
  }
  temp();
}

// sortStack(unsortedStack);
// display(unsortedStack);
