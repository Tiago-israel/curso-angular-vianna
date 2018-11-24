import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurantes/models/restaurante';
import { RestaurantesService } from './restaurantes/services/restaurantes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }

}
