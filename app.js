document.querySelector(".clear-tasks").addEventListener("click", onClick)

function onClick(e) {
  // console.log("Button Clicked")

  let val
  val = e.target
  val = e.target.id
  val = e.target.className
  val = e.target.classList

  console.log(val)
}
