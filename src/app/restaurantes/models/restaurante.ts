import { Prato } from "./pratos";

export class Restaurante {
    public id: number;
    public nome: string;
    public distancia: string;
    public tempo: string;
    public avaliacao: number;
    public pratos: Array<Prato> = new Array<Prato>();
}