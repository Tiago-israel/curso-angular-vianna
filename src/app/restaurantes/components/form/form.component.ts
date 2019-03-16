import { Component, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { NgForm } from '@angular/forms';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

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
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const { restaurante } = this.activatedRoute.snapshot.data;
    if (restaurante) {
      this.restaurante = restaurante;
    }
  }

  public sucesso = (): void => {
    this.toastr.success('O restaurante foi salvo com sucesso!', 'Sucesso!');
  }

  public erro = (error): void => {
    this.toastr.error('Ops, houve um ao salvar o restaurante', 'Erro!');
  }

  public finalizar = (): void => {
    this.router.navigate(['restaurantes']);
  }



  public salvar(): void {
    if (this.restaurante.id) {
      this.restauranteService.editar(this.restaurante, this.restaurante.id).subscribe(
        this.sucesso,
        this.erro,
        this.finalizar
      );
    } else {
      this.restauranteService.salvar(this.restaurante).subscribe(
        this.sucesso,
        this.erro,
        this.finalizar
      );
    }
  }

}
