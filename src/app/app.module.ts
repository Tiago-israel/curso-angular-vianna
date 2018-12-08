import { GlobalErrorHandler } from './core/global-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { CardViewComponent } from './restaurantes/components/card-view/card-view.component';
import { FormComponent } from './restaurantes/components/form/form.component';
import { RestaurantesService } from './restaurantes/services/restaurantes.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './restaurantes/components/main/main.component';
import { LoadingModule } from './core/loading/loading.module';

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
    LoadingModule,
    ToastrModule.forRoot()
  ],
  providers: [
    RestaurantesService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
