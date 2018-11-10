import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Restaurante } from '../../models/restaurante';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input('restaurante')
  public restaurante: Restaurante = new Restaurante();

  @Output("restauranteEmitter")
  public restauranteEmitter: EventEmitter<Restaurante>
    = new EventEmitter<Restaurante>();

  constructor() { }

  ngOnInit() {
  }

  public adicionarPonto() {
    if (this.restaurante.nota < 5) {
      this.restaurante.nota += .1;
      this.restaurante.nota = parseFloat(this.restaurante.nota.toFixed(2));
    }
    this.restauranteEmitter.emit(this.restaurante);
  }

}
