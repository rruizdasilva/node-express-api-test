let counter = 0;

exports.post = async (req, res, next) => {
    const message = await delayedMessage('Teste');
    counter++;
    res.status(201).send(`Requisição recebida com sucesso! Contador: ${counter}`) ;
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

async function delayedMessage(message) {
    await (new Promise(resolve => setTimeout(resolve, 10000)))
    return 'Retorno após 10 segundos';
}