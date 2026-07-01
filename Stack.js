/**
 * Stack
 */

class Stack {
  constructor(maxLength = 0) {
    this.maxLength = maxLength;
    this.list = new Array(this.maxLength);
    this.top = -1;
  }

  insert() {
    let items = Array.prototype.slice.call(arguments).flat();
    console.log(items);
    for (let item of items) {
      this.top++;
      if (this.top >= this.maxLength) {
        console.log("Stack overflow", "Top =", this.top);
        items.length = this.top;
        this.top--;
        return items;
      }
      this.list[this.top] = item;
    }
    return items;
  }

  delete() {
    if (this.isEmpty()) {
      console.log("Stack underflow");
      return false;
    }
    let item = delete this.list[this.top];
    this.top--;
    return item;
  }

  onTop() {
    if (this.isEmpty()) {
      console.log("Stack is underflow/empty");
      return false;
    }
    return this.list[this.top];
  }

  isEmpty() {
    if (this.top < 0) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
