let counter=0;

function printValue(divId,value) {
	var el1=document.getElementById(divId);
	if(el1){
		el1.innerHTML=value;
	}
	
}
printValue("counter",0)
var el2=document.getElementById("inc")
if(el2){
	el2.addEventListener('click', increment);
}
function increment(){
	if(counter<10){
		counter++;
	}
	
	printValue("counter",counter);
}
// add decrement Problem 2:
var el3=document.getElementById("dec")
if(el3){
	el3.addEventListener('click', decrement);
}

function decrement(){
	if(counter>0){
		counter--;
	}
	printValue("counter",counter);
}