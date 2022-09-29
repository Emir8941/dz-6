let base = [
    {id: 'one',img: '/images/image 1.png', title: 'Syltherine', suptitle: 'Stylish cafe chair', prise: 'Rp 2.500.000', button: 'btn1'},
    {id: 'two',img: '/images/image 2.png', title: 'Leviosa', suptitle: 'Stylish cafe chair', prise: 'Rp 2.500.000', button: 'btn2'},
    {id: 'three',img: '/images/image 3.png', title: 'Lolito', suptitle: 'Luxury big sofa', prise: 'Rp 7.000.000', button: 'btn3'},
    {id: 'four',img: '/images/image 4.png', title: 'Respira', suptitle: 'Minimalist fan', prise: 'Rp 500.000', button: 'btn4'},
    {id: 'five',img: '/images/image 6.png', title: 'Grifo', suptitle: 'Night lamp', prise: 'Rp 1.500.000', button: 'btn5'},
    {id: 'six',img: '/images/image 7.png', title: 'Muggo', suptitle: 'Small mug', prise: 'Rp 150.000', button: 'btn6'},
    {id: 'seven',img: '/images/image 8.png', title: 'Pingky', suptitle: 'Cute bed set', prise: 'Rp 7.000.000', button: 'btn7'},
    {id: 'eight',img: '/images/image 9.png', title: 'Potty', suptitle: 'Minimalist flower pot', prise: 'Rp 500.000', button: 'btn8'},
]
let row = document.querySelector('.row')

base.forEach((item) => {
    row.innerHTML += `
    <div class='card' id='${item.id}'> <img class='card_img' src='${item.img}' alt='${item.title}'> 
    <p class='title'>${item.title}</p> <p class='suptitle'>${item.suptitle}</p> <p class='title'>${item.prise}</p>
    <button class = "${item.button}">delete</button></div>`
})

let h1 = document.createElement('h1')
h1.textContent = 'Our Products'
row.before(h1)
const div = document.createElement('div')
row.after(div)
div.className = 'linkbtn'

let a = document.createElement('a')
a.textContent = 'Show More'
div.append(a)
a.className = 'btn'
a.href = '#'

const btn1 = document.querySelector('.btn1')
btn1.addEventListener('click',function() {
  const one = document.querySelector('#one')
  one.remove(one.remove)
})
const btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',function() {
  const two = document.querySelector('#two')
  two.remove(two.remove)
})
const btn3 = document.querySelector('.btn3')
btn3.addEventListener('click',function() {
  const three = document.querySelector('#three')
  three.remove(three.remove)
})
const btn4 = document.querySelector('.btn4')
btn4.addEventListener('click',function() {
  const four = document.querySelector('#four')
  four.remove(four.remove)
})
const btn5 = document.querySelector('.btn5')
btn5.addEventListener('click',function() {
  const five = document.querySelector('#five')
  five.remove(five.remove)
})
const btn6 = document.querySelector('.btn6')
btn6.addEventListener('click',function() {
  const six = document.querySelector('#six')
  six.remove(six.remove)
})
const btn7 = document.querySelector('.btn7')
btn7.addEventListener('click',function() {
  const seven = document.querySelector('#seven')
  seven.remove(seven.remove)
})
const btn8 = document.querySelector('.btn8')
btn8.addEventListener('click',function() {
  const eight = document.querySelector('#eight')
  eight.remove(eight.remove)
})

