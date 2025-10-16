import { LightningElement, wire, api } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";
import SF_CERT_FIELDS from "@salesforce/schema/Portfolio__c.SalesforceCertifications__c";
import OTHER_CERT_FIELDS from "@salesforce/schema/Portfolio__c.OtherCertifications__c";

export default class PortfolioCertifications extends LightningElement {
    sfCertsList = [];
    otherCertsList = [];
    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png 2x`;

    @api recordId;
    @wire(getRecord, {
        recordId: "$recordId",
        fields: [SF_CERT_FIELDS, OTHER_CERT_FIELDS]
    })
    certHandler({ data, error }) {
        if (data) {
            console.log("certHandler data", JSON.stringify(data));
            this.formatData(data);
        }
        if (error) {
            console.error("certHandler error", error);
        }
    }
    formatData(data) {
        const { OtherCertifications__c, SalesforceCertifications__c } = data.fields;

        const sfRaw =
            SalesforceCertifications__c && SalesforceCertifications__c.value ? SalesforceCertifications__c.value : "";
        const otherRaw = OtherCertifications__c && OtherCertifications__c.value ? OtherCertifications__c.value : "";

        this.sfCertsList = sfRaw ? sfRaw.split(";").map((item) => `Salesforce Certified ${item}`) : [];

        this.otherCertsList = otherRaw ? otherRaw.split(",") : [];
    }
}
