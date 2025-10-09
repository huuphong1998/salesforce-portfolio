import { LightningElement } from "lwc";
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`;
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`;
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`;
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`;
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`;

    projects = [
        {
            name: "BMI Calculator",
            image: this.BMICalculator,
            link: "https://huuphong-portfolio-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            name: "Alarm Clock",
            image: this.AlarmClock,
            link: "https://huuphong-portfolio-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            name: "Currency Converter App",
            image: this.CurrencyCalculator,
            link: "https://huuphong-portfolio-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            name: "Weather App",
            image: this.WeatherApp,
            link: "https://huuphong-portfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            name: "Survey App",
            image: this.SurveyApp,
            link: "https://huuphong-portfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0KigL0000000YRV&surveyName=employee_survey&UUID=828db9eb-8273-4b71-a1c3-3d1962741ed2"
        },
        {
            name: "Note Taking App",
            image: this.NoteApp,
            link: "https://huuphong-portfolio-dev-ed.develop.my.site.com/note-taking-app"
        }
    ];
}
