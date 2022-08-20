let val

const today = new Date()
let birthday = new Date("9-10-2000 15:14:00")
birthday = new Date("September 10 2000")
birthday = new Date("9/10/2000")

val = today.getMonth()
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getMilliseconds()
val = today.getTime()

birthday.setMonth(11)
birthday.setDate(20)
birthday.setFullYear(2002)
birthday.setHours(22)

console.log(val)
