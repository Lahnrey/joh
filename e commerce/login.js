function login()
{
//declear variable for username and password

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

//working with local storage
window.localStorage.setItem('username','lahnrey');
window.localStorage.setItem('password','JOJ');


if(username=='lahnrey' && password=='JOJ'){

    // alert('Welcome' + username)
    window.location.href="Ph Store.html"

}
else{

    document.getElementById("invalid").
    style.display='block'
}
}
