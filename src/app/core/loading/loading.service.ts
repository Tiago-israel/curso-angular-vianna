import { Injectable, EventEmitter } from "@angular/core";


@Injectable()
export class LoadingService {

    public static loading: EventEmitter<boolean> = new EventEmitter<boolean>();

    public show(): void {
        LoadingService.loading.emit(true);
    }

    public hide(): void {
        LoadingService.loading.emit(false);
    }

}