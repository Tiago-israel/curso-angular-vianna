import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { FormComponent } from "./restaurantes/components/form/form.component";
import { MainComponent } from "./restaurantes/components/main/main.component";
import { RestauranteResolver } from "./restaurantes/resolvers/restaurante.resolver";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path:'main',
        loadChildren: '../app/main/main.module#MainModule'
    },
    {
        path:'restaurantes',
        loadChildren: '../app/restaurantes/restaurantes.module#RestaurantesModule'
    },

]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }