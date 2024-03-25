import Dashboard from "./view/Dashboard.js";
import Posts from "./view/posts.js"
import Settings from "./view/Settings.js";



const navigateTo = url => {//At here navigateTo is the function and we are used the pushState method in this method store the new entry to the broswer path of the history.
    history.pushState(null, null, url);
    router();
}

const router = async () => {


    // const routes = [
    //     { path: "/", view: () => console.log("viewing dashboard") }, //At her we can given the root patha and that path view in this function.
    //     { path: "/posts", view: () => console.log("viewing posts") },
    //     { path: "/settings", view: () => console.log("viewing settings") },
    // ];


    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings }
    ];
    //test each route for potential match

    //at here to assign to potentialMatches
    const potentialMatches = routes.map(route => {
        return {//At here return a new object 
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    //This match is one of the match of the route isMatch is match its getting true.

    //At here we can use the find method in this method we can find the route.

    if (!match) {//At here if path is not match in that case path is update to 0 index and isMatch is true  
        match = {
            route: routes[0],
            isMatch: true
        };
    };

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();


    console.log(match.route.view());

    // console.log(potentialMatches); At here to moniter the path and get the path results true or flase
};

window.addEventListener("popstate", router);//This is for to navigates to page go back and forword


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {// This function purpose is document not going to server and reload 
        if (e.target.matches("[data-link]")) {
            e.preventDefault();//This line do not the reload the page 
            navigateTo(e.target.href)
        }
    });
    router();
});//At here when DOM is fully loaded in that time run the routers function 