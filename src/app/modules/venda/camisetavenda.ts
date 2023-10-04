import { Camiseta } from "../camiseta/camiseta";
import { Venda } from "./venda";
export interface CamisetaVenda {

    id:number;
    camiseta: Camiseta; 
    vendaId: number;
    quantidade:number;
    valor:number;

}
