import countDown from "./countdown.js";

const daysToChristimas = new countDown('24 December 2026 23:59:59')
const dias = daysToChristimas.days()
console.log(dias, daysToChristimas.hours())

