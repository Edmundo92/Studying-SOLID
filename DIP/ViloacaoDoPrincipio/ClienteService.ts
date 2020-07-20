import { ICliente } from "./Models";
import Cliente from "./Cliente";
import { ClienteRepository } from "./ClienteRepository";
import { EmailService } from "./EmailService";

class ClienteService {
    emailService = new EmailService();

    add(cliente: ICliente) {

        if (!new Cliente().isValid) return "Dados inválidos!";
        var repo = new ClienteRepository();
        repo.adicionarCliente(cliente);

        this.emailService.enviar("empresa@gmail.com", cliente.email, "Bem Vindo", "Parabéns, está cadastrado");

        return "Cliente cadastrado com sucesso";
    }
}