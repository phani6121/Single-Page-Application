import AbstractView from "./AbstractView.js";//To import the data to refer the AbstractView

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings")//Here we are taking title is Settings
    }

    async getHtml() {//This data is return the data to HTML
        return `
             <h1>Settings <h1>
             <p  style="font-size: 20px;">
              manage your privacy and configaration. 
            </p>
        `;
    }
}