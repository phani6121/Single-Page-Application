import AbstractView from "./AbstractView.js";//To import the data to refer the AbstractView

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")//Here we are taking title is Dashboard 
    }

    async getHtml() {//This data is return the data to HTML
        return `
             <h1>Welcome back, Dom <h1>
             <p  style="font-size: 20px;">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis hic labore fugiat qui ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda hic officiis accusamus corporis. Praesentium, corporis nobis. Similique repellendus, ipsa molestias quod quo excepturi provident magni, vitae, error facilis molestiae.
            </p>
            <p style="font-size: 20px;">
              <a href="/posts" data-link>View recent Posts</a>
            </p>
        `;
    }
}