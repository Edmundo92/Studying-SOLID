import { ICPFService } from "./Interfaces/ICPFService";
import { IEmailService } from "./Interfaces/IEmailService";

export class Cliente {
    public clienteId: number;
    public nome: string;
    public email: string;
    public cpf: string;
    public dataCadastro: Date;

    private _cpfService: ICPFService;
    private _emailService: IEmailService;

    constructor(cpfService: ICPFService, emailService: IEmailService) {
        this._cpfService = cpfService;
        this._emailService = emailService;
    }

    isValid() {
        return this._emailService.isValid(this.email) && this._cpfService.isValid(this.cpf);
    }
}