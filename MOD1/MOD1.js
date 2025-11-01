//Projeto de conclusão de modulo I - Conclave

const entrada = require("prompt-sync")({ sigint: false });

//Declaração de variáveis
let totalDeVotos = 5;
let cardeais = []; //array para armazenar os nomes
let votos = []; //array para armazenar votos
let escolha;
let vencedor = 0; //variável para guardar o vencedore

//Recebe candidatos
console.log("---- Incrição dos Cardeais ---");
for (let i = 0; i < totalDeVotos; i++) {
  let nomeCardeal = entrada(`Digite o nome do ${i + 1}° Cardeal: `);
  cardeais.push({ id: i + 1, nome: nomeCardeal }); //guarda cardeais no array com ID e nome (cardeal.nome / cardeal.id. EX cardeal[0].id=1 / cardea.[0].nome='João')
  votos.push(0)  //guarda votos no array
}

do{
  //Zera os votos antes de cada nova votação
  for(let i = 0; i < votos.length; i++){
    votos[i]=0; //Defini o valor de i como 0 no inicio da votação (valor muda ao ser acumulado no i++)
  }

  console.log("\n--- Inicio da votação ---");
  console.log(`Os cardeais que podem ser votados são: `);

  //Percorrer o array mostrando os 5 cardeais cadastrado(menu)
  for (let i = 0; i < cardeais.length; i++) { 
    console.log(`ID: ${cardeais[i].id} - Nome: ${cardeais[i].nome}`);
  }

  //Recebe os votos
  for (let i = 0; i < totalDeVotos; i++) {
    escolha = entrada(`Digite o número do seu voto: `);
    escolha = Number(escolha) //Transforma de string para número
    votos[escolha -1] = votos[escolha-1]+1; //Acessa o item correto no array "votos" e soma 1 ao número de votos daquele cardeal
  }

  //Verifica e algum cardedal recebeu 60% ou mais dos votos
  for(let i =0; i < votos.length; i++){
    if(votos[i] >= totalDeVotos*0.6){
     console.log("\nO vencedor foi " + cardeais[i].nome + " com " + votos[i] + " votos!");
     vencedor = 1; //Defini que houve um vencedor para encerrar o laço
    }
  }
    
  //Reinicia a votação se ningúem alcançou 60% ou mais votos
  if(vencedor === 0){
    console.log("Quantidade de votos não foi atingida. A votação será reiniciada!");
  }
}while (vencedor === 0) 