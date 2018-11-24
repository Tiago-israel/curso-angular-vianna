import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { FormComponent } from "./restaurantes/components/form/form.component";
import { MainComponent } from "./restaurantes/components/main/main.component";

export const routes: Routes = [
    {
        path:'',
        redirectTo:'restaurantes',
        pathMatch:'full'
    },
    {
        path: 'restaurantes',
        component: MainComponent
    },
    {
        path: 'cadastrar-restaurantes',
        component: FormComponent
    }

]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }