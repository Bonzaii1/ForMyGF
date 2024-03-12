
const div = document.getElementById('hover-div')
const yes = document.getElementById("yes")
const label = document.getElementById("test")

function Random(max) {
    return Math.floor(Math.random() * max)
}

div.addEventListener("mouseover", function () {
    div.style.position = "absolute";
    let x = Math.floor(Math.random() * document.body.clientWidth * .8)
    let y = Math.floor(Math.random() * document.body.clientHeight * .9)
    console.log(x, ":", y)
    this.style.top = y + "px"
    this.style.left = x + "px"
})


yes.addEventListener("click", function () {
    var buttons = document.getElementById("buttons")
    var title = document.querySelector("h1")
    var image = document.querySelector("img")
    title.textContent = "SIIIIIIIIIIIIIIIIIII"
    image.src = "assets/catkiss.gif"
    buttons.innerHTML = ''

})



