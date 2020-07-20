export interface IEmailService {
    isValid(email: string);
    enviar(from: string, to: string, message: string, secondaryMessage: string);
}