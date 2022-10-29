const { fork } = require('child_process');

exports.post = (req, res, next) => {
    const process = fork('src/services/service.js');
    const message = req.body.message;
    process.send({messageIda: message});
    process.on('message', (message) => {
        console.info(`PAI ${JSON.stringify(message)}`);
    });
    return res.json({ status: true, sent: true, message });
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};