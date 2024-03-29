console.log('Smooth Scroll');

// Pixels per second
const scrollSpeed = 12;

// Pixels per second in fast mode
const scrollSpeedFast = 32;

// Fast scroll active
let fastScroll = false;

let scrollActivated = false;

let scrollUp = false;
let scrollDown = false;


function scroll() {
  if (scrollDown || scrollUp) {
    window.scrollBy({
      top: (fastScroll ? scrollSpeedFast : scrollSpeed) * (scrollDown - scrollUp)
    });
    window.requestAnimationFrame(scroll);
  } else {
    scrollActivated = false;
  }
}


window.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowDown' && evt.shiftKey) {
    scrollDown = true;
    if (!scrollActivated) scroll();
    scrollActivated = true;
  } else if (evt.code === 'ArrowUp' && evt.shiftKey) {
    scrollUp = true;
    if (!scrollActivated) scroll();
    scrollActivated = true;
  } else if (evt.key === 'Control') {
    fastScroll = true;
  }
})

window.addEventListener('keyup', evt => {
  if (evt.code === 'ArrowDown') {
    scrollDown = false;
  } else if (evt.code === 'ArrowUp') {
    scrollUp = false;
  } else if (evt.key === 'Control') {
    fastScroll = false;
  }
})

