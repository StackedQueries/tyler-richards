const fetch = require("node-fetch");

module.exports.index = async (req, res) => {
    const quote = await fetch('https://zenquotes.io/api/quotes')

    const quoteFromServer = await quote.json();

    res.send(quoteFromServer[0])
}
