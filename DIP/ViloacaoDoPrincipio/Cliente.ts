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
        // Cliente está a depender de implementação 
        // ao chamar o service e o email service cria um acoplamento, qualquer mudança que fizer em um dos services
        // estára a impactar na class Cliente, e pode ser que eu tenha que fazer mudanças nessa classe, o que ferirá o principio S
        return this.cpfService.isValid(this.cpf) && this.emailService.isValid(this.email);
    }

}