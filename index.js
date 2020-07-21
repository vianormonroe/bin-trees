export class Tree {
  constructor() {
    this.root = null
  }

  insert(data) {
    if (!Array.isArray(data))
      return console.error(
        `[TREE] can not be insert ${typeof data} to the tree`
      )
    const [first, ...rest] = data
    this.root = new Peer(first)
    this._fill(rest)
  }

  _fill(data, step = 0, peer = this.root) {
    if (data[step] === undefined) return
    if (peer.isLeaf || peer.isUnmovable(data[step])) {
      peer[peer.getNextMove(data[step])] = new Peer(data[step])
      this._fill(data, step + 1)
    } else {
      this._fill(data, step, peer[peer.getNextMove(data[step])])
    }
  }
}

class Peer {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  get isLeaf() {
    return this.left === null && this.right === null
  }

  getNextMove(nextValue) {
    return nextValue >= this.value ? 'right' : 'left'
  }

  isUnmovable(value) {
    return this[this.getNextMove(value)] === null
  }
}
