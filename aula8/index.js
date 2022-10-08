const nome = 'André Luiz'
const sobrenome = 'Lourenço'
const idade = 30;
const peso = 70;
const alturaEmM = 1.78;
let imc = 84 / (alturaEmM * alturaEmM);

let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome},tem ${idade} anos, pesa ${peso}kg, tem altura de ${alturaEmM}M e seu IMC é de ${imc}
${nome} nasceu em ${anoNascimento}`);
