function decode(bits) {
	//de 8 biti
	//fara paritate
	if(bits.length==12){
		var z8=parity(bits[1]+bits[2]+bits[3]+bits[4]);
		var z4=parity(bits[3]+bits[4]+bits[5]+bits[6]);
		var z2=parity(bits[1]+bits[2]+bits[5]+bits[6]);
		var z1=parity(bits[0]+bits[2]+bits[4]+bits[6]);

		//corectare eroare
		var errorPosition=z1*1+z2*2+z4*4+z8*8;
		var errorDetected=false;
		if (errorPosition!=0) errorDetected=true;
		if (errorDetected) {
			bits[errorPosition-1]=parity(bits[errorPosition-1]+1);
		}
		return { errorCorrected: errorDetected, errorPosition: errorPosition-1, bits: bits };

	}
	//cu paritate
	if(bits.length==13){
		var z8=parity(bits[1]+bits[2]+bits[3]+bits[4]);
		var z4=parity(bits[3]+bits[4]+bits[5]+bits[6]);
		var z2=parity(bits[1]+bits[2]+bits[5]+bits[6]);
		var z1=parity(bits[0]+bits[2]+bits[4]+bits[6]);
		var z0=parity(bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]+bits[8]);

		//corectare eroare
		var errorPosition=z1*1+z2*2+z4*4+z8*8;
		var errorParity=z0;
		var errorDetected=false;
		if (errorPosition!=0 && errorParity!=0) errorDetected=true;
		if (errorDetected) {
			bits[errorPosition]=parity(bits[errorPosition]+1);
		}
		return { errorCorrected: errorDetected, errorPosition: errorPosition, bits: bits };
	}

	//de 4 biti
	//fara paritate
	if(bits.length==7){
		var z4=parity(bits[3]+bits[4]+bits[5]+bits[6]);
		var z2=parity(bits[1]+bits[2]+bits[5]+bits[6]);
		var z1=parity(bits[0]+bits[2]+bits[4]+bits[6]);

		//corectare eroare
		var errorPosition=z1*1+z2*2+z4*4;
		var errorDetected=false;
		if (errorPosition!=0) errorDetected=true;
		if (errorDetected) {
			bits[errorPosition-1]=parity(bits[errorPosition-1]+1);
		}
		return { errorCorrected: errorDetected, errorPosition: errorPosition-1, bits: bits };
	}
	//cu paritate
	if(bits.length==8){
		var z4=parity(bits[3]+bits[4]+bits[5]+bits[6]);
		var z2=parity(bits[1]+bits[2]+bits[5]+bits[6]);
		var z1=parity(bits[0]+bits[2]+bits[4]+bits[6]);
		var z0=parity(bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]+bits[8]);

		//corectare eroare
		var errorPosition=z1*1+z2*2+z4*4;
		var errorParity=z0;
		var errorDetected=false;
		if (errorPosition!=0 && errorParity!=0) errorDetected=true;
		if (errorDetected) {
			bits[errorPosition]=parity(bits[errorPosition]+1);
		}
		return { errorCorrected: errorDetected, errorPosition: errorPosition, bits: bits };
	}
    
    var errorPosition=z0*0+z1*1+z2*2+z4*4;
	var errorDetected=false;
	if (errorPosition!=0) errorDetected=true;
	if (errorDetected) {
		bits[errorPosition-1]=parity(bits[errorPosition-1]+1);
	}
    return { errorCorrected: errorDetected, errorPosition: errorPosition-1, bits: bits };
}

parity = function(number){
	return number % 2;
}

exports.decode = decode;
