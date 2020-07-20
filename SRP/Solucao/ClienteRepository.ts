import { ICliente } from "./Models";

export class ClienteRepository {

    adicionarCliente(cliente: ICliente) {
        // O repository será responsavel por se comunicar com a minha camada de dados ou seja, ele está encarregue de
        // fazer a comunicação com o banco de dados e assim persistir os dados enviados
        // Essa class é a intermediadora entre a camada de dominio (lógica de negócio) e a camada de dados (banco de dados)
    }
}