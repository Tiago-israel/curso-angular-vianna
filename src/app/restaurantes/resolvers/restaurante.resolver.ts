import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Restaurante } from "../models/restaurante";
import { RestaurantesService } from "../services/restaurantes.service";
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class RestauranteResolver implements Resolve<Restaurante>{

    constructor(private restauranteService: RestaurantesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Restaurante> {
        const id: any = route.paramMap.get('id');
        return this.restauranteService.buscarPorId(id);
    }
}