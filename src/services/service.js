async function delayedMessage(message) {
    await (new Promise(resolve => setTimeout(resolve, 10000)))
    return `Retorno após 10 segundos ==> ${JSON.stringify(message)}`;
}

process.on('message', async (message) => {
    const delayMessage = await delayedMessage(message);
    console.info(`FILHO ${delayMessage}`);
    process.send({messageVolta: message});
})