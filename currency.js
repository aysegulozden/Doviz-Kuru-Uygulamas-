class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Z27F9TUPCIj7n2XJKNYolq8ojhVKgSBXaw8HepEt&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurrency}`);
        const data = await response.json();
        const  exchangeResult = amount * data.data[secondCurrency];

        return exchangeResult;
        
    }
}


