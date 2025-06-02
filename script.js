const perguntas = [
  {
    pergunta: "1. Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
    correta: 1,
  },
  {
    pergunta: "2. Qual é o maior planeta do sistema solar?",
    opcoes: ["Marte", "Terra", "Júpiter", "Saturno"],
    correta: 2,
  },
  {
    pergunta: "3. Quem escreveu 'Dom Casmurro'?",
    opcoes: [
      "Machado de Assis",
      "José de Alencar",
      "Jorge Amado",
      "Clarice Lispector",
    ],
    correta: 0,
  },
  {
    pergunta: "4. Em que continente fica o Egito?",
    opcoes: ["Europa", "África", "Ásia", "América"],
    correta: 1,
  },
  {
    pergunta: "5. Qual é a fórmula da água?",
    opcoes: ["H2O", "CO2", "O2", "CH4"],
    correta: 0,
  },
  {
    pergunta: "6. Quantos segundos há em 1 minuto?",
    opcoes: ["60", "100", "30", "90"],
    correta: 0,
  },
  {
    pergunta: "7. Quem pintou a Mona Lisa?",
    opcoes: ["Van Gogh", "Michelangelo", "Leonardo da Vinci", "Picasso"],
    correta: 2,
  },
  {
    pergunta: "8. Qual é o menor número primo?",
    opcoes: ["0", "1", "2", "3"],
    correta: 2,
  },
  {
    pergunta: "9. Quantos estados tem o Brasil?",
    opcoes: ["26", "27", "25", "28"],
    correta: 1,
  },
  {
    pergunta: "10. Em que ano o homem pisou na Lua pela primeira vez?",
    opcoes: ["1965", "1969", "1972", "1960"],
    correta: 1,
  },
];

const quizContainer = document.getElementById("quiz-container");

perguntas.forEach((q, i) => {
  const div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = `<p>${q.pergunta}</p>`;

  const opcoesDiv = document.createElement("div");
  opcoesDiv.classList.add("options");

  q.opcoes.forEach((opcao, j) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="pergunta${i}" value="${j}"> ${opcao}
    `;
    opcoesDiv.appendChild(label);
  });

  div.appendChild(opcoesDiv);
  quizContainer.appendChild(div);
});

document.getElementById("submit").addEventListener("click", () => {
  let pontos = 0;

  perguntas.forEach((q, i) => {
    const selected = document.querySelector(
      `input[name="pergunta${i}"]:checked`
    );
    if (selected && parseInt(selected.value) === q.correta) {
      pontos++;
    }
  });

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎯 Você acertou ${pontos} de ${perguntas.length} perguntas.`;

  if (pontos === 10) {
    resultado.innerHTML += "<br>🏆 Parabéns! Você gabaritou!";
  } else if (pontos >= 7) {
    resultado.innerHTML += "<br>👏 Muito bem!";
  } else if (pontos >= 4) {
    resultado.innerHTML += "<br>🙂 Você pode melhorar.";
  } else {
    resultado.innerHTML += "<br>😢 Tente novamente.";
  }
});
