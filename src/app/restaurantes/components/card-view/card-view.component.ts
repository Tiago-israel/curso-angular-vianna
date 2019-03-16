import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input('restaurante')
  public restaurante: Restaurante = new Restaurante();

  @Input('pontuarRestaurante') pontuarRestaurante: (restaurante: Restaurante) => void;

  @Output("restauranteEmitter")
  public restauranteEmitter: EventEmitter<Restaurante>
    = new EventEmitter<Restaurante>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public editar(): void {
    this.router.navigate([`restaurantes/${this.restaurante.id}`]);
  }

  public adicionarPonto() {
    if (this.restaurante.nota < 5) {
      this.restaurante.nota += .1;
      this.restaurante.nota = parseFloat(this.restaurante.nota.toFixed(2));
      this.pontuarRestaurante(this.restaurante);
    }
    //this.restauranteEmitter.emit(this.restaurante);
  }

}
