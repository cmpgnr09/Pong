//variaveis bolinha

let xBolinha = 200;
let yBolinha = 200;
let diametro = 30;

let posicaoHorizontal; //x
let posicaoVertical; //y

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis minharaquete

let xRaqueteJogador = 5;
let yRaqueteJogador = 15;
let larguraRaqueteJogador = 10;
let alturaRaqueteJogador = 90;

//variaveis raquete oponenete

let xRaqueteOponente = 385;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 10;
let alturaRaqueteOponente = 90;

//colisao
let colidiu = false;

let velocidadeYoponente;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostreRaqueteJogador();
  movimentaRaqueteJogador();
  verificaColisaoRaqueteJogador();
  mostraRaqueteOponente();
  movimentaRaqueteOponenete();
}

function mostraBolinha() {
  fill("rgb(126,9,126)");
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisao() {
  if (xBolinha > width || xBolinha < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeyBolinha *= -1;
  }
}

function mostreRaqueteJogador() {
  fill("rgb(28,179,172)");
  stroke("rgb(194,20,79)");
  rect(
    xRaqueteJogador,
    yRaqueteJogador,
    larguraRaqueteJogador,
    alturaRaqueteJogador
  );
}

function movimentaRaqueteJogador() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteJogador -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteJogador += 10;
  }
}

function verificaColisaoRaqueteJogador() {
  colidiu = collideRectCircle(
    xRaqueteJogador,
    yRaqueteJogador,
    larguraRaqueteJogador,
    alturaRaqueteJogador,
    xBolinha,
    yBolinha,
    diametro /2
  );
  if (colidiu == true) {
    velocidadeXbolinha *= -1;
  }
}

function mostreRaqueteOponente() {
  fill("blue");
  stroke("purple");

  rect(
    xRaqueteOponente,
    yRaqueteOponente,
    larguraRaqueteOponente,
    alturaRaqueteOponente
  );
}

function movimenteRaqueteOponente() {
  velocidadeYoponente =
    yBolinha - yRaqueteOponente - alturaRaqueteOponente / 2 - 30;

  yRaqueteOponenete += velocidadeYoponente;
}
