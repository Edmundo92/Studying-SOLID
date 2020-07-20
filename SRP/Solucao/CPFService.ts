export class CPFService {

    public isValid(cpf: string) {
        if (cpf.length !== 11) {
            return false
        }

        return true;
    }
}