(function () {
    var $usernameFld, $passwordFld,
        $firstNameFld, $lastNameFld,
        $roleFld,$emailFld;
    var $searchBtn, $updateBtn,$createBtn;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();

    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");
        $emailFld = $("#emailFld");

        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tbody = $(".wbdv-tbody");


        $createBtn = $("#createBtn");
        $updateBtn = $(".wbdv-update");
        $searchBtn = $("#searchBtn");

        $createBtn.click(createUser);
        $searchBtn.click(searchUser);
        $updateBtn.click(updateUser);

        findAllUsers();

    }


    function createUser() {
        var timestamp = (new Date()).getTime();
        var user = getUser();
        user.id = timestamp;
        if(user.username){
            renderUsers(userService.createUser(user));
        }
        clearFields();
    }

    function findAllUsers() {
        userService.findAllUsers()
                   .then(renderUsers);
    }

    function findUserById(id) {
        renderUser(userService.findUserById(id));
    }

    function deleteUser(event) {
        var $button = $(event.currentTarget);
        var tr = $button.parents(".wbdv-template");
        var id = $button.attr("id");
        tr.remove();
        var users = userService.deleteUser(id);
        renderUsers(users);
    }

    function selectUser(event) {
        var $button = $(event.currentTarget);
        var id = $button.attr("id");
        findUserById(id);
    }

    function updateUser() {
        var id = $updateBtn.attr("id");
        if(id){
            var user = getUser();
            user.id = id;
            renderUsers(userService.updateUser(id,user));
        }
        clearFields();
    }

    function renderUser(user) {
        $usernameFld.val(user.username);
        $passwordFld.val(user.password);
        $emailFld.val(user.email);
        $firstNameFld.val(user.firstName);
        $lastNameFld.val(user.lastName);
        $roleFld.val(user.role);
        $updateBtn.attr("id",user.id);
    }

    function searchUser(){
        var user = getUser();
        renderUsers(userService.searchUser(user));

    }


    function renderUsers(users) {
        $tbody.empty();
        users.forEach(function(user){
            var newUser = $userRowTemplate.clone();

            newUser
                .removeClass("wbdv-hidden")
                .find(".wbdv-username")
                .html(user.username);

            if(user.password){
                newUser
                    .find(".wbdv-password")
                    .html("*******");
            }
            else if(user.password===""){
                newUser
                    .find(".wbdv-password")
                    .html("");
            }

            newUser
                .find(".wbdv-first-name")
                .html(user.firstName);

            newUser
                .find(".wbdv-last-name")
                .html(user.lastName);

            newUser
                .find(".wbdv-email")
                .html(user.phone);

            newUser
                .find(".wbdv-email")
                .html(user.email);

            newUser
                .find(".wbdv-role")
                .html(user.role);

            newUser
                .find(".wbdv-remove")
                .attr("id",user.id)
                .click(deleteUser);

            newUser
                .find(".wbdv-edit")
                .attr("id",user.id)
                .click(selectUser);

            $tbody.append(newUser);
        })
    }

    function clearFields(){
        $usernameFld.val("");
        $passwordFld.val("");
        $emailFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $roleFld.val("");
        $updateBtn.removeAttr("id");
    }

    function getUser(){
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var email = $emailFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();

        var user = new User("",username,password,email,firstName,lastName,role);
        return user;
    }


})();
