import { Component, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { NgForm } from '@angular/forms';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  public restaurante: Restaurante = new Restaurante();

  constructor(
    private restauranteService: RestaurantesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

  }


  public salvar(): void {
    this.restauranteService.salvar(this.restaurante).subscribe(
      (restaurante) => {
        this.toastr.success('O restaurante foi salvo com sucesso!', 'Sucesso!');
      },
      (error) => {
        this.toastr.error('Ops, houve um ao salvar o restaurante', 'Erro!');
      },
      () => {
        this.form.reset();
        this.restaurante = new Restaurante();
      }
    );
    console.log(this.restaurante);
  }

}
