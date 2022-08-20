// Create element
const li = document.createElement("li")

// Add Class
li.className = "collection-item"

// Add Id
li.id = "new item"

// Add attribute
li.setAttribute("title", "New Item")

// Create text node and append
li.appendChild(document.createTextNode("new Task"))

// Create new link element
const link = document.createElement("a")

// Add Classes
link.className = "delete-item secondary-content"

// Add Icon HTml
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link)

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li)

console.log(link)
