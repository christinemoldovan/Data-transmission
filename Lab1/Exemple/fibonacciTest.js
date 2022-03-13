(function test(){
	console.log(getFibonacci(2)==[1, 1]?"passed":"failed");
		console.log(getFibonacci(5)==[1, 1, 2, 3, 5]?"passed":"failed");
			console.log(getFibonacci()=="not allowed"?"passed":"failed");
}
)();