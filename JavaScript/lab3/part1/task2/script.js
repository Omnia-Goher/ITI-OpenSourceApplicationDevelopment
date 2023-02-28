let num1 = Number(prompt("Enter first number : "))
do { 
let op = prompt("Enter operation (+,-,*,/,%) :")
let num2 = Number(prompt("Enter second number : "))
    let msg = "Do You want to continue with this result?"
    let result,flag
    if (!isNaN(num1) && !isNaN(num2) && (op=="+" || op=="-" || op=="*" || op=="/" || op=="%")) {
        if (op=="+") {
            result = num1 + num2
        }
        else if (op=="-") {
            result = num1 - num2
        }
        else if (op=="*") {
            result = num1 * num2
        }
        else if (op=="/") {
            result = num1 / num2
        }
        else if (op=="%") {
            result = num1 % num2
        }
        flag = confirm(`the answer is ${result} \n${msg}`);
        if (!flag){
            break;
        }else{
            num1 = result;
        }
    }
    else{
        alert("Please refresh the page and Enter Correct Format")
        break;
    } 
} while (true)