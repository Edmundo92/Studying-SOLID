import { IEmailService } from "./Interfaces/IEmailService";

class EmailService implements IEmailService {
    isValid(email: string) {
        email.includes("@") ? true : false;
    }
    enviar(from: string, to: string, message: string, secondaryMessage: string) { }
}