// let errel = document.getElementById('error-el')

// function purchaseFun(){
//     errel.innerText =" Somthing went wrong.pls try again .."

// }
let num1 = 8
let num2 = 4
let firstNum = document.getElementById("first-ele");
let secondNum = document.getElementById("second-ele");



 function add(){
     console.log("add btn clicked");
     firstNum.innerText = num1
     secondNum.innerText = num2
     
     firstNum = num1
     secondNum = num2
     sumValue= firstNum + secondNum
     console.log("result is ",resultt);
     var resultt =document.getElementById("result")
     resultt.innerText += " Sum   :"+ sumValue
     
 }
 function mul(){
    console.log("mul btn clicked");
    firstNum.innerText = num1
    secondNum.innerText = num2  
    firstNum = num1
    secondNum = num2
    mulValue = firstNum * secondNum
    console.log("result is ",resultt);
    var resultt = document.getElementById("result")
    resultt.innerText = "mul is  " + mulValue

}
function sub(){
    console.log("sub btn clicked");

    firstNum.innerText = num1
    secondNum.innerText = num2
    firstNum = num1
    secondNum = num2
    substration = firstNum - secondNum
    console.log("result is ",result);
    var resultt = document.getElementById("result")
    resultt.innerText ="sub is "+ substration

}
function div(){
    console.log("div btn clicked");

    firstNum.innerText = num1
    secondNum.innerText = num2
    
    firstNum = num1
    secondNum = num2
    divValue = firstNum / secondNum
    console.log("result is ",result);
    var resultt =document.getElementById("result")
    resultt.innerText = "div is "+divValue


}




