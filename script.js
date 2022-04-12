const submitButton = document.querySelector('.submit-button')
const circles = document.querySelector('.flex-circles')
const ratingBox = document.querySelector('.rating')
const ratingCircles = document.querySelectorAll('.circle')
const selectionBox = document.querySelector('.selection')
const ratingNum = document.querySelector('.rating-num')
let value = 1

submitButton.addEventListener('click',handleSubmit,false)

function handleSubmit(e){
  e.preventDefault()
  ratingBox.classList.add('shrink')
  setTimeout(()=> {
    ratingBox.classList.add('hide')
    selectionBox.classList.remove('hide')
    selectionBox.classList.add('expand')

  },1000)
}

circles.addEventListener('click',handleValue,false)

function handleValue(e){
  value = e.target.value
  ratingNum.innerHTML = value
  lightCircles(value)
}


function lightCircles(value){
  ratingCircles.forEach(element => {
    if(Number(element.value)<= value){
      element.setAttribute('aria-checked',true)
    }
    else{
      element.setAttribute('aria-checked',false)
    }
  })
}

