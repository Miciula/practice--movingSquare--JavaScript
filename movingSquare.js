const square = document.createElement('div')
const h6 = document.createElement('h6')

let positionX = 0
let positionY = 0

square.style.backgroundColor = 'red'
square.style.width = '100px'
square.style.height = '100px'
square.style.position = 'absolute'
square.style.left = positionX + 'px'
square.style.top = positionY + 'px'
square.style.zIndex = 1

h6.innerHTML = 'X=' + String(positionX) + ' | ' + 'Y=' + String(positionY)
h6.style.position = 'absolute'
h6.style.left = 0
h6.style.top = 0
h6.style.margin = '4px'
h6.style.zIndex = 2

document.body.appendChild(square)
document.body.appendChild(h6)

changer = () => {
  square.style.top = positionY + 'px'
  square.style.left = positionX + 'px'
  h6.innerHTML = 'X=' + String(positionX) + ' | ' + 'Y=' + String(positionY)
}

changeLeft = () => {
  positionX = positionX - 10
  if (positionX <= 0) {
    positionX = 0
    changer()
  } else {
    changer()
  }
}

changeRight = () => {
  positionX = positionX + 10
  if (positionX <= (innerWidth - 100)) {
    changer()
  } else {
    positionX = innerWidth - 100
    changer()
  }
}

changeTop = () => {
  positionY = positionY - 10
  if (positionY <= 0) {
    positionY = 0
    changer()
  } else {
    changer()
  }
}

changeBot = () => {
  positionY = positionY + 10
  if (positionY <= (innerHeight - 100)) {
    changer()
  } else {
    positionY = innerHeight - 100
    changer()
  }
}

mover = (e) => {
  switch (e.key) {
    case 'ArrowRight':
      changeRight();
      break;
    case 'ArrowLeft':
      changeLeft();
      break;
    case 'ArrowUp':
      changeTop();
      break;
    case 'ArrowDown':
      changeBot();
      break;
    default:
      break
  }
}

window.addEventListener(
  'keydown',
  mover
)
