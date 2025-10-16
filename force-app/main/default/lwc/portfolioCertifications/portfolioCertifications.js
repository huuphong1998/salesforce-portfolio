import { LightningElement, wire, api } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import SF_CERT_FIELDS from "@salesforce/schema/Portfolio__c.SalesforceCertifications__c";
import OTHER_CERT_FIELDS from "@salesforce/schema/Portfolio__c.OtherCertifications__c";

export default class PortfolioCertifications extends LightningElement {
    @api recordId;
    @wire(getRecord, {
        recordId: "$recordId",
        fields: [SF_CERT_FIELDS, OTHER_CERT_FIELDS]
    })
    certHandler({ data, error }) {
        if (data) {
            console.log("certHandler data", JSON.stringify(data));
        }
        if (error) {
            console.error("certHandler error", error);
        }
    }
}
