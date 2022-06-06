const initMovingSquare = (() => {

  let positionX = 0
  let positionY = 0

  const createSquare = (containerSelector) => {

    const square1 = document.createElement('div')

    square1.style.backgroundColor = 'red'
    square1.style.width = '100px'
    square1.style.height = '100px'
    square1.style.position = 'absolute'
    square1.style.left = '0px'
    square1.style.top = '0px'

    addChildToContainer(containerSelector, square1)

    return square1
  }

  const createParagraph = (containerSelector) => {

    const p = document.createElement('p')

    p.style.position = 'absolute'
    p.style.width = '1px'
    p.style.height = '1px'
    p.style.left = '35px'
    p.style.top = '17px'
    p.innerHTML = `X=${positionX} Y=${positionY}`

    addChildToContainer(containerSelector, p)

    return p
  }

  const addChildToContainer = (containerSelector, e) => {

    const container = document.querySelector(containerSelector).appendChild(e)
    if (!container) return
  }

  const square = createSquare('body')
  const p = createParagraph('div')

  const render = () => {
    updateSquare()
    updateStatus()
  }

  const updateStatus = () => {
    p.innerHTML = `X=${positionX} Y=${positionY}`
  }

  const updateSquare= () => {
    square.style.top = positionY + 'px'
    square.style.left = positionX + 'px'
  }

  const moveLeft = () => {
    positionX = positionX - 10
    if (positionX <= 0) {
      positionX = 0
      render()
    } else {
      render()
    }
  }

  const moveRight = () => {
    positionX = positionX + 10
    if (positionX <= (innerWidth - 101)) {
      render()
    } else {
      positionX = innerWidth - 101
      render()
    }
  }

  const moveTop = () => {
    positionY = positionY - 10
    if (positionY <= 0) {
      positionY = 0
      render()
    } else {
      render()
    }
  }

  const moveBot = () => {
    positionY = positionY + 10
    if (positionY <= (innerHeight - 101)) {
      render()
    } else {
      positionY = innerHeight - 101
      render()
    }
  }

  const updateSquarePosition = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowUp':
        moveTop();
        break;
      case 'ArrowDown':
        moveBot();
        break;
      default:
        break
    }
  }

  window.addEventListener(
    'keydown',
    updateSquarePosition
  )

})()