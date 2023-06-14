  function verificarQuadradoPerfeito() {
    const numero = parseInt(prompt("Digite um número:"));
  
    if (isNaN(numero)) {
      alert("Por favor, digite um número válido.");
      return;
    }
  
    const raiz = Math.sqrt(numero);
    const resultado4Div = document.getElementById('resultado4');
  
    if (Number.isInteger(raiz)) {
      resultado4Div.textContent = numero + " é um quadrado perfeito. A raiz quadrada de " + numero + " é " + raiz + ".";
    } else {
      resultado4Div.textContent = numero + " não é um quadrado perfeito.";
    }
  }