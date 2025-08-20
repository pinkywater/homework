let firstName = "Alsu"
let lastName = "Safina"
let age = "24"
let bodyWeight = "60"
let height = "155"

console.log(firstName, lastName, age, "y.o ", bodyWeight, "kg ", height, "sm")

// 


const sumNames = {
    sayHello: function (name) {
        return `Hello ${name}`;
    }
};

console.log(sumNames.sayHello("Alex"));
console.log(sumNames.sayHello("Maria"));


// 



const numbers = [3, 7, 12, 25, 8, 15, 2, 30];

function printGreaterThanTen(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

printGreaterThanTen(numbers);



function calculate(num1, num2, operator) {
    if (operator === "plus") {
        return num1 + num2;
    } else if (operator === "minus") {
        return num1 - num2;
    } else if (operator === "multiply") {
        return num1 * num2;
    } else if (operator === "divide") {
        return num1 / num2;
    } else {
        return "Unknown operator";
    }
}


let result1 = calculate(2, 3, "minus");     
let result2 = calculate(4, 5, "plus");      
let result3 = calculate(6, 2, "multiply");  
let result4 = calculate(10, 2, "divide");   

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);