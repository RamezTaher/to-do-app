// document.getElementsByClassName

const items = document.getElementsByClassName("collection-item")

console.log(items)
items[0].style.color = "red"
items[3].textContent = "Hello World"

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item")

console.log(listItems)

// document.getElementsByTagName
let lis = document.getElementsByTagName("li")
console.log(lis)

// Convert HTML Collection into array
lis = Array.from(lis)
lis.forEach((li, idx) => {
  console.log(li.className)
  li.textContent = `${idx + 1} : Hello`
})
console.log(lis)

// document.querySelectorAll
const items = document.querySelectorAll("ul.collection li.collection-item")
console.log(items)
items.forEach(function (item, idx) {
  item.textContent = `${idx + 1} : Hello`
})
