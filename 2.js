function criarSenha() {
    var senha = prompt("Digite uma senha com pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um numeral:");
  
    var umaMaiuscula = false;
    var umaMinuscula = false;
    var umNumero = false;
  
    if (senha.length >= 8) {
      for (var i = 0; i < senha.length; i++) {
        var caractere = senha.charAt(i);
  
        if (caractere >= 'A' && caractere <= 'Z') {
          umaMaiuscula = true;
        } else if (caractere >= 'a' && caractere <= 'z') {
          umaMinuscula = true;
        } else if (!isNaN(caractere)) {
          umNumero = true;
        }
      }
    }
  
    if (umaMaiuscula && umaMinuscula && umNumero) {
      alert("A senha é válida!");
    } else {
      alert("A senha não atende aos critérios exigidos.");
    }
  }