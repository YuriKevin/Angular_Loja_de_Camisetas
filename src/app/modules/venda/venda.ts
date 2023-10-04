import { Cliente } from "../cliente/cliente";
import { CamisetaVenda } from "./camisetavenda";

export interface Venda {
    id: number;
    dia_venda:string;
    valor:string;
    cliente:Cliente;
    camisetaVendas: CamisetaVenda[];
}
