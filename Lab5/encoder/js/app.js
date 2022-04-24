var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        encodedBits2: [],
        encodedBits3: [],
        encodedBits4: [],
        encodedBits5: [],
        encodedBits6: [],
        encodedBits7: [],
        encodedBits8: [],
        encodedBits9: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){   
           // this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.encodedBits =  nonReturnToZeroLevel(this.bits);
            this.encodedBits2 = nonReturnToZeroMark(this.bits);
            this.encodedBits3 = nonReturnToZeroSpace(this.bits);
            this.encodedBits4 = returnToZero(this.bits);
            this.encodedBits5 = biphaseLevel(this.bits);
            this.encodedBits6 = biphaseMark(this.bits);
            this.encodedBits7 = biphaseSpace(this.bits);
            this.encodedBits8 = biphaseLevelDifferential(this.bits);
            this.encodedBits9 = biphaseDelay(this.bits);

        
            
        }
        
    }
})


