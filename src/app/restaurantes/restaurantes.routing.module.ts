import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { RestauranteResolver } from './resolvers/restaurante.resolver';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    {
        path: 'cadastrar-restaurantes',
        component: FormComponent
    },
    {
        path: ':id',
        component: FormComponent,
        resolve: { restaurante: RestauranteResolver }
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantesRoutingModule {}
