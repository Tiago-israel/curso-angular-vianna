import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Restaurante } from "../models/restaurante";

@Injectable()
export class RestaurantesService {

    private apiUrl: string = 'http://localhost:3000/restaurantes';

    public constructor(private http: HttpClient) { }

    public buscarTodos(): Observable<Restaurante[]> {
        return this.http.get<Restaurante[]>(this.apiUrl);
    }

    public buscarPorId(id: number): Observable<Restaurante> {
        return this.http.get<Restaurante>(`${this.apiUrl}/${id}`);
    }

    public salvar(restaurante: Restaurante): Observable<Restaurante> {
        return this.http.post<Restaurante>(this.apiUrl, restaurante);
    }

    public editar(restaurante: Restaurante, id: number): Observable<Restaurante> {
        return this.http.put<Restaurante>(`${this.apiUrl}/${id}`, restaurante);
    }

    public excluir(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }


}