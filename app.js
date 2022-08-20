// Set Local storage items
// localStorage.setItem("name", "Ramez")
// localStorage.setItem("age", 30)
// Set session storage item
// sessionStorage.setItem("name", "Ramez")

// Remove item form storage
// localStorage.removeItem("name")

// Get from storage
// const name = localStorage.getItem("name")
// const age = localStorage.getItem("age")

// Clear local Storage
// localStorage.clear()
// console.log(name, age)

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault()
  const task = document.getElementById("task").value

  let tasks

  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks))
  alert("Task Saved")
})

const tasks = JSON.parse(localStorage.getItem("tasks"))

tasks.forEach((task) => {
  console.log(task)
})
