import { LightningElement, wire, api } from "lwc";
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import FULLNAME from "@salesforce/schema/Portfolio__c.FullName__c";
import COMPANY_LOCATION from "@salesforce/schema/Portfolio__c.CompanyLocation__c";
import COMPANY_NAME from "@salesforce/schema/Portfolio__c.CompanyName__c";
import DESIGNATION from "@salesforce/schema/Portfolio__c.Designation__c";

export default class PortfolioBanner extends LightningElement {
    @api linkedinUrl; //= "https://www.linkedin.com/in/nguyenhuuphong/";
    @api trailheadUrl; //= "https://www.salesforce.com/trailblazer/huuphong";
    @api githubUrl; //= "https://github.com/huuphong1998";

    userPic = `${PortfolioAssets}/PortfolioAssets/user.jpeg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;

    @api recordId; //= "a01gL00000PNJjVQAX";
    @wire(getRecord, { recordId: "$recordId", fields: [FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION] })
    portfolioData;
    // portfolioHandler({ data, error }) {
    //     if (data) {
    //         console.log("record data", JSON.stringify(data));
    //     }
    //     if (error) {
    //         console.log("error", error);
    //     }
    // }
    get fullName() {
        return getFieldValue(this.portfolioData.data, FULLNAME);
    }
    get companyLocation() {
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION);
    }
    get companyName() {
        return getFieldValue(this.portfolioData.data, COMPANY_NAME);
    }
    get designation() {
        return getFieldValue(this.portfolioData.data, DESIGNATION);
    }
}
