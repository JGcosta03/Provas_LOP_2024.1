//Prova 2 - Jogo (beta)
// Explicação: https://youtu.be/5197zCebwCs

let screen = 'start'; // Tela inicial
let targets = []; // Lista de alvos
let level = 1; // Fase atual
let score = 0; // Pontuação
let timeLeft = 30; // Tempo limite para cada fase

function setup() {
  createCanvas(600, 600);
  // Cria a tela do jogo com resolução 600x600
}

function draw() {
  background(220); // Adiciona a cor cinza ao fundo
  
  if (screen === 'start') {
    drawStartScreen();
  } else if (screen === 'game') {
    drawGameScreen();
  } else if (screen === 'gameover') {
    drawGameOverScreen();
  }
  // A função draw é chamada continuamente, redesenhando a tela do jogo. Dependendo do valor de screen, ela chama a função apropriada para desenhar a tela atual
}

function drawStartScreen() {
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text('Jogo de Tiro ao Alvo', width / 2, height / 2 - 50);
  textSize(24);
  text('Clique para iniciar', width / 2, height / 2);
  textSize(20);
  text('Prova 2 - LOP', 300, 570)
  // Essa função desenha a tela inicial com o título do jogo e uma mensagem para iniciar o jogo
}

function drawGameScreen() {
  // Fundo para o texto
  fill(255);
  rect(10, 10, 200, 100);
  
  textSize(20);
  fill(0);
  text(`Fase: ${level}`, 60, 30); // Fase atual
  text(`Pontos: ${score}`, 70, 60); // Pontuação
  text(`Tempo: ${timeLeft}`, 70, 90); // Tempo restante

  // Atualizar e desenhar alvos
  for (let i = targets.length - 1; i >= 0; i--) {
    targets[i].update(); // Atualiza a animação dos alvos
    targets[i].display();
    if (targets[i].isRemoved()) {
      targets.splice(i, 1); // Remove o alvo da lista se a animação terminar
    }
  }

  // Verificar tempo
  if (frameCount % 60 === 0 && timeLeft > 0) {
    timeLeft--;
  }

  if (timeLeft <= 0) {
    screen = 'gameover';
  }
  // Essa função desenha a tela do jogo, mostrando a fase, pontuação e tempo restante. Também atualiza o tempo a cada segundo e verifica se o tempo acabou
}

function drawGameOverScreen() {
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text('Fim de Jogo', width / 2, height / 2 - 50);
  textSize(24);
  text(`Pontos: ${score}`, width / 2, height / 2);
  text('Clique para reiniciar', width / 2, height / 2 + 50);
  // Essa função desenha a tela de fim de jogo, mostrando a pontuação final e uma mensagem para reiniciar o jogo
}

function mousePressed() {
  if (screen === 'start') {
    startGame();
  } else if (screen === 'game') {
    for (let target of targets) {
      if (target.contains(mouseX, mouseY)) {
        target.hit(); // Inicia a animação de diminuir do alvo
        score += 10; // Aumenta a pontuação
        break;
      }
    }
    if (targets.length === 0) {
      nextLevel(); // Vai para a próxima fase se todos os alvos forem removidos
    }
  } else if (screen === 'gameover') {
    resetGame();
  }
  // Essa função é chamada sempre que o mouse é clicado. Dependendo da tela atual, ela inicia o jogo, verifica se um alvo foi clicado ou reinicia o jogo
}

function startGame() {
  screen = 'game';
  score = 0;
  level = 1;
  timeLeft = 30;
  generateTargets();
  // Essa função inicia o jogo, configurando a fase inicial, pontuação, tempo e gerando os alvos
}

function nextLevel() {
  level++;
  if (level > 14) {
    timeLeft = 10; // Reduz o tempo para 10 segundos após a décima quinta fase
  } else if (level > 9) {
    timeLeft = 15; // Reduz o tempo para 15 segundos após a décima fase
  } else if (level > 4) {
    timeLeft = 20; // Reduz o tempo para 20 segundos após a quinta fase
  } else {
    timeLeft = 30; // Tempo normal até a fase 5
  }
  generateTargets();
  // Essa função avança para a próxima fase, aumentando a dificuldade ao reduzir o tempo disponível após a décima e a décima quinta fase e gerando novos alvos
}

function resetGame() {
  screen = 'start';
  // Essa função reinicia o jogo, voltando para a tela inicial
}

function generateTargets() {
  targets = [];
  for (let i = 0; i < level + 2; i++) {
    targets.push(new Target(random(50, width - 50), random(50, height - 50), random(20, 50)));
  }
  // Essa função gera novos alvos para a fase atual. O número de alvos aumenta com o nível
}

class Target {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.shrinking = false; // Indica se o alvo está encolhendo
    this.remove = false; // Indica se o alvo deve ser removido
  }

  display() {
    fill(255, 0, 0); // Define a cor do alvo como vermelho
    ellipse(this.x, this.y, this.r * 2); // Desenha o alvo
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y); // Calcula a distância entre o ponto clicado e o centro do alvo
    return d < this.r; // Verifica se o ponto clicado está dentro do alvo
  }

  hit() {
    this.shrinking = true; // Inicia a animação de encolher
  }

  update() {
    if (this.shrinking && this.r > 0) {
      this.r -= 3; // Reduz o raio do alvo
      if (this.r <= 0) {
        this.remove = true; // Marca o alvo para remoção quando estiver completamente encolhido
      }
    }
  }

  isRemoved() {
    return this.remove; // Retorna se o alvo deve ser removido
  }
  // Essa classe define um alvo, com suas propriedades (posição e raio) e métodos para desenhar o alvo, verificar se um ponto está dentro do alvo e controlar a animação de encolhimento
}

