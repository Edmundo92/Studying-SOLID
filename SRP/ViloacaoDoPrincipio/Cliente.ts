class Cliente {

    public clienteId: number;
    public nome: string;
    public email: string;
    public cpf: string;
    public dataCadastro: Date;

    // Errado - A classe Cliente não pode adicionar cliente
    adicionarCliente() {

        // Errado - Essa class não pode fazer validações, deve apenas chamar os métodos responsaveis pela validação de outra class
        if (!this.email.includes("@")) return "Cliente com email inválido";
        if (this.cpf.length !== 11) return "Cliente com CPF inválido";

        // Errado - Não pode fazer conexão com o banco e nem se adicionar no banco
        // deve passar essa responsabilidade a uma class especifica
        // conexão com o banco de dados
        const cn = new SqlConnection();
        const cmd = new SqlCommand();

        // Errado - Não pode saber como enviar e nem enviar email
        // envio de email para o cliente
        const mail = new MailMessage();
        const client = new SmtpClient();

        return "Cliente cadastrado com sucesso!"
    }
}

class SqlConnection { }
class SqlCommand { }

class MailMessage { }
class SmtpClient { }