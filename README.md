# Sistema Inteligente - Prova 1

Este projeto implementa um **sistema inteligente** para a classificação de pacientes com base em parâmetros médicos. O sistema solicita ao usuário a inserção de valores referentes a diversas métricas de saúde e, com base nesses dados, classifica o paciente com um resultado binário (`0` ou `1`), indicando diferentes condições de saúde.

## Explicação em Vídeo

A explicação completa do sistema pode ser encontrada no seguinte link: [Vídeo explicativo](https://youtu.be/HscDhxUXFQA)

## Variáveis de Entrada

O sistema solicita as seguintes informações para o usuário:

- **Idade**: Idade do paciente (valor numérico).
- **Sexo**: Sexo do paciente (`1.0` para masculino, `0.0` para feminino).
- **Tipo de Dor no Peito**: Tipo de dor no peito (valor numérico).
- **Colesterol**: Colesterol sérico do paciente (valor numérico).
- **Frequência Cardíaca Máxima**: Frequência cardíaca máxima alcançada (valor numérico).
- **Angina**: Angina induzida por exercício (`1.0` para sim, `0.0` para não).
- **Depressão**: Valor numérico medido em depressão (valor numérico).
- **Inclinação do Segmento ST**: Inclinação do segmento ST do exercício de pico (valor numérico).

## Lógica do Sistema

O sistema utiliza uma série de verificações aninhadas (`if-else`) para classificar o paciente de acordo com os seguintes parâmetros:

1. **Inclinação do Segmento ST**: Verifica se a inclinação do segmento ST é menor ou igual a `1.5`.
2. **Frequência Cardíaca Máxima**: Verifica se a frequência cardíaca máxima está abaixo de certos valores críticos.
3. **Sexo**: Verifica o sexo do paciente.
4. **Angina**: Verifica se o paciente apresenta angina induzida por exercício.
5. **Tipo de Dor no Peito**: Verifica o tipo de dor no peito para mais informações.
6. **Colesterol**: Verifica o nível de colesterol do paciente.
7. **Depressão**: Verifica o valor numérico medido em depressão.

Com base nas condições mencionadas, o sistema exibe o resultado final ao usuário:

- `0`: Indica uma condição.
- `1`: Indica outra condição.

## Exemplo de Uso

Ao executar o sistema, o usuário será solicitado a inserir as informações mencionadas, e o sistema retornará o resultado da classificação com base nos parâmetros fornecidos.

```bash
Digite a idade do paciente: 
Digite o sexo do paciente: (1.0 - MASCULINO) e (0.0 - FEMININO)
Digite o tipo de dor no peito
Digite o colesterol sérico
Digite a Frequência Cardíaca Máxima alcançada
Digite a angina induzida por exercício, (1.0 - SIM) e (0.0 - NÃO)
Digite o valor numérico medido em depressão
Digite a inclinação do segmento ST do exercício de pico
