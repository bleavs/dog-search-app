class Dog {
  constructor(breed) {
    this.breed = breed
    Dog.all.push(this)
  }
}

Dog.all = []
