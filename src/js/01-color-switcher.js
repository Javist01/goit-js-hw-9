const refs = {
    startBtn: document.querySelector('[data-start]'),
    stoptBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
  }
  
  let timerId = null
  
  refs.startBtn.addEventListener('click', startClick)
  refs.stoptBtn.addEventListener('click', stopClick)
  
  function startClick(){
    randomColor()
    timerId = setInterval(() =>{
      randomColor()
    }, 1000)
    refs.startBtn.setAttribute('disabled', 'disabled')
    refs.stoptBtn.removeAttribute('disabled')
  }
  
  function stopClick(){
    clearInterval(timerId)
    refs.stoptBtn.setAttribute('disabled', 'disabled')
    refs.startBtn.removeAttribute('disabled')
  }
  
  function randomColor(){
    const setRandomColor = getRandomHexColor()
    refs.body.style.backgroundColor = setRandomColor
  }
  
  function getRandomHexColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
