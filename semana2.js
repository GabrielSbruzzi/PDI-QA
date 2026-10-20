
console.log("===== EXERCICIO 1: CALCULO DE COMPRA =====");

const produto = "Teclado";
const preco = 120;
const quantidade = 2;
const total = preco * quantidade;

console.log("Produto:", produto);
console.log("Preco unitario: R$", preco);
console.log("Quantidade:", quantidade);
console.log("Total: R$", total);


console.log("\n===== EXERCICIO 2: SITUACAO DO ALUNO =====");

function verificarNota(nota) {
  if (nota >= 7) {
    return "Aprovado";
  } else if (nota >= 5) {
    return "Recuperacao";
  } else {
    return "Reprovado";
  }
}

console.log("Nota 8:", verificarNota(8));
console.log("Nota 6:", verificarNota(6));
console.log("Nota 3:", verificarNota(3));


console.log("\n===== EXERCICIO 3: TESTES COM REPETICAO =====");

const casosDeTeste = [
  { nome: "Login valido", esperado: true },
  { nome: "Senha incorreta", esperado: false },
  { nome: "Usuario inexistente", esperado: false }
];

for (const caso of casosDeTeste) {
  console.log("Executando:", caso.nome);
  console.log("Resultado esperado:", caso.esperado);
}
