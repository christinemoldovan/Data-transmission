var app = new Vue({
    el: '#hamming-encoder',
    data: {
        dataBits: [],
        status: '',
        numberOfDataBits: 4,
        numberOfDataParity: 0
    },
    created: function () {
        this.initDataBits(4);
       
    },
    methods: {
        initDataType:function(){
            numberOfDataParity=this.numberOfDataParity;
                if(this.numberOfDataParity==1){
                    console.log("non parity");
                }else console.log("parity");

        },
        initDataBits: function(){
            this.dataBits=[];
            
            for(var i=0;i<this.numberOfDataBits;i++){
                var bit = { data: null };
                this.dataBits.push(bit);
            }
        },
        send: function () {
            if (this.validate(this.dataBits) === true){
                var encodedMessage = this.encode(this.dataBits);
                // this.status = encodedMessage + ' encoded sent to server';

                return axios.put("http://localhost:3000/message", {bits: encodedMessage}).then(
                    response => (this.status = response.data)
                );
            } else {
                this.status = 'Input is not valid. Please use 0 or 1 as data bit values';
            }
        },
        encode: function(bits){
           /* var c4=this.parity(parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 4
            var c2=this.parity(parseInt(bits[0].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 2
            var c1=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 1
            // var C0 = this. ...
            var c0=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[2].data)+c1+c2+c4); //bitul de paritate de pe pozitia 0
			console.log("Parity bit: c0:"+c0);
            console.log("Control bits: "+"c1:"+c1+", c2:"+c2+", c4:"+c4);
            return [c0,c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data)]; // vectorul V (cuvantul de transmis)*/

            // This function must be changed to allow any number of data bits
            // Right now it only works for 4 data bits

            if(bits.length == 4){
            var c4=this.parity(parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 4
            var c2=this.parity(parseInt(bits[0].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 2
            var c1=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 1
            var c0 = this.parity(parseInt(bits[0].data) + parseInt(bits[1].data) + parseInt(bits[2].data) + parseInt(bits[3].data) + c1 + c2 + c4);
            
            if(numberOfDataParity==0){
            console.log("Parity bit: c0:"+c0);
            console.log("Control bits: "+"c1:"+c1+", c2:"+c2+", c4:"+c4);
            var v1 = [c0,c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data)]; // outputing v1
            console.log("Vectorul v1 pentru 4 biti este: "+ v1);
            return [c0,c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data)]; // vectorul V (cuvantul de transmis)
        }
        else{
            console.log("Control bits: "+"c1:"+c1+", c2:"+c2+", c4:"+c4);
            var v2 = [c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data)] ;
            console.log("Vectorul v2 pentru 4 biti este: "+ v2);
            return [c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data)]; // vectorul V (cuvantul de transmis)
        }
            
            }
            else
                if(bits.length == 8){
                    var c8 = this.parity(parseInt(bits[4].data)+parseInt(bits[5].data)+parseInt(bits[6].data)+parseInt(bits[7].data));
                    var c4=this.parity(parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)+parseInt(bits[7].data)); // se calculeaza bitul de control de pe pozitia 4
                    var c2=this.parity(parseInt(bits[0].data)+parseInt(bits[2].data)+parseInt(bits[3].data)+parseInt(bits[5].data)+parseInt(bits[6].data)); // se calculeaza bitul de control de pe pozitia 2
                    var c1=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[3].data)+parseInt(bits[5].data)+parseInt(bits[6].data)); // se calculeaza bitul de control de pe pozitia 1
                    var c0=this.parity(parseInt(bits[0].data) + parseInt(bits[1].data) + parseInt(bits[2].data) + parseInt(bits[3].data) + parseInt(bits[4].data) + parseInt(bits[5].data) 
                            + parseInt(bits[6].data) + parseInt(bits[7].data) + c1 +  c2 + c4+ c8);
                  if(numberOfDataParity==0){
                     console.log("Parity bit: c0:"+c0);
                     console.log("Control bits: "+"c1:"+c1+", c2:"+c2+", c4:"+c4+", c8:"+c8);
                     var v1 = [c0,c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data),c8,parseInt(bits[4].data),
                                parseInt(bits[5].data),parseInt(bits[6].data),parseInt(bits[7].data)]; // outputing v1
                     console.log("Vectorul v1 pentru 8 biti este: "+ v1);
                     return v1; // vectorul V (cuvantul de transmis)
                }else{
                     console.log("Control bits: "+"c1:"+c1+", c2:"+c2+", c4:"+c4+", c8:"+c8);
                     var v2 = [c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data),c8,parseInt(bits[4].data),
                                parseInt(bits[5].data),parseInt(bits[6].data),parseInt(bits[7].data)]; // outputing v1
                     console.log("Vectorul v2 pentru 8 biti este: "+ v2);
                     return v2; // vectorul V (cuvantul de transmis)
                 }
                      
                }
        },
        parity: function(number){
            return number % 2;
        },
        validate: function(bits){
            for(var i=0; i<bits.length;i++){
                if (this.validateBit(bits[i].data) === false)
                return false;
            }
            return true;
        },
        validateBit: function(character){
            if (character === null) return false;
            return (parseInt(character) === 0 ||
            parseInt(character) === 1);  
        }
    }
})