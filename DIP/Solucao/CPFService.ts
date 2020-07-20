import { ICPFService } from "./Interfaces/ICPFService";

class CPFService implements ICPFService {
    isValid(cpf: string) {
        cpf.length == 11 ? true : false;
    }
}