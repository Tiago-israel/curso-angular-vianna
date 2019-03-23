
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { GlobalErrorHandler } from '../core/global-error-handler';
import { MainRoutingModule } from './main.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    providers: [
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
    ],
})
export class MainModule { }
