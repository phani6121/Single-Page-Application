import AbstractView from "./AbstractView.js";//To import the data to refer the AbstractView

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts")//Here we are taking title is Posts 
    }

    async getHtml() {//This data is return the data to HTML
        return `
             <h1>Posts <h1>
             <p  style="font-size: 20px;">
               You are viewing the posts!
            </p>
        `;
    }
}