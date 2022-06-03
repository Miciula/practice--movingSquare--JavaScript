const initMovingSquare = (() => {

  const createSquare = (containerSelector) => {

    const square = document.createElement('div')

    square.style.backgroundColor = 'red'
    square.style.width = '100px'
    square.style.height = '100px'
    square.style.position = 'absolute'
    square.style.left = '0px'
    square.style.top = '0px'

    addChildToContainer(containerSelector, square)

    return square
  }

  const addChildToContainer = (containerSelector, e) => {

    const container = document.querySelector(containerSelector).appendChild(e)
    if (!container) return
  }

  const createParagraph = (containerSelector) => {

    const p = document.createElement('p')

    p.style.position = 'absolute'
    p.style.width = '1px'
    p.style.height = '1px'
    p.style.left = '35px'
    p.style.top = '17px'

    addChildToContainer(containerSelector, p)

    return p
  }

  const square = createSquare('body')
  const p = createParagraph('div')

  let positionX = 0
  let positionY = 0

  p.innerHTML = `X=${positionX} Y=${positionY}`

  const render = () => {
    updatingSquare()
    updatingStats()
  }

  const updatingStats = () => {
    p.innerHTML = `X=${positionX} Y=${positionY}`
  }

  const updatingSquare = () => {
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