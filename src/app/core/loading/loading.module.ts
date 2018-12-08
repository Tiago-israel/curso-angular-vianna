import { LoadingService } from './loading.service';
import { NgModule } from "@angular/core";
import { LoadingComponent } from "./loading.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LoadingComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        LoadingService
    ],
    exports: [
        LoadingComponent
    ]
})
export class LoadingModule { }