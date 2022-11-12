const PORT = process.env.PORT || 3008;
const watch_premium = require("./Resources/watch_premiers.json");
const latest_originals = require("./Resources/latest_originals.json");
const most_popular = require("./Resources/most_popular.json");
const future_release = require("./Resources/future_release.json");
const drama = require("./Resources/drama.json");
const comedy = require("./Resources/comedy.json");
const all_comedy_series = require("./Resources/all_comedy_series.json");
const all_drama_series = require("./Resources/all_drama_series.json");
const all_feature_films = require("./Resources/all_feature_films.json");
const fun_for_all = require("./Resources/fun_for_all.json");

const test = require("./Resources/test.json");
const fs = require("fs")
const help = {
    "Watch Premium": "/watchPremiers",
    "Latest Originals": "/latestOriginals",
    "Most Popular": "/mostPopular",
    "Future Release": "/futureRelease",
    "Comedy": "/comedy",
    "Drama": "/drama",
    "All Feature Films": "/allFeatureFilms",
    "All Drama Films": "/allDramaFilms",
    "All Comedy Films": "/allComedyFilms",
    "Fun For All": "/funForAll"
}
// Initialize Express https://cors-anywhere.herokuapp.com/
const express = require("express")
const cors = require("cors")
var app = express();
// const cores=require("./corsResolver")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
// Create GET request
app.get("/", (req, res) => {
    res.send(help);
});

const data = (json, path) => {
    app.get(`/${path}`, (req, res) => {
        res.json(json);
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
    //using the http post request we can create a new project


    const userFile = fs.readFileSync(`${__dirname}/Resources/watch_premiers.json`, { encoding: "utf-8" })
    const users = JSON.parse(userFile);
    const updateData = (updatedata) => { fs.writeFileSync(`${__dirname}/Resources/watch_premiers.json`, JSON.stringify(updatedata), { encoding: "utf-8" }) }
    // updateData({...users,users}) ;
    app.post(`/${path}`, (req, res) => {
        console.log(users, { ...req.body })
        users.push({ ...req.body });
        updateData([...users, { ...req.body }]);
        res.send({ ...req.body })
    });

    // app.post(`/${path}`, function (req, res) {
    //     //create a project object
    //     const movie_details = {
    //         id: json.length + 1,
    //         title:req.body.title,
    //         description:req.body.description,
    //         image: req.body.image,
    //         season: req.body.season
    //     };
    //     //add the project to the array
    //     json.push(movie_details);
    //     //return the project
    //     res.send(movie_details);
    // });
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
data(fun_for_all, "funForAll");
data(test,"test");



























// using the http post request we can create a new project
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