const transacoes = {
    transacoes: [
        {
            valor: 10,
            descricao: 'Pastel',
            categoria: 'Despesa'
        },
        {
            valor: 30,
            descricao: 'Vendi Doce',
            categoria: 'Receita'
        }
    ]
}
class TransacoesRepositorio {

    listarTransacoes() {
        return transacoes;

    }
    criarTransacao(transacao) {
        const lista = transacoes.transacoes
        lista.push(transacao)
    }
}

module.exports = TransacoesRepositorio