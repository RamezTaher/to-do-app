const clearBtn = document.querySelector(".clear-tasks")
const card = document.querySelector(".card")
const heading = document.querySelector("h5")

// Click
// clearBtn.addEventListener("click", runEvent)
// Doubleclick
// clearBtn.addEventListener("dblclick", runEvent)
// MouseDown
// clearBtn.addEventListener("mousedown", runEvent)
// MouseUp
// clearBtn.addEventListener("mouseup", runEvent)
// MouseEnter
// card.addEventListener("mouseenter", runEvent)
// Mouse Leave
// card.addEventListener("mouseleave", runEvent)
// Mouse Move
card.addEventListener("mousemove", runEvent)

// Event Handler
function runEvent(e) {
  e.preventDefault()
  console.log(`rgb(${e.offSetX},${e.offSetY},50)`)
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},50)`
}
