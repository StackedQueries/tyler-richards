export const getQuote = async () => {
    const res = await fetch(`http://192.168.1.111:5000/quotes`);
    const QuoteFromServer = await res.json();
    return QuoteFromServer;
};
