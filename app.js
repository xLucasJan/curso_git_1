
const toggleBtn = document.querySelector('.color')
const Btn = document.querySelector('.secondColor')

toggleBtn.addEventListener('click', function(){
   toggleBtn.classList.toggle("secondColor")
})

Btn.addEventListener('click', function(){
   Btn.classList.toggle("thirdColor")
})
