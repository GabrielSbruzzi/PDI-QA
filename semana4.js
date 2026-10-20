console.log("===== VALIDACAO DE CADASTRO =====");

function validarCadastro(nome, email, idade) {
  const erros = [];

  // Validar nome
  if (typeof nome !== "string" || nome.trim().length < 2) {
    erros.push("O nome deve ter pelo menos 2 caracteres.");
  }

  // Validar email
  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    !email.includes(".") ||
    email.startsWith("@") ||
    email.endsWith("@") ||
    email.includes(" ") ||
    email.indexOf("@") !== email.lastIndexOf("@")
  ) {
    erros.push("O email informado e invalido.");
  }

  // Validar idade
  if (!Number.isInteger(idade) || idade < 18) {
    erros.push("A idade deve ser um numero inteiro igual ou superior a 18.");
  }

  // Retornar resultado
  return {
    valido: erros.length === 0,
    erros: erros
  };
}

// Casos de teste
const casos = [
  {
    nome: "Gabriel",
    email: "gabriel@email.com",
    idade: 25
  },
  {
    nome: "A",
    email: "gabriel@email.com",
    idade: 25
  },
  {
    nome: "Gabriel",
    email: "email-invalido",
    idade: 25
  },
  {
    nome: "Gabriel",
    email: "gabriel@email.com",
    idade: 16
  }
];

// Executar os testes
for (const caso of casos) {
  const resultado = validarCadastro(
    caso.nome,
    caso.email,
    caso.idade
  );

  console.log("\nDados do cadastro:", caso);

  if (resultado.valido) {
    console.log("Status: Cadastro valido!");
  } else {
    console.log("Status: Cadastro invalido.");

    for (const erro of resultado.erros) {
      console.log("- " + erro);
    }
  }
}