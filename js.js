const login = document.getElementById("login");
const logout = document.getElementById("logout");
const loginUser = document.getElementById("loginUser");
const textLogin = document.getElementById("textLogin");
const textLogout = document.getElementById("textLogout");

textLogin.style.visibility = "hidden";
textLogout.style.visibility = "hidden";

const show = () => {
    if (textLogin.style.visibility == "hidden") {
        textLogin.style.visibility = "visible"
    } else {
        textLogin.style.visibility = "hidden"
    }
}

const show2 = () => {
    if (textLogout.style.visibility == "hidden") {
        textLogout.style.visibility = "visible"
    } else {
        textLogout.style.visibility = "hidden"
    }

}

const iniciarSesion = () =>{
    let usuario = prompt("Ingresa tu nombre");
    localStorage.setItem("name", usuario);

    loginUser.innerHTML = usuario;
}


if (localStorage.getItem("name")) {
    loginUser.innerHTML = localStorage.getItem("name")
}


const signOff = () => {

    loginUser.innerHTML = "";
    localStorage.removeItem("name");
}

login.onclick = function () {
    iniciarSesion();
}

logout.onclick = function () {
    signOff();
}
