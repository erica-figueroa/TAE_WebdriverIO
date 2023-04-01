import { default as Page } from "./page.js";


export class HomePage extends Page {
    
    get loadDelayLink() { return $('a[href="/loaddelay"]');}

    async open() {
        await super.open('home');
    }

    async loadDelayLinkClick() {
        await this.loadDelayLink.click();
    }
}