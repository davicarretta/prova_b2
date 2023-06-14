function numeroFatorial() {
    const resultado3Div = document.getElementById('resultado3');
    resultado3Div.innerHTML = ''; 
  
    for (let i = 1; i <= 10; i++) {
      let fatorial = 1;
      for (let j = 1; j <= i; j++) {
        fatorial *= j;
      }
      resultado3Div.innerHTML += `O fatorial de ${i} é: ${fatorial}<br>`;
    }
  }

  function calcularFatorial() {
    const numero = parseInt(prompt("Digite um número:"));
  
    if (isNaN(numero)) {
      alert("Por favor, digite um número válido.");
      return;
    }
  
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
  
    const calculoDiv = document.getElementById('calculo');
    calculoDiv.innerHTML = `O fatorial de ${numero} é ${fatorial}`;
  }
  