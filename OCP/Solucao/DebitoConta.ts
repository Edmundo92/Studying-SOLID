abstract class DebitoConta {
    numeroTransacao() { }
    abstract debitar(decimal: number, conta: string);
}