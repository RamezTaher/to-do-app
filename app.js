//Create some arrays
const numbers = [12, 455, 1225, 366, 412, 5, 6, 8]
const numbers2 = new Array(22, 45, 33, 76, 54)
const fruits = ["Apple", "Orange", "Pear", "Banana"]
const mixed = [2, "Ramez", true, undefined, null, { a: 1, b: 2 }, new Date()]

let val

// Get Array length
val = numbers.length

// Check if is array
val = Array.isArray(numbers)

// Get Single value
val = numbers[0]

// Insert into array
numbers[2] = 100

// Find index of value
val = numbers.indexOf(366)

// MUTATING ARRAYS
// add ele to end
numbers.push(250)
// add ele to front
numbers.unshift(250)
// take off from end
numbers.pop()
// take off from end
numbers.shift()
// Splice value
numbers.splice(1, 3)
// Reverse
numbers.reverse()
// Concatenate array
val = numbers.concat(numbers2)
// Sorting arrays
val = fruits.sort()
val = numbers.sort()

// Use the "Compare Function"
val = numbers.sort(function (x, y) {
  return x - y
})

val = numbers.sort((x, y) => {
  return y - x
})

// Find
val = numbers.find((num) => {
  return num < 50
})

console.log(val)
