
function logar(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let options = {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({'grant_type': 'password','username': username,'password': password}),
    };

    document.getElementById("c-load-none").style.display = "none";
    document.getElementById("c-load").style.display = "block";
    
    fetch('https://universidadeteckma.twygoead.com/oauth/token',options).then(data=>{
    if(data.ok){
        document.getElementById("login").style.display = "none";
        document.getElementById("telaInicial").style.display = "flex";

       
    }
    else{
        document.getElementById("c-load-none").style.display = "block";
        document.getElementById("c-load").style.display = "none";

        alert("Nome usuário e/ou senha incorretos");
        document.getElementById("username").value ="";
        document.getElementById("password").value = "";

        
    }
});
}
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      logar();
    }
  });