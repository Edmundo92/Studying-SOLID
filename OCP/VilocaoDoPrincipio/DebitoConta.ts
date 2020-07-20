import { TipoConta } from "./TipoConta";

class DebitoConta {

    debitar(valor: number, conta: string, tipoConta: TipoConta) {

        if (tipoConta == TipoConta.Corrente) {
            // lógica de negócio para Debito conta corrente
        }

        if (tipoConta == TipoConta.Poupanca) {
            // lógica de negócio para Debito conta poupança
        }
    }
}

/*

Problema: (Falando de contas bancarias, tendo duas contas sendo elas de bébito e crédito e já tendo a minha classe funcionando,
surge uma nova especificação ou pedido de add nova funcionalidade que seria a conta de investimento, o ideal seria colocar mais um if para o tipo de conta
Investimento, certo ?)

Essa abordagem está errada, pois eu já tenho uma class fechada e funcionando, logo ela não deve ser mais aberta para modificações, apenas para extensões, que seria
a adição de um novo tipo de conta.

*/