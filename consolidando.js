
function logar(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let options = {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({'grant_type': 'password','username': username,'password': password}),
    };

    fetch('https://universidadeteckma.twygoead.com/oauth/token',options).then(data=>{
    if(data.ok){
        document.getElementById("login").style.display = "none";
        document.getElementById("telaInicial").style.display = "flex";

       
    }
    else{
        alert("Nome usuário e/ou senha incorretos");
        document.getElementById("username").value ="";
        document.getElementById("password").value = "";
    }
});
}