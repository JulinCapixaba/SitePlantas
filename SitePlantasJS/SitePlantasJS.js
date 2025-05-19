const imagens = [
  "../Imagens/Cerejeira.jpg",
  "../Imagens/Suculentas.jpg",
  "../Imagens/Flores.jpg"
];

let indiceAtual = 0;

function trocarImagem(direcao) {
  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  } else if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }

  document.getElementById("imagem-carrossel").src = imagens[indiceAtual];
  document.getElementsById("Texto-carrossel").textContent = textos [indiceAtual]
}
