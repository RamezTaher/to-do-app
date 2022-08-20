// document.getElementById()
// console.log(document.getElementById("task-title"))
const taskTitle = document.getElementById("task-title")

// Get informations from the element

// console.log(taskTitle.id)
// console.log(taskTitle.className)

// Change styling
taskTitle.style.background = "#666"
taskTitle.style.color = "#fff"
taskTitle.style.padding = "5px"
// document.getElementById("task-title").style.display = "none"

// Chnage Content
taskTitle.textContent = "Task Title"
taskTitle.innerText = "My Tasks"
taskTitle.innerHTML = '<span style="color:red">Task List</span>'

// document.querySelector()

console.log(document.querySelector("#task-title"))
console.log(document.querySelector(".card-title"))
console.log(document.querySelector("h5"))

document.querySelector("li").style.color = "red"
document.querySelector("ul li").style.color = "blue"

document.querySelector("li:last-child").style.color = "red"
document.querySelector("li:nth-child(3)").style.color = "yellow"
document.querySelector("li:nth-child(odd)").style.background = "pink"
document.querySelector("li:nth-child(even)").style.background = "orange"
