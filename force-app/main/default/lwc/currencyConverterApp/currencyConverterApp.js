import { LightningElement } from "lwc";
import { countryCodeList } from "c/countryCodeList";

export default class CurrencyConverterApp extends LightningElement {
    countryList = countryCodeList;
    countryFrom = "USD";
    countryTo = "VND";

    handleChange(event) {
        const { name, value } = event.target;
        console.log("name", name);
        console.log("value", value);
        this[name] = value;
    }
}
