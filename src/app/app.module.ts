import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { CardViewComponent } from './restaurantes/components/card-view/card-view.component';
import { FormComponent } from './restaurantes/components/form/form.component';
import { RestaurantesService } from './restaurantes/services/restaurantes.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './restaurantes/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    FormComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [
    RestaurantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
