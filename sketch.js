//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro= 20;
let raio = diametro /2;



//velocidade bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5; 


//variaveis raquete

let xRaquete= 5;
let yRaquete = 150;
let comprimeitoRaquete= 10;
let alturaRaquete= 90;

let colidiu = false;

//variaveis oponente 
let xRaqueteOponente= 585;
let yRaqueteOponente= 150;
let velocidadeYOponente;


//variaveis do placar

let meusPontos=0;
let pontosDoOponente=0;

//sons do jogo

let raquetada;
let ponto;
let trilha;


function preLoad(){
  trilha = loadSound("trilha.mp3");
 ponto = loadSound("ponto.mp3");
raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(255,100,10);
  mostraBolinha();
  movimentoBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
  verificaColisaoRaquetes(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentoRaqueteOponente();
  verificaColisaoRaquetes(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
}


function mostraBolinha(){
  fill(255);
   circle (xBolinha,yBolinha,diametro);
}


function movimentoBolinha(){
 xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda(){
   
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
    
 if (yBolinha + raio> height || yBolinha - raio < 0) {
   velocidadeYBolinha *=-1;
 }
  
}

function mostraRaquete(x,y){
  let c = color(0, 4, 0);
  fill(c);
  rect(x,y,comprimeitoRaquete,alturaRaquete);
 

}

function movimentoMinhaRaquete(){
   if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
   }

   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
   }
}

function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimeitoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
   velocidadeXBolinha *= -1;
  }
}


function verificaColisaoRaquetes(x,y){
 colidiu = collideRectCircle(x, y, comprimeitoRaquete,alturaRaquete, xBolinha, yBolinha, raio);
 if (colidiu){
  velocidadeXBolinha *= -1;
 }

}

function movimentoRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
   }

   if (keyIsDown(83)){
    yRaqueteOponente += 10;
   }
}


function incluiPlacar(){
  textSize(20);
  textStyle(color(255));
  textAlign(CENTER);
   text(meusPontos, 170, 26);
   text(pontosDoOponente, 470,26);
}


function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }

  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}

