const express = require("express");
const router = express.Router();
const cities = require("./data.json");

// Home route: Render the index page
router.get("/", (req, res) => {
  res.render("index"); // This serves the main search page (index.ejs)
});

// Home route: Render the index page
router.get("/redirect", (req, res) => {
  res.redirect('/'); // This serves the main search page (index.ejs)
});


// City route: Search for cities with partial matches (case-insensitive)
router.get("/travelmate", (req, res) => {
  try {
         
      const cityName = req.query.city.toLocaleLowerCase(); // Extract city name from route parameters
      
      // Find cities that contain the input string (case-insensitive)
      const matchingCities = cities.filter((item) =>
          item.city.toLowerCase().includes(cityName)
      );

      // If no cities match, render the error page
      if (matchingCities.length === 0) {
          return res.status(404).render("error", { message: "No matching cities found. Please try a different search term." });
      }

      // Render the city page with matching cities
      res.render("city", { data: matchingCities });
  } catch (error) {
      // Handle any other errors
      res.status(500).send("Error reading data");
      console.log(error);
  }
});

// Export routes
module.exports = router;
