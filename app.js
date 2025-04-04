const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
app.use("/", routes);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).render("error", { message: err.message || "An unexpected error occurred." });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Export routes
module.exports = app;
