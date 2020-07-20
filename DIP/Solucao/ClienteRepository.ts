import { ICliente } from "../ViloacaoDoPrincipio/Models";
import { IClienteRepository } from "./Interfaces/IClienteRepository";

class ClienteRepository implements IClienteRepository {
    adicionarCliente(cliente: ICliente) {
        // fazer conexão com banco (pode sair)
        // adicionar no banco
    }
}