import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './components/card-view/card-view.component';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component';
import { RestaurantesRoutingModule } from './restaurantes.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CardViewComponent,
        FormComponent,
        MainComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RestaurantesRoutingModule,
    ],
    exports: [],
    providers: [
    ],
})
export class RestaurantesModule { }