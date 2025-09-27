import { LightningElement } from "lwc";
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioBanner extends LightningElement {
    linkedinUrl = "https://www.linkedin.com/in/nguyenhuuphong/";
    trailheadUrl = "https://www.salesforce.com/trailblazer/huuphong";
    githubUrl = "https://github.com/huuphong1998";

    userPic = `${PortfolioAssets}/PortfolioAssets/user.jpeg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
}
