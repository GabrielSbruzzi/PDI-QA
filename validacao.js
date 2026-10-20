function validarNota(nota) {
  return nota >= 0 && nota <= 10;
}

console.log(validarNota(8));  // true
console.log(validarNota(12)); // false
console.log(validarNota(-1)); // false
