function User(id, username, password, email, firstName, lastName, role, phone, dateOfBirth) {

    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.role = role;
    this.dateOfBirth = dateOfBirth;

    this.setId = setId;
    this.getId = getId;

    this.setUsername = setUsername;
    this.getUsername = getUsername;

    this.setPassword = setPassword;
    this.getPassword = getPassword;

    this.setEmail = setEmail;
    this.getEmail = getEmail;

    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;

    this.setLastName = setLastName;
    this.getLastName = getLastName;

    this.setPhone = setPhone;
    this.getPhone = getPhone;

    this.setRole = setRole;
    this.getRole = getRole;

    this.setDateOfBirth = setDateOfBirth;
    this.getDateOfBirth = getDateOfBirth;

    // id
    function setId(id) {
        this.id = id;
    }
    function getId() {
        return this.id;
    }

    // username
    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }

    //password
    function setPassword(password){
        this.password = password;
    }

    function getPassword(){
        return this.password;
    }

    //email
    function setEmail(email){
        this.email = email;
    }

    function getEmail(){
        return this.email;
    }

    //first name
    function setFirstName(firstName){
        this.firstName = firstName;
    }

    function getFirstName(){
        return this.firstName;
    }

    //last name
    function setLastName(lastName){
        this.lastName = lastName;
    }

    function getLastName(){
        return this.lastName;
    }

    //phone
    function setPhone(phone){
        this.phone = phone;
    }

    function getPhone(){
        return this.phone;
    }

    //role
    function setRole(role){
        this.role = role;
    }

    function getRole(){
        return this.role;
    }

    //date of birth
    function setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }

    function getDateOfBirth(){
        return this.dateOfBirth;
    }
}
