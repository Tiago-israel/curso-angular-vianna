import { Component, OnInit } from '@angular/core';
import { Cachorro } from './models/cachorro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public latido: string;
  public cachorro: Cachorro = new Cachorro();
  public nome:string;
  public grupo;
  public somaIdades = 0;
  public pessoa = { nome: "tiago", idade: 22 };
  public pessoas = [{ nome: "tiago", idade: 22 }, { nome: "ana", idade: 22 }];
  public nomesPersonagens = [];
  public personagens = [
    { nome: "Anakin Skywalker", sexo: "masculino", primeiraAparicao: "Episódio I", idade: 20 },
    { nome: "Obi-Wan Kenobi", sexo: "masculino", primeiraAparicao: "Episódio IV", idade: 20 },
    { nome: "Luke Skywalker", sexo: "masculino", primeiraAparicao: "Episódio IV", idade: 20 },
    { nome: "Leia Organa", sexo: "feminino", primeiraAparicao: "Episódio IV", idade: 20 },
    { nome: "Yoda", sexo: "masculino", primeiraAparicao: "Episódio V", idade: 20 },
    { nome: "Han Solo", sexo: "masculino", primeiraAparicao: "Episódio IV", idade: 20 },
    { nome: "Chewbacca", sexo: "masculino", primeiraAparicao: "Episódio IV", idade: 20 },
    { nome: "Boba Fett", sexo: "masculino", primeiraAparicao: "Episódio V", idade: 20 },
  ];

  title = 'aula01';

  public mapearPorNome(): void {
    this.nomesPersonagens = this.personagens.map(personagem => personagem.nome);
    //  this.personagens.forEach(personagem => {
    //    nomes.push(personagem.nome);
    //  })

  }

  public filtrarPersonagens(): void {
     this.nomesPersonagens =
       this.personagens
         .filter(personagem => personagem.nome === this.nome)
        .map(personagem => personagem.nome);


  }

  public reduzir() {
    this.somaIdades =
      this.personagens
        .map(p => p.idade)
        .reduce((agrupador, atual) => {
          return agrupador + atual;
        }, 0)
  }

  public agruparPorSexo(){
    this.grupo = {masculino:[],feminino:[]}
    this.personagens.reduce((agrupador,atual)=>{
      if(atual.sexo === 'masculino'){
        this.grupo.masculino.push(atual)
      }else{
        this.grupo.feminino.push(atual);
      }
    }, this.grupo);
  }

  ngOnInit(): void {
    //this.cachorro.nome = 'toto';
    //this.cachorro.peso = 20.5;
    //this.cachorro.dataNascimento = new Date();
    //this.latido = this.cachorro.latir('auaua');
    // console.log(this.cachorro.pular(200));
    // this.cachorro.andar();
    // this.cachorro.raca = 'vira lata';

    //this.percorrerVetor();

    //this.mapearPorNome();
    //this.filtrarPersonagens();
    //this.reduzir();
    debugger
    this.agruparPorSexo();
  }

  public percorrer(pessoa) {
    console.log(pessoa);
  }

  public percorrerVetor(): void {
    //  for(let i = 0; i < this.pessoas.length;i++){
    //    console.log(this.pessoas[i]);
    // }

    // this.pessoas.forEach((pessoa)=>{
    //   console.log(pessoa);
    // });

    //  this.pessoas.forEach(function (pessoa) {
    //    console.log(pessoa);
    //  });

    // this.pessoas.forEach(this.percorrer);

  }



}
