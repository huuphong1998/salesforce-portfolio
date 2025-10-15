import { LightningElement, api, wire } from "lwc";
import { getRelatedListRecords } from "lightning/uiRelatedListApi";

export default class PortfolioEducation extends LightningElement {
    @api recordId;
    @wire(getRelatedListRecords, {
        parentRecordId: "$recordId",
        relatedListId: "Educations__r",
        fields: ["Education__c.InstitutionName__c", "Education__c.Title__c", "Education__c.PassingYear__c"],
        sortBy: ["Education__c.PassingYear__c"]
    })
    EducationHandler({ data, error }) {
        if (data) {
            console.log("EducationHandler data", JSON.stringify(data));
        }
        if (error) {
            console.error("EducationHandler error", error);
        }
    }
}
