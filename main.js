const numbers = [number0 = document.querySelector('#number0'),
    number1 = document.querySelector('#number1'),
    number2 = document.querySelector('#number2'),
    number3 = document.querySelector('#number3'),
    number4 = document.querySelector('#number4'),
    number5 = document.querySelector('#number5'),
    number6 = document.querySelector('#number6'),
    number7 = document.querySelector('#number7'),
    number8 = document.querySelector('#number8'),
    number9 = document.querySelector('#number9')]

const screen = document.getElementById('screen')


let j = 0

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', displayNumber)
    if(numbers[i].addEventListener('click', displayNumber)) {
        j = i
        console.log(j)
    }
}



function displayNumber() {
    console.log(numbers[j].textContent)
    let result = numbers[0].textContent
    screen.innerText = result
}


