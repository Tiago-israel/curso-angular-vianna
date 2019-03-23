import { ErrorHandler, Injectable, Injector, Inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

    constructor(private toastrService: ToastrService) {
        super();
    }

    public handleError(error: any): void {
        if (error instanceof HttpErrorResponse) {
            this.httpErro(error);
        }
        throw new Error(error)
    }

    private httpErro(erro: HttpErrorResponse) {
        switch (erro.status) {
            case 0:
                this.toastrService.error('Erro', 'Houve um erro no servidor', { onActivateTick: true });
                break;
            case 404:
                this.toastrService.error('Não encontrado', 'O recurso que você está tentando acessar não existe.', { onActivateTick: true });
                break;
            default:
                break;
        }
    }

}