
import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/restaurante';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  public restaurante: Restaurante = new Restaurante();

  constructor() { }

  ngOnInit() {
    this.restaurante.nome = "São Bartolomeu";

  }

}
