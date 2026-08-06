let filmes = [
    {
        Título_Nacional: 'Garota Infernal',
        Duração: '1 hora e 45 minutos',
        Ano_de_Lançamento: '2009',
    },
    {
        Título_Nacional: 'Homem-aranha',
        Duração: '2 horas e 25 minutos',
        Ano_de_Lançamento: '2026',
    },
];

console.log(`Filme: ${filmes[0].Título_Nacional}`);
console.log(`Duração: ${filmes[0].Duração}`);
console.log(`Ano de lançamento: ${filmes[0].Ano_de_Lançamento}`);

//Removendo o primeiro elemento
filmes.shift(filmes[0].Título_Nacional);

//Exibir o resultado
console.table(filmes);

//Adicionar um elemento novo no ínicio do array
filmes.unshift({
    Título_Nacional: 'iGarota Infernal',
    Duração: '1 hora e 45 minutos',
    Ano_de_Lançamento: '2009',
});

console.table(filmes);

//Localizar um elemento existente no array
let filmeEncontrado = filmes.find((filme) => filme.Título_Nacional == 'Homem-aranha');
console.log('==================');
console.log('Titulo encontrado');
console.table(filmeEncontrado);

//Ordenar o array em ordem alfabética
let film = ['Branca de neve', 'A pequena sereia'];
film.sort();
console.log(film);
