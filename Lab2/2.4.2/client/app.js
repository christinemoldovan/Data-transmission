var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
        username: '',
        usercity: '',
        userid: 0,
        msg: ''

    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        add: function(){
           usersService = users();
           usersService.put(this.username,this.usercity).then(response => (this.msg = response.data));
           console.log(this.users);
           
       },
       dlt: function(){
           usersService = users();
           usersService.remove(this.userid).then(response => (this.msg = response.data));
           console.log(this.users);
           
       },
      update: function(){
        usersService = users();
        usersService.remove(this.userid).then(response => (this.msg = response.data));
        usersService.put(this.username,this.usercity).then(response => (this.msg = response.data));
        console.log(this.users);
       }

    }
})