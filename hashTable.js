class SelfImplementedHashTable {
  constructor() {
    this.table = [];
    this.tableSize = size;
  }

  setItem(key, value) {
    let index = this.hashFunction(key);
    this.numItems++;

    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  }

  getItem(key) {
    let index = this.hashFunction(key);

    if (!this.table[index]) {
      return null;
    }

    return this.table[index].find(x => x[0] === key)[1];
  }

  hashFunction(key) {
    let hash = 17;

    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % this.tableSize;
    }

    return hash;
  }
}
