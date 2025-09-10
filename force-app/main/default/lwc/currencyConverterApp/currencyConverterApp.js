import { LightningElement } from "lwc";
import { countryCodeList } from "c/countryCodeList";
import currencyConverterAssets from "@salesforce/resourceUrl/currencyConverterAssets";

export default class CurrencyConverterApp extends LightningElement {
    currencyImage = currencyConverterAssets + "/currencyConverterAssets/currency.svg";
    countryList = countryCodeList;
    countryFrom = "USD";
    countryTo = "VND";
    amount = "";
    result;
    error;

    handleChange(event) {
        const { name, value } = event.target;
        console.log("name", name);
        console.log("value", value);
        this[name] = value;
    }

    submitHandler(event) {
        event.preventDefault();
        this.convert();
    }

    async convert() {
        const API_URL = `https://api.exchangerate.host/convert?access_key=b6bc418327d6e052683dd80de195ca2d&from=${this.countryFrom}&to=${this.countryTo}&amount=1&format=1`;
        try {
            const data = await fetch(API_URL);
            const jsonData = await data.json();
            this.result = (Number(this.amount) * jsonData.result).toFixed(2);
            console.log(this.result);
        } catch (error) {
            console.log(error);
            this.error = "An error occurred. Please try again...";
        }
    }
}
