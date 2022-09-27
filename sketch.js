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

//variaveis raquete oponente 
let xRaqueteOponente= 585;
let yRaqueteOponente= 150;
let velocidadeYOponente;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255,100,10);
  mostraBolinha();
  movimentoBolinha();
  colisaoBorda();
 // mostraRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
  colisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  mostraRaquete2 ();
  movimentoRaqueteOponente();
  colisaoRaqueteOponenteBibliotece();
  
}


function mostraBolinha(){
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

function mostraRaquete(){
  let c = color(0, 4, 0);
  rect(x,y,comprimeitoRaquete,alturaRaquete);
  fill(c);

}

function mostraRaquete2(){
  let c = color(0, 4, 0);
  rect(xRaqueteOponente,yRaqueteOponente,comprimeitoRaquete,alturaRaquete);
  fill(c);

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


function colisaoRaqueteBiblioteca(x,y){
 colidiu = collideRectCircle(x, y, comprimeitoRaquete,alturaRaquete, xBolinha, yBolinha, raio);
 if (colidiu){
  velocidadeXBolinha *= -1;
 }

}

function movimentoRaqueteOponente(){
velocidadeYOponente = yBolinha - yRaqueteOponente - comprimeitoRaquete /2 - 30;
yRaqueteOponente += velocidadeYOponente
}

