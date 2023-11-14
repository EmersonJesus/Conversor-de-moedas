function converter() {
    var valor = document.getElementById("valor").value;
    var moeda = document.getElementById("moeda").value;
    var taxa = 0;
  
    if (moeda == "USD") {
      taxa = 4.91;
    }
    if (moeda == "EUR") {
      taxa = 5.25;
    }
    if (moeda == "ARS") {
      taxa = 0.014;
    }
    if (moeda == "BTC") {
      taxa = 179663.72;
    }
  
    var reais = valor * taxa;
  
    document.getElementById("resultado").innerHTML =
      valor + " " + moeda + " equivalem a R$ " + reais.toFixed(2);
  }
  