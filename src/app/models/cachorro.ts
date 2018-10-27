import { Animal } from "./animal";
import { IComportamento } from "./icomportamento";

export class Cachorro extends Animal implements IComportamento{
 
    public raca:string;

     public latir(texto:string):string{
        return `${this.nome} latiu ${texto}`;
    }

    public andar(): void {
        console.log("Andou");
    }

    public pular(quantidade: number): number {
        return quantidade;
    }

}