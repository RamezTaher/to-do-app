// Create Object
const person = {
  firstName: "Ramez",
  lastName: "Taher",
  age: 19,
  hobbies: ["Sports", "chess"],
  address: {
    city: "data",
    state: "data",
  },
  getBirthYear: function () {
    return 2022 - this.age
  },
}

let val

val = person
// Get specific value

val = person.firstName
val = person["lastName"]
val = person.age
val = person.hobbies[1]
val = person.address.state
val = person.address["city"]
val = person.getBirthYear()

const people = [
  { name: "data", age: 16 },
  { name: "daa", age: 14 },
  { name: "datt", age: 16 },
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}

console.log(val)
