var firstNumber = parseInt($('#firstNumber').val());
var secondNumber = parseInt($('#secondNumber').val());

var result = 0;
var i = 0;

$("#inc").on('click', increment)
$("#dec").on('click', decrement)
$("#mul").on('click', multiply)
$("#div").on('click', divide)
$("#eq").on('click', equal)

function increment(firstNumber,secondNumber){
    i = 1;
    firstNumber = parseInt($('#firstNumber').val());
    secondNumber = parseInt($('#secondNumber').val());
    result = firstNumber + secondNumber;
    return result;
}

function multiply(firstNumber,secondNumber){
    i = 3;
    firstNumber = parseInt($('#firstNumber').val());
    secondNumber = parseInt($('#secondNumber').val());
    result = firstNumber*secondNumber;
    return result
}

function decrement(firstNumber,secondNumber){
    i = 2;
    firstNumber = parseInt($('#firstNumber').val());
    secondNumber = parseInt($('#secondNumber').val());
    result = firstNumber - secondNumber;
    return result;
    
}

function divide(firstNumber,secondNumber){
    i = 4;
    firstNumber = parseInt($('#firstNumber').val());
    secondNumber = parseInt($('#secondNumber').val());
    result = firstNumber/secondNumber;
    return result ;
}


function printValue(divId, value){
    $("#"+divId).html(value)
 }

function equal(result)
{
    if(i == 1)
    {
        result = increment(firstNumber, secondNumber);
    }
    if(i == 2)
    {
        result = decrement(firstNumber, secondNumber);
    }
    if(i == 3)
    {
        result = multiply(firstNumber, secondNumber);
    }
    if(i == 4)
    {
        result = divide(firstNumber, secondNumber);
    }
    printValue("result", result);
}

