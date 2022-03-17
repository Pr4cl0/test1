class User {
  constructor(name = 'jakub') {
    this.name = name
  }

  get() {
    return this.name
  }
}

// const x = () => 5 + 5

module.exports.User = User
