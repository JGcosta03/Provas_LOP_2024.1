/*
Prova 1 - Sistema inteligente
Minha explicação: https://youtu.be/HscDhxUXFQA
*/

var Idade = parseFloat(prompt("Digite a idade do paciente: "));
var Sexo = parseFloat(prompt("Digite o sexo do paciente: (1.0 - MASCULINO) e (0.0 - FEMININO)"));
var TipoDorPeito = parseFloat(prompt("Digite o tipo de dor no peito"));
var Colesterol = parseFloat(prompt("Digite o colesterol sérico"));
var FreqM = parseFloat(prompt("Digite a Frequência Cardíaca Máxima alcançada"));
var Angina = parseFloat(prompt("Digite a angina induzina por exercício, (1.0 - SIM) e (0.0 - NÃO)"));
var Depressao = parseFloat(prompt("Digite o valor numérico medido em depressão"));
var Inclinacao = parseFloat(prompt("Digite a inclinação do segmento ST do exercício de pico"));

// verifica a inclinação do segmento ST do exercício de pico:
if (Inclinacao <= 1.5) {
  // verifica a frequência máxima alcançada:
  if (FreqM <= 0.538) {
    // verifica o sexo do paciente:
    if (sexo <= 0.5) {
      // verifica a angina induzida por exercício:
      if (Angina <= 0.5) {
        alert("0");
      } else {
        alert("1");
      }

      // este "else" verifica caso contrário if (sexo <= 0.5 )
    } else {
      // verifica o tipo de dor no peito:
      if (TipoDorPeito <= 0.5) {
        alert("1");
      } else {
        alert("1");
      }
    }

    // este "else" verifica caso contrário if (FreqM <= 0.538)
  } else {
    // se TipoDorPeito <= 0.5
    if (TipoDorPeito <= 0.5) {
      // verifica a frequência cardíaca máxima:
      if (FreqM <= 0.617) {
        alert("0");
      } else {
        alert("1");
      }

      // este "else" verifica se não if (TipoDorPeito <= 0.5) então:
    } else {
      // verifica a frequência cardíaca máxima:
      if (FreqM <= 0.695) {
        alert("0");
      } else {
        alert("0");
      }
    }
  }

  // este "else" verifica o caso contrário do primeiro if
} else {
  // verifica o tipo de dor no peito:
  if (TipoDorPeito <= 0.5) {
    //verifica o colesterol sérico:
    if (Colesterol <= -1.43) {
      // verifica a idade do paciente:
      if (Idade <= 0.582) {
        alert("1");
      } else {
        alert("1");
      }

      // este "else" verifica o "se não" do if (Colesterol <= -1.43)
    } else {
      if (Angina <= 0.5) {
        alert("0");
      } else {
        alert("1");
      }
    }

    // este "else" verifica se o TipoDorPeito não for <= 0.5, então:
  } else {
    // verifica o valor numérico em depressão:
    if (Depressao <= 0.545) {
      if (Idade <= 0.317) {
        alert("0");
      } else {
        alert("0");
      }
      // se o valor numérico em depressão não for <= 0.545, então:
    } else {
      alert("1");
    }
  }
}
