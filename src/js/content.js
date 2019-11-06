console.log('Smooth Scroll');

let scrollSpeed = 16

let scrollActivated = false

let scrollUp = false
let scrollDown = false


function scroll() {
  if (scrollDown || scrollUp) {
    window.scrollBy({
      top: scrollSpeed * (scrollDown - scrollUp)
    })
    window.requestAnimationFrame(scroll)
  } else {
    scrollActivated = false
  }
  console.log(new Date().getTime())
}


window.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowDown' && evt.shiftKey) {
    scrollDown = true
    if (!scrollActivated) scroll()
    scrollActivated = true
  } else if (evt.code === 'ArrowUp' && evt.shiftKey) {
    scrollUp = true
    if (!scrollActivated) scroll()
    scrollActivated = true
  }
})

window.addEventListener('keyup', evt => {
  if (evt.code === 'ArrowDown') {
    scrollDown = false 
  } else if (evt.code === 'ArrowUp') {
    scrollUp = false
  }
})

