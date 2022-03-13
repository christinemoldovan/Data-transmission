var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        process: function(){
            console.log("My input is: " + this.message);
        }
    }
})