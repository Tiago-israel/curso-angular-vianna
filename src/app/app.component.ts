import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurantes/models/restaurante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public restaurantes: Array<Restaurante> = new Array<Restaurante>();

  ngOnInit(): void {
    this.restaurantes = [
      { id: 1, nome: "Rei do Caldo", descricao: "Comida Brasileira • $", distancia: "2 KM", nota: 5 },
      { id: 2, nome: "Bom Brasileiro Padaria Artesanal", descricao: "Comida Mexicana • $", distancia: "2 KM", nota: 3 },
      { id: 3, nome: "Sodiê Doces - Juiz de Fora", descricao: "Comida Japonesa • $", distancia: "2 KM", nota: 2 },
      { id: 4, nome: "Galdino", descricao: "Comida Chinesa • $", distancia: "2 KM", nota: 3.5 },
      { id: 5, nome: "Maison Gateau Confeitaria", descricao: "Comida Brasileira • $", distancia: "2 KM", nota: 1.1 },
      { id: 6, nome: "Subway - Juiz de Fora", descricao: "Comida Brasileira • $", distancia: "2 KM", nota: 3.5 }
    ]
  }


  public obterRestaurante(restaurante:Restaurante):void{
    alert(`${restaurante.nome} avaliado com sucesso!`);
  }
}
