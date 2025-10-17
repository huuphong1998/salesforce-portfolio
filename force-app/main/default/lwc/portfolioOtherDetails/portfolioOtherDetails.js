import { LightningElement, wire, api } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import SUPERBADGE_FIELD from "@salesforce/schema/Portfolio__c.Superbadges__c";
import AWARDS_FIELD from "@salesforce/schema/Portfolio__c.Awards__c";
import LANGUAGES_FIELD from "@salesforce/schema/Portfolio__c.Languages__c";

export default class PortfolioOtherDetails extends LightningElement {
    @api recordId;
    @wire(getRecord, {
        recordId: "$recordId",
        fields: [SUPERBADGE_FIELD, AWARDS_FIELD, LANGUAGES_FIELD]
    })
    otherDetailsHandler({ data, error }) {
        if (data) {
            console.log("otherDetailsHandler data", JSON.stringify(data));
        }
        if (error) {
            console.error("otherDetailsHandler error", error);
        }
    }
}
