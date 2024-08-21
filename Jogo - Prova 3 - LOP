// Prova 2 - LOP 
// Aluno: José Guilherme CS Costa, UFRN, C&T 2024.1 - turma 02

// Jogo de Tiro ao Alvo - Versão final

// Explicação: https://youtu.be/-S5HwBb39Rg
// Gameplay: https://youtu.be/ZFGxelAcZ1E

let screen = 'start'; // Tela inicial
let targets = []; // Lista de alvos
let level = 1; // Fase atual
let score = 0; // Pontuação
let timeLeft = 30; // Tempo limite para cada fase
let highScore = 0; // Recorde

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
  } else if (screen === 'credits') {
    drawCreditsScreen();
  }
  // A função draw é chamada continuamente, redesenhando a tela do jogo. Dependendo do valor de screen, ela chama a função apropriada para desenhar a tela atual
}

function drawStartScreen() {
  fill("white");
  stroke(0);
  strokeWeight(2);
  rect(175, 275, 250, 30, 20);
  
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  noStroke();
  text('Jogo de Tiro ao Alvo', width / 2, height / 2 - 50);
  textSize(24);
  text('Clique para iniciar', width / 2, height / 2 - 10);
  
  fill("gray");
  stroke(0);
  strokeWeight(2);
  rect(225, height / 2 + 20, 150, 40, 20);
  fill(0);
  noStroke();
  textSize(18);
  text('Créditos', width / 2, height / 2 + 20 + 20);
  
  textSize(20);
  text('C&T-LOP 2024.1', 300, 570);
  // Essa função desenha a tela inicial com o título do jogo, uma mensagem para iniciar o jogo e um botão de créditos
}

function drawGameScreen() {
  // Fundo para o texto
  fill("white");
  stroke(0);
  strokeWeight(1);
  rect(1, 1, 598, 30);
  
  textSize(20);
  fill("black");
  noStroke();
  text(`Fase: ${level}`, 50, 16); // Fase atual
  text(`Pontos: ${score}`, 270, 16); // Pontuação
  text(`Tempo: ${timeLeft}`, 530, 16); // Tempo restante

  // Atualizar e desenhar alvos
  for (let i = targets.length - 1; i >= 0; i--) {
    targets[i].update(); // Atualiza o alvo
    targets[i].display(); // Desenha o alvo
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
  fill("white");
  stroke(0);
  strokeWeight(2);
  rect(175, 358, 250, 40, 20);
  
  textAlign(CENTER, CENTER);
  textSize(32);
  fill("red");
  noStroke();
  text('Fim de Jogo', width / 2, height / 2 - 50);
  textSize(24);
  fill("green");
  text(`Pontos: ${score}`, width / 2, height / 2);

  // Exibe mensagem de recorde alcançado
  if (score > highScore) {
    highScore = score;
  } else {
    fill("black");
    text(`Recorde: ${highScore}`, width / 2, height / 2 + 30);
  }

  fill("black");
  text('Clique para reiniciar', width / 2, height / 2 + 80);
  // Essa função desenha a tela de fim de jogo com a pontuação final e verifica se o jogador conseguiu um novo recorde
}

function drawCreditsScreen() {
  fill("white");
  stroke(0);
  strokeWeight(2);
  rect(145, 200, 320, 230, 20); // Retângulo para a área de créditos
  
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
  noStroke();
  text('Créditos', width / 2, 220);
  textSize(20);
  text('Aluno: José Guilherme CS Costa', width / 2, 260);
  text('Turma 02 D, LoP', width / 2, 290);
  textSize(18);
  text('C&T 2024.1', width / 2, 320);
  textSize(15);
  text("Jogo referente à prova 3 de LOP", width / 2, 350);
  
  // Botão para voltar
  fill("gray");
  stroke(0);
  strokeWeight(2);
  rect(225, 370, 150, 40, 20);
  fill(0);
  noStroke();
  textSize(18);
  text('Voltar', width / 2, 370 + 20);
  // Essa função desenha a tela de créditos com informações sobre o criador do jogo e um botão de retorno
}

function mousePressed() {
  if (screen === 'start') {
    // Verifica se o clique foi na área de créditos
    if (mouseX > 225 && mouseX < 375 && mouseY > height / 2 + 20 && mouseY < height / 2 + 60) {
      screen = 'credits';
    } else {
      startGame();
    }
  } else if (screen === 'game') {
    for (let target of targets) {
      if (target.contains(mouseX, mouseY)) {
        target.hit(); // Inicia a animação de diminuir do alvo e a onda de choque
        score += 1; // Aumenta a pontuação
        break;
      }
    }
    if (targets.length === 0) {
      nextLevel(); // Vai para a próxima fase se todos os alvos forem removidos
    }
  } else if (screen === 'gameover') {
    resetGame();
  } else if (screen === 'credits') {
    // Verifica se o clique foi no botão de voltar
    if (mouseX > 225 && mouseX < 375 && mouseY > 370 && mouseY < 410) {
      screen = 'start';
    }
  }
  // Essa função é chamada sempre que o mouse é clicado. Dependendo da tela atual, ela inicia o jogo, verifica se um alvo foi clicado, reinicia o jogo ou exibe os créditos
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
    targets.push(new Target(createVector(random(50, width - 50), random(50, height - 50)), random(20, 50)));
  }
  // Essa função gera novos alvos para a fase atual. O número de alvos aumenta com o nível
}

// Classe Target refatorada para incluir ondas de choque e contorno preto
class Target {
  constructor(position, r) {
    this.position = position; // p5.Vector para a posição do alvo
    this.r = r;
    this.shrinking = false; // Indica se o alvo está encolhendo
    this.remove = false; // Indica se o alvo deve ser removido
    this.shockwaves = []; // Lista de ondas de choque
  }

  display() {
    // Desenhar ondas de choque
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      let wave = this.shockwaves[i];
      noFill();
      stroke(255, 165, 0, 255 - wave.alpha); // Cor laranja com transparência
      strokeWeight(3);
      ellipse(this.position.x, this.position.y, wave.radius * 2);
      wave.radius += 3; // Expande a onda de choque
      wave.alpha += 10; // Aumenta a transparência
      if (wave.alpha >= 255) {
        this.shockwaves.splice(i, 1); // Remove a onda quando estiver totalmente transparente
      }
    }

    // Desenhar o alvo com contorno preto
    stroke(0); // Contorno preto
    strokeWeight(1.5);
    fill("red"); // Cor do alvo
    ellipse(this.position.x, this.position.y, this.r * 2); // Desenha o alvo
  }

  contains(px, py) {
    let d = dist(px, py, this.position.x, this.position.y); // Calcula a distância entre o ponto clicado e o centro do alvo
    return d < this.r; // Verifica se o ponto clicado está dentro do alvo
  }

  hit() {
    this.shrinking = true; // Inicia a animação de encolher
    this.shockwaves.push({ radius: this.r, alpha: 0 }); // Cria uma nova onda de choque
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
}
