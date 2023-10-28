const input = document.querySelector('.input');
const result = document.querySelector('.result');

const buttons = document.querySelector('.buttons');

let totalInput = '';

function display(value) {
    totalInput += value;
    input.innerHTML += value;

 if(input.innerHTML.includes('+') ||
    input.innerHTML.includes('-') ||
    input.innerHTML.includes('/') ||
    input.innerHTML.includes('*')) {
    result.innerHTML = eval(totalInput);
    }

    if (totalInput.value === undefined) {
       let removeUndefined = result.innerHTML.replace("undefined", "");
       result.innerHTML = removeUndefined;
    }
}


function calcDisplay(value) {  
    if (input.innerHTML <= 0) {
      input.innerHTML = '';
    } else {
    totalInput = eval(totalInput);
    input.innerHTML = totalInput;
    result.innerHTML = "";
    }
    
    if (input.innerHTML.length >= 10) {
    input.innerHTML = totalInput.toFixed(10);
    } 
}


function deleteDisplay(value){
input.innerHTML = input.innerHTML.slice(0, -1);

if (input.innerHTML.length <= 0) {
    input.innerHTML = "";
    result.innerHTML = "";
    totalInput = '';
} else {
result.innerHTML = eval(input.innerHTML);
}
}