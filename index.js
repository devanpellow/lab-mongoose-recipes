const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
	.connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
	.then(() => {
		console.log("Connected to Mongo!");
	})
	.catch(err => {
		console.error("Error connecting to mongo", err);
	});
