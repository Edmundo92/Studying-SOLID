import { CPFService } from "./CPFService";
import { EmailService } from "./EmailService";

export default class Cliente {

    public clienteId: number;
    public nome: string;
    public email: string;
    public cpf: string;
    public dataCadastro: Date;

    cpfService = new CPFService();
    emailService = new EmailService();

    public isValid() {
        return this.cpfService.isValid(this.cpf) && this.emailService.isValid(this.email);
    }

}