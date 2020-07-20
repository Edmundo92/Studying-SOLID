export class EmailService {

    isValid(email: string) {
        return email.includes("@") ? true : false;
    }

    enviar(from, to, msgInitial, messageSecondary) {

    }
}