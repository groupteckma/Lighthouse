function btn_menu(mostrar,ocultar,botao){

    let menuMercedez = document.getElementById(ocultar);
    let menuEmbraer = document.getElementById(mostrar);
    let tela = document.getElementById("tela").style.display="none";

    for(let k=2;k<=4;k++)//comecando no menu 2 pra abrir corretamente o 1
    {
        let ocultarTudo = document.getElementsByClassName("menu"+k);
        
        for(let j = 0;j < ocultarTudo.length;j++){ocultarTudo[j].style.display="none";}
        let corBase = document.getElementsByClassName("btnMenu"+(k-1));

        for(let m = 0;m < corBase.length;m++){
            corBase[m].style.backgroundColor = "#015941";
            corBase[m].style.color = "aliceblue";
        }
    }
    
    let menuInicialB = document.getElementsByClassName("btnMenu");
    for(let j = 0;j < menuInicialB.length;j++){
        menuInicialB[j].style.color="aliceblue";
        menuInicialB[j].style.backgroundColor="#015941";
    }

    let corCerta = document.getElementById(botao);
    corCerta.style.backgroundColor = "aliceblue";
    corCerta.style.color = "black";

    menuMercedez.style.display= "none";

    if(menuEmbraer.style.display === "none"){
        menuEmbraer.style.display = "flex";
    }else{
        menuEmbraer.style.display = "none";
    }
    

}

function btn_menu1_1(mostrar,ocultar,botao){
   let classeOcultar = document.getElementsByClassName(ocultar);
   let itemMostrar = document.getElementById(mostrar);
   let tela = document.getElementById("tela").style.display="none";

   let ocultarbracos = ocultar[4];
   for(let k=ocultarbracos;k<=4;k++)
   {
        let ocultarTudo = document.getElementsByClassName("menu"+k);
        
        for(let j = 0;j < ocultarTudo.length;j++){ocultarTudo[j].style.display="none";}

        //mudando cor
        let corBase = document.getElementsByClassName("btnMenu"+(k-1));
        for(let m = 0;m < corBase.length;m++){
            corBase[m].style.backgroundColor = "#015941";
            corBase[m].style.color = "aliceblue";
        }
        
   }
   
   let corCerta = document.getElementById(botao);
   corCerta.style.backgroundColor = "aliceblue";
   corCerta.style.color = "black";


   if(itemMostrar.style.display === "none"){
        for(let i = 0;i < classeOcultar.length;i++){classeOcultar[i].style.display="none";}
        itemMostrar.style.display = "block";
        
   }else{
        for(let i = 0;i < classeOcultar.length;i++){classeOcultar[i].style.display="none";}               
   }
    
}

function abrirIframe(botao,link){
    
    let design = document.getElementById(botao);
    let olds = document.getElementsByClassName(design.classList[0]);
    ocultar_afrente(botao);
    for(i = 0; i < olds.length;i++){
        olds[i].style.backgroundColor = "#015941";
        olds[i].style.color = "aliceblue";
    }
    design.style.backgroundColor = "aliceblue";
    design.style.color = "black";
    


    let tela = document.getElementById("tela");
  
    tela.style.display = "block";
    tela.src=link;
}


//-------novas funções
function btn_mudar_logo(botao,prox){
    let btn = document.getElementById(botao);//botão escolhido
    
    nomeImagem = btn.style.backgroundImage;
    nomeImagem = nomeImagem.replace('url(','');
    nomeImagem = nomeImagem.replace(')','');//configurando o link de fundo

    if(nomeImagem.includes('alternativo')){//verificando existência de alternativo
        nomeImagem = nomeImagem.replace(' alternativo','');
    }else{
        nomeImagem = nomeImagem.replace('.png',' alternativo.png');
    }

    let n = btn.className[7];

    for(j=n;j<=3;j++){

        let btns = document.getElementsByClassName("btnMenu"+j);
        for(i=0;i<btns.length;i++)
        {
            if(btns[i].style.backgroundImage.includes("alternativo")){
                btns[i].style.backgroundImage = btns[i].style.backgroundImage.replace(" alternativo","");
                
            }
            btns[i].style.backgroundColor = "#015941";
            
        }

    }


    
    btn.style.backgroundImage = "url(" + nomeImagem + ")"; //atribuindo o novo link conforme padrão de arquivos
    btn.style.backgroundColor = "aliceblue";
    
    if(document.getElementById(prox).style.display === "none"){
        btn.style.backgroundImage = "url(" + nomeImagem.replace(' alternativo','') + ")";
        btn.style.backgroundColor = "#015941";
    }else{
        if(!btn.style.backgroundImage.includes('alternativo')){
            btn.style.backgroundImage = "url(" + nomeImagem.replace('.png',' alternativo.png') + ")";
            btn.style.backgroundColor = "aliceblue";

        }
    }
    
}

function ocultar_afrente(botao){
    let btn = document.getElementById(botao);
    let classe = parseInt(btn.classList[0][7])+1;

    for(let k=classe;k<=4;k++)
   {
        let ocultarTudo = document.getElementsByClassName("menu"+k);
        
        for(let j = 0;j < ocultarTudo.length;j++){ocultarTudo[j].style.display="none";}

        //mudando cor
        let corBase = document.getElementsByClassName("btnMenu"+(k-1));
        for(let m = 0;m < corBase.length;m++){
            corBase[m].style.backgroundColor = "#015941";
            corBase[m].style.color = "aliceblue";
        }
        
   }

}