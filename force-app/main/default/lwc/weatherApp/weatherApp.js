import { LightningElement } from "lwc";

const API_KEY = "279c8910fc4645fec7582834d1e843a9";
export default class WeatherApp extends LightningElement {
    cityName = "";
    searchHandler(event) {
        this.cityName = event.target.value;
    }

    submitHandler(event) {
        event.preventDefault();
        this.fetchData();
    }

    fetchData() {
        console.log("cityName", this.cityName);
    }
}
