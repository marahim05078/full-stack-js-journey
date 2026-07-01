/**
 * Queue Data structure Implementation
 */
class Queue {
  constructor(maxLength = 0) {
    this.maxLength = maxLength;
    this.list = new Array(maxLength);
    this.front = 0;
    this.rear = 0;
  }
  insert(item) {
    if (this.rear >= this.maxLength) {
      console.log("Queue is full.");
      return false;
    }
    this.list[this.rear++] = item;
    return item;
  }

  delete() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return false;
    }
    let deletedItem = this.list[this.front];
    for (let i = this.front; i < this.rear - 1; i++) {
      this.list[i] = this.list[i + 1];
    }
    delete this.list[--this.rear];
    return deletedItem;
  }
  next() {
    if (this.isEmpty()) {
      console.log("The Queue is empty.");
      return false;
    }
    return this.list[this.front];
  }
  showQueue() {
    return this.list;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

module.exports = Queue;
