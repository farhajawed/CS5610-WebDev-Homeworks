var herokuUrl="https://lms-farha-jawed-fall18-server.herokuapp.com/";

export default class UserService {
    
    static registerUser = user =>{
        var url = herokuUrl+"api/register";
        console.log(url, user);
        return fetch(url,{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
             'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
    }

    static login = user =>{
        var url = herokuUrl+"api/login";
        return fetch(url,{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
             'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
    }

    
    static logout = () =>{
        var url = herokuUrl+"api/logout";
        return fetch(url,{
            method: 'POST',
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }

    static updateUser = (user,userId) =>{
        var url = herokuUrl+"api/user/"+userId;
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
             'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
    }
    
    static findUserInSession =() => {
        var url = herokuUrl+"api/profile";
        return fetch(url,{
            credentials: 'include'
        }).then(response =>response.json())
    }

    static findUserById = (id) =>{
        var url = herokuUrl+"api/user/"+id;
        return fetch(url)
            .then(response =>response.json())
    }


    static findAllUsers = () => {
        var url = herokuUrl+"api/user";
        return fetch(url,{
            credentials: 'include'
        })
          .then(response =>response.json())
}

    
}