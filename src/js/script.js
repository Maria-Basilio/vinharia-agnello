// Vinheria Argello - Sistema básico de vinhos 

// 1 - Coleta das informações com prompt()
let nome = prompt("Digite o nome do vinho: ");
let tipo = prompt("Digite o tipo de vinho (Tinto, Branco ou Rosé): ");
let safra = prompt("Digite a safra do vinho (ano): ")
let estoque = prompt("Digite a quantidade em estoque: ");

// 2 - Aviso de que o cadastro foi concluído
alert("Cadastro realizado! Veja os detalhes no console.");

// 3 - Aviso obrigatório antes de mostrar algo no console 
alert("A seguir, veja os detalhes do vinho no console.");

// 4 - Exibição organizada no console
console.log("========================================");
console.log("  VINHERIA AGNELLO - DETALHES DO VINHO  ");
console.log("========================================");
console.log("Nome: " + nome);
console.log("Tipo: " + tipo);
console.log("Safra: " + safra);
console.log("Estoque: " + estoque + " unidades");
console.log("========================================");

