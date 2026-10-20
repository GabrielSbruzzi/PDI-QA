
console.log("=== EXERCÍCIO 1: DESCONTO ===");

function verificarDesconto(membro, valorCompra) {
  if (membro || valorCompra >= 200) {
    return "Desconto de 10% aplicado";
  }

  return "Sem desconto";
}

console.log(verificarDesconto(true, 100));
console.log(verificarDesconto(false, 250));
console.log(verificarDesconto(false, 100));

console.log("\n=== EXERCÍCIO 2: ACESSO ===");

function verificarAcesso(usuarioAtivo, senhaCorreta) {
  if (usuarioAtivo && senhaCorreta) {
    return "Acesso permitido";
  }

  return "Acesso negado";
}

console.log(verificarAcesso(true, true));
console.log(verificarAcesso(true, false));
console.log(verificarAcesso(false, true));
console.log(verificarAcesso(false, false));

console.log("\n=== EXERCÍCIO 3: MAIORIDADE ===");

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Cadastro permitido";
  }

  return "Cadastro não permitido";
}

console.log(verificarIdade(25));
console.log(verificarIdade(18));
console.log(verificarIdade(17));

function verificarAprovacao(nota, frequencia) {
  if (nota >= 7 && frequencia >= 75) {
    return "Aprovado";
  }

  return "Reprovado";
}

console.log(verificarAprovacao(8, 90));
console.log(verificarAprovacao(6, 90));
console.log(verificarAprovacao(8, 70));

console.log("\n=== EXERCÍCIO 5: VALIDAÇÃO DE FORMULÁRIO ===");

function validarFormulario(nome, email) {
  if (nome.trim().length >= 2 && email.includes("@")) {
    return "Formulário válido";
  }

  return "Formulário inválido";
}

console.log(validarFormulario("Ana", "ana@email.com"));
console.log(validarFormulario("A", "ana@email.com"));
console.log(validarFormulario("Ana", "anaemail.com"));

