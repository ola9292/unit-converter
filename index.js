
let someEl = document.getElementById('some-el');
let answerEl = document.getElementById('answer1-el')
let answerE2 = document.getElementById('answer2-el')
let answerE3 =document.getElementById('answer3-el')
let resultEl = document.getElementById('result-el')

//get value of input
function getValue(){
    return someEl.value;
}

//get length computation
function getFeet(){
    let feet;
    let metre;
   metre = (getValue() *3.281).toFixed(2);
   feet =  (getValue() * 0.305).toFixed(2)
   return `${getValue()} metres = ${metre} feet | ${getValue()} feet = ${feet} metres`
}

//get volume computation
function getVol(){
    let liters;
    let gallons;
    liters = (getValue() * 0.264).toFixed(2)
    gallons = (getValue() * 4.546).toFixed(2) 
    return `${getValue()} liters = ${liters} gallons | ${getValue()} gallons = ${gallons} liters`
}


//get mass computation
function getMass(){
    let kilogram;
    let pound;
    kilogram = (getValue() * 2.204).toFixed(2);
    pound =     (getValue() / 2.205).toFixed(2)
    return `${getValue()} kilos = ${kilogram} pounds | ${getValue()} kilos = ${pound} kilos`
}

resultEl.addEventListener('click', function(){
    answerEl.innerHTML=getFeet()
    answerE2.innerHTML=getVol()
    answerE3.innerHTML=getMass()
})
