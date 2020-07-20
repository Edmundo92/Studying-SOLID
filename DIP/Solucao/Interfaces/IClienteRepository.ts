import { ICliente } from "./ICliente";

export interface IClienteRepository {
    adicionarCliente(cliente: ICliente)
}