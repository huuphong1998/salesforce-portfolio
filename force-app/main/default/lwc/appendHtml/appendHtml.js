/* eslint-disable @lwc/lwc/no-inner-html */
import { api, LightningElement } from "lwc";

export default class AppendHtml extends LightningElement {
    _result;
    loader;

    @api
    get result() {
        return this._result;
    }
    set result(data) {
        this._result = data;
        if (this.loader) {
            this.attachHtml();
        }
    }

    renderedCallback() {
        if (this._result && !this.loader) {
            this.attachHtml();
        }
    }

    attachHtml() {
        const container = this.template.querySelector(".htmlcontainer");
        if (container) {
            container.innerHTML = this.result;
            this.loader = true;
        }
    }
}
