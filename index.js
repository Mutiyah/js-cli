// const calculatior = () => {
let operation = prompt(`What operation do you want? 
Enter "+" for addition,
"*" for multiplication, 
"/" for division 
or "-" for substraction`)


if(operation == "+" || operation == "-" || operation == "*" || operation == "/"){ //Check for if valid input is entered
    let value = prompt("Enter first number" )
    let value1 = prompt(`Enter second number 
            ${value} ${operation}`)
    
    if(operation === "+"){  //addition operation
        let sum = +value + +value1
        alert(`${value} ${operation} ${value1} = ${sum}`)
    }
    
    else if(operation === "/"){  //division operation
        let divNum = +value / +value1
        alert(`${value} ${operation} ${value1} = ${divNum}`)
    }
    
    else if(operation === "*"){  //multiplication operation
        let multiplyNum = +value * +value1
        alert(`${value} ${operation} ${value1} = ${multiplyNum}`)
    }
    
    else if(operation === "-"){  //substraction operation
        let multiplyNum = +value - +value1
        alert(`${value} ${operation} ${value1} = ${multiplyNum}`)
    }

}else{
    alert("Wrong input. Please reload") //Display error message is invalid input is enetered
}   
