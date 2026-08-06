let filmes = [{
    Título_Nacional: "Garota Infernal",
    Duração: "1 hora e 45 minutos",
    Ano_de_Lançamento: "2009"
},];

console.log(`Filme: ${filmes[0].Título_Nacional}`);
console.log(`Duração: ${filmes[0].Duração}`);
console.log(`Ano de lançamento: ${filmes[0].Ano_de_Lançamento}`);

//Remover o último elemento do array utilizando:
filmes.pop();
console.table(filmes);

//Adicionar um novo elemento ao final do array utilizando:
filmes.push();
console.table(filmes);