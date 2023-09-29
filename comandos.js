function btn_menu(mostrar,ocultar,ocultar2,botao){

    let menuMercedez = document.getElementById(ocultar);
    let menuOlan = document.getElementById(ocultar2);
    let menuEmbraer = document.getElementById(mostrar);
    let tela = document.getElementById("tela").style.display="none";
    let imagem = document.getElementById('imgsDinamicas').style.display="none";

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
    menuOlan.style.display= "none";

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
   let imagem = document.getElementById('imgsDinamicas').style.display="none";


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

/*iframes da tela inicial

-> pq dois iframes?
r: para evitar telas de carregamento

->pq não varios iframes int?
r: além de deixar mais pesado, incluiria ter q adicionar um iframe para cada nova tela


*/
let temporizador
let index = 2
function intercalarIframes(){
    temporizador = setInterval(function(){tela_incial_iframes()},15000);
}


function tela_incial_iframes()
{  
    
   
   lista = ['https://app.powerbi.com/view?r=eyJrIjoiYzNmZTU5MWEtZDEzNi00ODlmLTkxNjQtOTM0ZDI3M2VmMzM1IiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiMTMyMzg0NDUtOGZlMC00NmMzLTgzYjMtZmRiOTZjZGJiNDc4IiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiMTk0ODM0MzEtZWMxNy00NmNiLWFjNjYtZWY1YTZlYzQ2YzY5IiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiYWRjYjg5NzUtMWY3Ny00NWE5LThiMTgtZmJkNDYzMDZlMDFiIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiNDE0ZWY2YzUtNGE1MC00MmMyLWIyMWEtNTYxZmEwZTkwYTFkIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiZmYxMjg2ZTYtYzEzNi00NjM3LWJmMzktZmMyMThlODVlNzQ4IiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiZjgyNGMxMGYtZWIyMi00ZDAzLWE2ZmQtNDM1YzNlOTBkYjFiIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiMzk3NGJkNjYtZmQ4NC00MjJkLWE1YjEtZjNmYjE5ZDAxMmEwIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiMmNkZTVmOGItYzhlNS00ZWViLWI1OGItYWZiOGNjM2RiNTlkIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiMWI2MWNmMDQtMjAxYy00YmJkLTg0YjgtN2ZkMmE4ZWU5NGFiIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiOThjZDZlNTUtM2Q4NS00ZmEyLTgxYjktYzdjN2NhMjU3M2VlIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiMjJhM2Q1OGItZjMxMy00MGI0LThlMWYtNjViMmM3ODgwNDc4IiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiZGVmN2JjMmYtMTFhZi00ZmUxLWFkOWQtMzBlYWM4ZTg4OWFmIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiZTdmMGJiZWYtNWRkOC00MDE5LTlmYzEtMzQxYTUwYTZkNmZlIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiNWRlMDkwYzQtM2JjNi00YWJiLWE4YjgtMTk3MDY0N2NhZjdmIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiNmQ0MGQxMmYtMDMzZC00MzYxLWEyZTgtNDNkYjUzMGQxZDgxIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiMGFlOWMyY2YtMTlhZi00MjM3LWI2ZWMtYjkwZDVmZjhlYjQ1IiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiOTAzMDk5OGYtZTU1Ny00ZjA5LTkxMmItOWFjMTBhNzgwNGRlIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9',
'https://app.powerbi.com/view?r=eyJrIjoiY2FiYTYzNmEtMjk4My00YjRhLTlkYWYtM2QxZTgxNDJmMTBlIiwidCI6ImJkZTZkZmRjLTVhNGEtNDA5OS04YjkyLWFlZDViMDNmYWY0MiJ9&pageName=ReportSectiona179b24c38ea714d200c']

   
        slide1 = document.getElementById('slide1');
        slide2 = document.getElementById('slide2');
        if (index === lista.length){index = 0;}
        if(slide1.style.display === "none"){
            slide1.style.display = "block";
            slide2.style.display = "none";
            slide2.src = lista[index];
    
        }else{
            slide1.style.display = "none";
            slide2.style.display = "block";
            slide1.src = lista[index];
        }

    
    
    index ++;

}
document.onkeydown = function(e) {

    if(e.key === 'Escape') {
        document.getElementById('slide3').style.display = "none";
    }
  
  }

function abrirTela(empresa){
    
    document.getElementById("telaInicial").style.display = "none";
    document.getElementById(empresa).style.display = "flex";
    temporizador = clearInterval(temporizador);


    btn_menu('EMBRAER','MERCEDEZ','OLAM','btnEmb');
    btn_mudar_logo('btnEmb','EMBRAER');
    
    
        
}
function voltar_ao_menu_incial(empresa){

    document.getElementById(empresa).style.display = "none";
    document.getElementById("telaInicial").style.display = "flex";

    temporizador = setInterval(function(){tela_incial_iframes()},15000);

    
    if(document.getElementById("EMBRAER").style.display === "none")
    {
        btn_menu('EMBRAER','MERCEDEZ','OLAM','btnEmb');
        btn_mudar_logo('btnEmb','EMBRAER');
        
        
        
    }else{
        btn_menu('EMBRAER','MERCEDEZ','OLAM','btnEmb');
        btn_mudar_logo('btnEmb','EMBRAER');
        btn_menu('EMBRAER','MERCEDEZ','OLAM','btnEmb');
        btn_mudar_logo('btnEmb','EMBRAER');
    }
    //window.location.reload(true) //temporario

    
}
function abrir_imagem(botao,qtd,link,link2){
    let imgs = document.getElementById('imgsDinamicas')
    imgs.style.display = "block";
    
    let imagem1 = document.getElementById('imagemDinamica1');
    let imagem2 = document.getElementById('imagemDinamica2');

    let imagens = document.getElementsByClassName('imagemDinamica');

    imagem1.style.display = "none";
    imagem2.style.display = "none";

    if(qtd === 1){
        
        imgs.style.marginLeft = "50%";
        imgs.style.marginTop =  "20%";
        imgs.style.maxWidth = "45%";
        imgs.style.height = "60%";
        
        imagem1.src=link;
        imagem1.style.display = "block"; 
        imagem1.style.marginLeft = "0%";
        imagem1.style.margintTop = "0%";
        imagem1.style.maxWidth = "100%";
        imagem1.style.height = "90%";

        
    }else{
        imgs.style.marginLeft = "50%";
        imgs.style.marginTop =  "10%";
        imgs.style.maxWidth = "55%";
        imgs.style.height = "85%";
        
        imagem1.src=link;
        imagem2.src=link2;
        
        imagem1.style.display = "block"; 
        imagem1.style.marginLeft = "0%";
        imagem1.style.margintTop = "0%";
        imagem1.style.maxWidth = "100%";
        imagem1.style.height = "50%";

        imagem2.style.display = "block"; 
        imagem2.style.marginLeft = "0%";
        imagem2.style.margintTop = "0%";
        imagem2.style.maxWidth = "100%";
        imagem2.style.height = "50%";
       
        
    }
    let design = document.getElementById(botao);
    let olds = document.getElementsByClassName(design.classList[0]);
    ocultar_afrente(botao);
    for(i = 0; i < olds.length;i++){
        olds[i].style.backgroundColor = "#015941";
        olds[i].style.color = "aliceblue";
    }
    design.style.backgroundColor = "aliceblue";
    design.style.color = "black";
    
}


function tela_cheia(item_){
    let elemento = document.getElementById(item_);
    if (elemento.requestFullScreen) {
        elemento.requestFullScreen();
      } else if (elemento.webkitRequestFullScreen) {
        elemento.webkitRequestFullScreen();
      } else if (elemento.mozRequestFullScreen) {
        elemento.mozRequestFullScreen();
      } else {
        console.log("O navegador não suporta a tela cheia");
      }
      
}
function tela_cheia_slide(){
    document.getElementById('MenuBotoesIniciais').style.display="none";
    document.getElementById('sumiu').style.display = "none";
    let tela = document.getElementById('telaInicial');
    slide1 = document.getElementById('slide1');
    slide2 = document.getElementById('slide2');
    

    slide1.style.height = "100%";
    slide2.style.height = "100%";
    slide1.style.width = "100%";
    slide2.style.width = "100%";
    slide1.style.margin = "0%";
    slide2.style.margin = "0%";
    
    tela.style.width = "100%";
    tela.style.height = "100%";
    tela.style.margin = "0%";
    

    
}
document.onkeydown = function(e) {

    if(e.key === 'Escape') {
        document.getElementById('MenuBotoesIniciais').style.display="block";
        let tela = document.getElementById('telaInicial');
        slide1 = document.getElementById('slide1');
        slide2 = document.getElementById('slide2');
        document.getElementById('sumiu').style.display = "flex";

        slide1.style.height = "65%";
        slide2.style.height = "65%";
        slide1.style.width = "65%";
        slide2.style.width = "65%";
        slide1.style.marginLeft = "5%";
        slide2.style.marginLeft = "5%";
    
    tela.style.marginTop = "12%";
    }
  
  }
