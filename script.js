let button = document.querySelector("#btn")
function enter(){
    let input = (document.querySelector("#input").value);
    let heading = document.querySelector("#head-one") 
    heading.innerHTML = input
    
}



function first_letter_capital(){
    let heading = document.querySelector("#head-one") 
    let input = (document.querySelector("#input").value);
let nameArr = input.split(' ');
let result = [];
for (let i = 0; i < nameArr.length; i++) {
    // console.log(nameArr[i].slice(0 , 1));
    let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
    let lastLetter = nameArr[i].slice(1).toLowerCase();
    let completeLetter = firstLetter + lastLetter;
    result.push(completeLetter);
}

heading.innerHTML = result.join(' ');
}