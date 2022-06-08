const calculatorApp = document.querySelector('.calculator__app'),
calculatorButtons = document.querySelector('.calculator__buttons'),
calculatorInput = document.querySelector('.calculator__input-wrap');


const makeInput = function (i) {
   const input = document.createElement('input');
   input.id = i;
   input.classList.add("calculator__input")
   calculatorInput.append(input);
   const inputValue = document.querySelector('.calculator__input');
   inputValue.setAttribute("maxlength", 10);
}

let symbols = function(i,b) {
      const symbol = document.createElement('button');
      symbol.innerText = i; 
      symbol.classList.add("symbol")
      symbol.classList.add(`symbol__${b}`)
      symbol.setAttribute("data-op",`${i}`)
      calculatorButtons.append(symbol);
   }

let buttonDelete = function(i,b) {
   const symbol = document.createElement('button');
   symbol.innerText = i; 
   symbol.classList.add("symbolAC")
   symbol.classList.add(`symbol__${b}`)
   calculatorButtons.append(symbol);
}
   
let equally = function() {
      const equally = document.createElement('button');
      equally.innerText = "="; 
      equally.classList.add('equally')
      equally.classList.add('calculator__buttons-enter')
      calculatorButtons.append(equally);
   }



const calculator = function () {
      makeInput ("input-calculator");
      const numbers = document.createDocumentFragment()
      const comma = document.createElement('button');
      comma.innerText = '.';
      comma.classList.add(`num__comma`)
      numbers.append(comma);
      for (i=0; i < 10; i++) {
         const num = document.createElement('button');
         num.innerText = i; 
         num.classList.add('num')
         num.classList.add(`num__${i}`)
         numbers.append(num);
      } 

      symbols("+","plus");
      symbols("-","minus");
      symbols("*","multiply");
      symbols("/","share");
      calculatorButtons.append(numbers)
      buttonDelete("AC","C");
      equally();
      const input  = document.querySelector('#input-calculator');
      
   }
   calculator();
   let a = "";
   let b = "";
   const operators =document.querySelectorAll('.symbol')
   let op;
   let result;
   calculatorButtons.addEventListener('click', function(e){
      const input  = document.querySelector('#input-calculator');
      console.log(e.target)
      if (input.value === "Error" && e.target.classList[0] === 'num') {
         input.value = "";
         const a = e.target.innerText;
         input.value += a;
      }  else if (e.target.classList[0] === 'num' && input.value == result || e.target.classList[0] === 'num' && input.value == "Infinity") {
         input.value = ""
         const a = e.target.innerText;
         input.value += a;
      } 
      else if (e.target.classList[0] === 'num' && input.value == result) {
         const a = e.target.innerText;
         input.value += a;
      } else if (e.target.classList[0] === 'num' && input.value !== result) {
            const a = e.target.innerText;
            input.value += a;
      } else if(e.target.classList[0] === 'num__comma' && input.value !== result && !input.value.includes('.')){
         const a = e.target.innerText;
         input.value += a;
      } else if (e.target.classList[0] === 'symbol') { 
         op = e.target.dataset.op
         a = input.value;
         input.value = "";
      } else if (e.target.classList[0] === 'equally' && op !== undefined) { 
         b = input.value;
         let num1 = Number(a);
         let num2 = Number(b);
         console.log(op)
         switch (op) {
            case '+':
               result = num1 + num2;
               break;
            case '-':
               result = num1 - num2;
               break;
            case '*':
               result = num1 * num2;
               break;
            case '/':
               result = num1 / num2;
               break;
            }
         
         input.value = result.toFixed(2);
      } else if (e.target.classList[0] === 'symbolAC') {
         input.value = "";
      } 
   }
   )


   

