let pessoas = [
    {nome: "Danilo",
    dataDeNascimento: "1992-03-29",
    aprovado: true},
    
    {nome: "Mario",
    dataDeNascimento: "1999-05-12",
    aprovado: true},
    
    {nome: "Antonio",
    dataDeNascimento: "2005-07-12",
    aprovado: true},

    {nome: "José",
    dataDeNascimento: "2007-08-09",
    aprovado: true}
    
]

let data = new Date();
let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth() + 1).padStart(2, '0');
let ano = data.getFullYear() - 18;
let dataAtual = (ano + "-" + mes + "-" + dia);


function listarAprovadosCNH() {
    for (let i = 0; i < pessoas.length; i++) {
        if(pessoas[i].aprovado && pessoas[i].dataDeNascimento <= dataAtual){
            console.log(pessoas[i].nome)
        }
    }
    }

    listarAprovadosCNH()



// console.log(dataAtual)