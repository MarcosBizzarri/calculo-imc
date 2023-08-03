function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function main() {
    alert("Bem-vindo ao calculador de IMC!");
    
    var peso = parseFloat(prompt("Digite o seu peso em kg:"));
    var altura = parseFloat(prompt("Digite a sua altura em metros:"));
    
    var imc = calcularIMC(peso, altura);
    var interpretacao = interpretarIMC(imc);
    
    alert("Seu IMC é " + imc.toFixed(2) + ", o que indica: " + interpretacao + ".");
}

main();
