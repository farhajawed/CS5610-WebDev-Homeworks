function AdminUserServiceClient() {

    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.searchUser = searchUser;
    var self = this;

    var users = [];

    function createUser(user) {
        users.push(user);
        return users;
    }


    function findAllUsers() {
        return $.getJSON("../admin/users.json",function (data) {
                users = data;
                return users;
        })
    }


    function findUserById(userId) {
        for (var i = 0; i < users.length; i++) {
            if(users[i].id==userId){
                return users[i];
            }
        }
    }

    function updateUser(userId, user) {
        for (var i = 0; i < users.length; i++) {
            if(users[i].id==userId){
                users[i] = user;
                return users;
            }
        }
    }


    function deleteUser(userId) {
        for (var i = 0; i < users.length; i++) {
            if(users[i].id==userId){
                users.splice(i,1);
                break;
            }
        }
        return users;
    }


    function searchUser(user){
        var filteredUser = users;
        if(user.username){
            filteredUser = filteredUser.filter(person => person.username === user.username);
        }
        if(user.password){
            filteredUser = filteredUser.filter(person => person.password === user.password);
        }
        if(user.email){
            filteredUser = filteredUser.filter(person => person.email === user.email);
        }
        if(user.firstName){
            filteredUser = filteredUser.filter(person => person.firstName === user.firstName);
        }
        if(user.lastName){
            filteredUser = filteredUser.filter(person => person.lastName === user.lastName);
        }
        if(user.role){
            filteredUser = filteredUser.filter(person => person.role === user.role);
        }

        return filteredUser;
    }
}

