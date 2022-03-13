var el=document.getElementById("fib")
if(el){
   el.addEventListener('input', inputFib);
}

function inputFib (){
 var inputNrFib = parseInt(document.getElementById("fib").value);
 getFibonacci(inputNrFib);
}

function getFibonacci(fib) {
   if( fib < 1 || fib > 10 ){
        return "not allowed";}

    var aux = [1,1];
    for(var i=aux.length; i<fib; i++) { 
          aux[i] = aux[i-2] + aux[i-1];
         }
         console.log(aux);
     return aux;
   
 }
   

   
  
  


