const name = "Thiago";

// Não podemos alterar o valor
// name = "Thiago";

const user = {
  name: "Thiago"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Outro nome";

// Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//  name: "Thiago"
//};

const persons = ["Thiago", "Pedro", "Jennifer"];

// Podemos adicionar novos itens
persons.push("João");

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = "James";

console.log("\nArray após as alterações: ", persons);
