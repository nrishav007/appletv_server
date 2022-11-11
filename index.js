const PORT = process.env.PORT || 3000;
import express from "express";
import cors from 'cors';
import watch_premium from "./Resources/watch_premiers.json";
import latest_originals from "./Resources/latest_originals.json";
import most_popular from "./Resources/most_popular.json";
import future_release from "./Resources/future_release.json";
import drama from "./Resources/drama.json";
import comedy from "./Resources/comedy.json";
import all_comedy_series from "./Resources/all_comedy_series.json";
import all_drama_series from "./Resources/all_drama_series.json";
import all_feature_films from "./Resources/all_feature_films.json";
const help = {
    "Watch Premium": "/watchPremiers",
    "Latest Originals": "/latestOriginals",
    "Most Popular": "/mostPopular",
    "Future Release": "/futureRelease",
    "Comedy": "/comedy",
    "Drama": "/drama",
    "All Feature Films": "/allFeatureFilms",
    "All Drama Films": "/allDramaFilms",
    "All Comedy Films": "/allComedyFilms"
}
// Initialize Express https://cors-anywhere.herokuapp.com/
var app = express();
// const cores=require("./corsResolver")
app.use(cors({origin:"http://localhost:3000"}))
// Create GET request
app.get("/", (req, res) => {
    res.send(help);
});

const data = (json, path) => {
    app.get(`/${path}`, (req, res) => {
        res.send(json);
    });

    //To get a specific project, we need to define a parameter id
    app.get(`/${path}/:id`, function (req, res) {
        const data = json.find(c => c.id === parseInt(req.params.id));
        //if the project does not exist return status 404 (not found)
        if (!data)
            return res
                .status(404)
                .send("The project with the given id was not found");
        //return the object
        res.send(data);
    });
}


data(watch_premium, "watchPremiers");
data(latest_originals, "latestOriginals");
data(most_popular, "mostPopular");
data(future_release, "futureRelease");
data(drama, "drama");
data(comedy, "comedy");
data(all_feature_films, "allFeatureFilms");
data(all_drama_series, "allDramaFilms");
data(all_comedy_series, "allComedyFilms");





























//using the http post request we can create a new project
// app.post("/projects", function (req, res) {
//     //create a project object
//     const project = {
//         id: db.length + 1,
//         name: req.body.name
//     };
//     //add the project to the array
//     db.push(project);
//     //return the project
//     res.send(project);
// });
// app.put("/projects/:id", function (req, res) {
//     //get the project
//     const project = db.find(c => c.id === parseInt(req.params.id));
//     if (!project)
//         return res
//             .status(404)
//             .send("The project with the given id was not found");
//     //update the project
//     project.name = req.body.name;
//     //return the updated object
//     res.send(project);
// });
// app.put("/projects/:id", function (req, res) {
//     //get the project
//     const project = db.find(c => c.id === parseInt(req.params.id));
//     if (!project)
//         return res
//             .status(404)
//             .send("The project with the given id was not found");
//     //update the project
//     project.name = req.body.name;
//     //returns the updated object
//     res.send(project);
// });
app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
});