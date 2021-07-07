
var good = "img/good.gif"
var bad = "img/bad.gif"


var calculate = document.querySelector('.btn')
calculate.addEventListener('click',bmicalculator)


function bmicalculator() {
    var weight = document.querySelector('.w').value
    var height = document.querySelector('.h').value
    var bmi = Math.floor(weight / (height * height))
    document.querySelector('.number').innerHTML = bmi
    if (bmi < 18.5){
        document.querySelector('.msg').innerHTML = 'You are underweight !!'
        document.querySelector('.sign').setAttribute("src",bad)
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        document.querySelector('.msg').innerHTML = 'Fantastic you are healthy !!'
        document.querySelector('.sign').setAttribute("src", good)
       
        
    }
    if (bmi >= 24.9) {
        document.querySelector('.msg').innerHTML = 'You are overweight'
        document.querySelector('.sign').setAttribute("src", bad)
        
    }


}

