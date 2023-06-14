function listarNumerosPrimos() {
    const primeNumbers = [];
    
    for (let number = 1; number <= 1000; number++) {
      let isPrime = true;
  
      if (number < 2) {
        isPrime = false;
      } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
  
      if (isPrime) {
        primeNumbers.push(number);
      }
    }
  
    const resultadoDiv = document.getElementById('resultado1');
    resultadoDiv.textContent = "Os números primos entre 1 e 1000 são:  " + primeNumbers.join(', ');
  }

function numerosPrimos() {
    const numerosString = prompt("Digite os números que você deseja saber se são primos separados por vírgula:");
    const numeros = numerosString.split(',').map(Number);
  
    let primos = [];
    for (let i = 0; i < numeros.length; i++) {
      const numero = numeros[i];
      let ehPrimo = true;
  
      if (numero <= 1) {
        ehPrimo = false;
      } else {
        for (let j = 2; j <= Math.sqrt(numero); j++) {
          if (numero % j === 0) {
            ehPrimo = false;
            break;
          }
        }
      }
  
      if (ehPrimo) {
        primos.push(numero);
      }
    }
  
    if (primos.length > 0) {
      alert("Os seguintes números são primos: " + primos.join(", "));
    } else {
      alert("Nenhum número primo encontrado.");
    }
  }
