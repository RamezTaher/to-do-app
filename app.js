const form = document.querySelector("form")
const taskInput = document.getElementById("task")

// Clear Input
taskInput.value = ""

form.addEventListener("submit", runEvent)

taskInput.addEventListener("keydown", runEvent)
// keydown
// keyup
// keypress

// focus
// blur
// cut
// paste
// input

function runEvent(e) {
  console.log(`event type: ${e.type}`)
  console.log(e.target.value)
  // Get input value
  console.log(taskInput.value)
}
