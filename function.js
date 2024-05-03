

"use strict";

function SayMyName(mysecretcode) {
    let myname = document.getElementById("myName").value;
    console.log(myname);
    alert(`Hi ${myname} - ${mysecretcode}`);
  }

function add(number1, number2) {
    return number1 + number2;
  }
  function substract(number1, number2) {
    return number1 - number2;
  }
  function multiply(number1, number2) {
    return number1 * number2;
  }
  function divide(number1, number2) {
    return number1 / number2;
  }


    function calculate() {
        let number1 = Number(document.getElementById('numberOne').value);
        let number2 = Number(document.getElementById('numberTwo').value);
       // let result = number1 + number2;
        document.getElementById('result').innerHTML = add(number1,number2);
      function calculate() {
        let number1 = Number(document.getElementById('numberOne').value);
        let number2 = Number(document.getElementById('numberTwo').value);
        let result = add(number1,number2);
        document.getElementById('result').innerHTML = result;
      }

      console.log(add(2,4));
    }
