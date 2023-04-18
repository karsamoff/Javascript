
/* const myInt = 654;
const myFloat = 6.667
myInt;
myFloat;

const test=typeof myInt;
const test2=typeof myFloat;


const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(5);
twoDecimalPlaces;

let myNumber = "74";
myNumber += 3;

typeof myNumber;

myNumber = Number(myNumber) + 3;
 
alert(myNumber)
 
console.log(myInt,test2,,myFloat,test,lotsOfDecimal,twoDecimalPlaces)
 
10 + 7;
9 * 8;
60 % 3;

const num1 = 10;
const num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;

5 + 10 * 3;
(num2 % 9) * num1;
num2 + num1 / 8 + 2;

console.log(num1,num2)


const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}*/


/*const num = 5;
const num1 = 10;
const num2 = 15;
const num3 = 20;

const result = num + num1;
const result1 = num3 + num2;
const result2 = result * result1;

console.log(result,result1,result2)*/

/* const sections = document.querySelector('section')

const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);

console.log('test',para1) */

let finalResult = 48;

let evenOddResult = 0;

// Add your code here
console.log(finalResult)
console.log(evenOddResult)




// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);


function esPar(num) {
    if (num % 2 === 48) {
        console.log('Es par')
        return true; // es par
    }
    else {
        console.log('Es impar')
        return false; // es impar
    }
}

esPar();










