class SelfImplementArray {
  constructor() {
    this.data = []
  }

  push(value) {
    let dataSize = this.size()
    this.data[dataSize] = value
  }

  unshift(value) {
    for (let i = this.size(); i >= 1; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = value

    return this.size()
  }

  insertAt(value, index) {
    for (let i = this.size(); i >= index; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[index] = value

    return this.size()
  }

  removeAt(index) {
    for (let i = index; i < this.size() - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    this.data.length--

    return this.size()
  }

  shift() {
    for (let i = 0; i < this.size() - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    this.data.length--

    return this.size()
  }

  pop() {
    this.data.length--

    return this.size()
  }

  size() {
    return this.data.length
  }

  isEmpty() {
    return this.data.length === 0
  }

  getItemAt(index) {
    return this.data[index]
  }

  get() {
    return this.data
  }
}

const arr = new SelfImplementArray()

arr.push(1)
arr.push(2)
arr.insertAt(4, 0)
arr.pop()
arr.pop()

console.log(arr.get())
