// ---- eye-rolling function ---/

let eye = document.getElementById('eyeball-fr')

const onMouseMove = eyeRoll => {
  eye.style.left = eyeRoll.pageX + 'px'
  eye.style.top = eyeRoll.pageY + 'px'
  console.log(eyeRoll.pageX + ' ' + eyeRoll.pageY)
}

document.addEventListener('mousemove', onMouseMove)
