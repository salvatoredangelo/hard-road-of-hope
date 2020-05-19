//timer logic
const deadline = new Date("may 29, 2020 20:00:00").getTime()
const now = new Date().getTime()
const timer = deadline - now

//map out time segments
const days = Math.floor(timer / (1000 * 60 * 60 * 24));
const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));

//grab element
const timerNode = document.querySelector('#timer')
if (days >= 1) {
    timerNode.innerHTML = `Coming in ${days} days`
} else if (days < 1) {
    timerNode.innerHTML = `Countdown to Premiere: ${hours}:${minutes}`
} else if (timer <= 0) {
    timerNode.parentNode.removeChild(timerNode)
    document.querySelector('#order-link').innerHTML = `Order Now`
}