import { LightningElement, wire, api } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import TECH_SKILLS_FIELD from "@salesforce/schema/Portfolio__c.TechnicalSkills__c";
import SOFT_SKILLS_FIELD from "@salesforce/schema/Portfolio__c.SoftSkills__c";
import SOFTWARE_FIELD from "@salesforce/schema/Portfolio__c.SoftwareTools__c";

export default class PortfolioSkills extends LightningElement {
    @api recordId;
    @wire(getRecord, {
        recordId: "$recordId",
        fields: [TECH_SKILLS_FIELD, SOFT_SKILLS_FIELD, SOFTWARE_FIELD]
    })
    skilHandler({ data, error }) {
        if (data) {
            console.log("Skill Data", JSON.stringify(data));
        }
        if (error) {
            console.error("Skill error", error);
        }
    }
}
