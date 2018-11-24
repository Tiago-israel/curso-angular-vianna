import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public restaurantes: Array<Restaurante> = new Array<Restaurante>();

  public constructor(
    private restaurantesService: RestaurantesService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.buscarRestaurantes();
  }

  private buscarRestaurantes(): void {
    this.restaurantesService.buscarTodos().subscribe(
      (restaurantes) => {
        this.restaurantes = restaurantes;
        this.restaurantes.forEach(r => {
          r.nota = 0;
        })
      }
    )
  }

  public obterRestaurante(restaurante: Restaurante): void {
    this.toastr.info(`${restaurante.nome} avaliado com sucesso!`,'Sucesso!');
  }

}
