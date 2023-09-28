import { Cliente } from "../cliente/cliente";
import { Camiseta } from "../camiseta/camiseta";

export interface Venda {
    id: number;
    dia_venda:string;
    valor:string;
    cliente:Cliente;
    camisetas: Camiseta[];
}
