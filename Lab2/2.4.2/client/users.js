function users() {

    get = function() {
        return axios.get("http://localhost:3000/users");
    }
	
	put = function(username,usercity){
		return axios.put("http://localhost:3000/users",{name:username,city:usercity}) 
    }
	
    remove = function(id){
        return axios.delete("http://localhost:3000/users/"+id,{id});
    }
    
    return {
		// aici se adauga functiile pe care le apelezi folosing axios
        get: get, 
        put: put,
        remove: remove
    }
}