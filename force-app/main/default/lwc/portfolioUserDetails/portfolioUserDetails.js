import { LightningElement, api } from "lwc";

export default class PortfolioUserDetails extends LightningElement {
    @api recordId;
    @api objectApiName;

    downloadResume() {
        window.open(
            "https://github.com/huuphong1998/phong-resume/raw/main/CV%20-%20Nguye%CC%82%CC%83n%20Hu%CC%9B%CC%83u%20Pho%CC%82ng.pdf",
            "_blank"
        );
    }
}
