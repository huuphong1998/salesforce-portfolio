import { LightningElement, api, wire } from "lwc";
import { getRelatedListRecords } from "lightning/uiRelatedListApi";

export default class PortfolioWorkExperience extends LightningElement {
    @api recordId;

    @wire(getRelatedListRecords, {
        parentRecordId: "$recordId",
        relatedListId: "WorkExperience__r",
        fields: [
            "WorkExperience__c.JobStartDate__c",
            "WorkExperience__c.JobEndDate__c",
            "WorkExperience__c.Role__c",
            "WorkExperience__c.CompanyName__c",
            "WorkExperience__c.WorkLocation__c",
            "WorkExperience__c.Description__c",
            "WorkExperience__c.IsCurrent__c"
        ]
    })
    WorkExperienceHandler({ data, error }) {
        if (data) {
            console.log("WorkExperience Data", JSON.stringify(data));
        } else if (error) {
            console.error(error);
        }
    }
}
