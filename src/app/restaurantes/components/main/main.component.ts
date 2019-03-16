import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/loading/loading.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public restaurantes: Array<Restaurante> = new Array<Restaurante>();

  public constructor(
    private restaurantesService: RestaurantesService,
    private toastr: ToastrService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.buscarRestaurantes();

  }

  private buscarRestaurantes(): void {
    this.loadingService.show();
    this.restaurantesService.buscarTodos().subscribe(
      restaurantes => {
        this.restaurantes = restaurantes;
        this.loadingService.hide();
      }
    )
  }

  public obterRestaurante(restaurante: Restaurante): void {
    this.toastr.info(`${restaurante.nome} avaliado com sucesso!`, 'Sucesso!');
  }

  public pontuarRestaurante = (restaurante: Restaurante): void => {
    this.restaurantesService.editar(restaurante, restaurante.id).subscribe(() => {
      this.toastr.info(`${restaurante.nome} avaliado com sucesso!`, 'Sucesso!');
    })
  }

}
