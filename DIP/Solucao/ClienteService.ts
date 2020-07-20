import { IClienteService } from "./Interfaces/IClienteService";
import { IEmailService } from "./Interfaces/IEmailService";
import { IClienteRepository } from "./Interfaces/IClienteRepository";
import { Cliente } from "./Cliente";

class ClienteService implements IClienteService {
    private _emailService: IEmailService;
    private _clienteRepository: IClienteRepository;

    constructor(clienteRepository: IClienteRepository, emailService: IEmailService) {
        this._emailService = emailService;
        this._clienteRepository = clienteRepository;
    }

    adicionarCliente(cliente: Cliente) {
        if (!cliente.isValid()) return "Dados Inválidos";
        this._clienteRepository.adicionarCliente(cliente);
        this._emailService.enviar("empresa@contato.com", cliente.email, "Bem Vindo", "Cadastrado com sucesso");
    }
}