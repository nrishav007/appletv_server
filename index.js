import db from "./db.json";
const PORT = process.env.PORT || 3000;
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
    res.send("Hey There! Thanks for visiting...");
});

app.get("/project", (req, res) => {
    res.send(db);
});

//To get a specific project, we need to define a parameter id
app.get("/projects/:id", function (req, res) {
    const project = projects.find(c => c.id === parseInt(req.params.id));
    //if the project does not exist return status 404 (not found)
    if (!project)
        return res
            .status(404)
            .send("The project with the given id was not found");
    //return the object
    res.send(project);
});
//using the http post request we can create a new project
app.post("/projects", function (req, res) {
    //create a project object
    const project = {
        id: projects.length + 1,
        name: req.body.name
    };
    //add the project to the array
    projects.push(project);
    //return the project
    res.send(project);
});
app.put("/projects/:id", function (req, res) {
    //get the project
    const project = projects.find(c => c.id === parseInt(req.params.id));
    if (!project)
        return res
            .status(404)
            .send("The project with the given id was not found");
    //update the project
    project.name = req.body.name;
    //return the updated object
    res.send(project);
});
app.put("/projects/:id", function (req, res) {
    //get the project
    const project = projects.find(c => c.id === parseInt(req.params.id));
    if (!project)
        return res
            .status(404)
            .send("The project with the given id was not found");
    //update the project
    project.name = req.body.name;
    //returns the updated object
    res.send(project);
});
app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
});