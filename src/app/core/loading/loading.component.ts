import { Component, OnInit } from "@angular/core";
import { LoadingService } from "./loading.service";

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    public isLoading: boolean = false;

    ngOnInit(): void {
        LoadingService.loading.subscribe(
            isLoading => {
                debugger
                this.isLoading = isLoading;
            }
        )
    }

}