const express = require("express");
const router = express.Router();

const director_controller = require("../controllers/directorController");
const film_controller = require("../controllers/filmController");
const genre_controller = require("../controllers/genreController");
const filminstance_controller = require('../controllers/filminstanceController');

/// FILM ROUTES ///

// GET catalog home page
router.get('/', film_controller.index);

// GET request for creating Film

// POST request for creating Film

// GET request for deleting Film

// POST request for deleting Film

// GET request for updating Film

// Post request for updating Film

// Get request for reading one Film

// POST request for reading one Film


/// FILMINSTANCE ROUTES ///

// GET request for creating FilmInstance

// POST request for creating FilmInstance

// GET request for deleting FilmInstance

// POST request for deleting FilmInstance

// GET request for updating FilmInstance

// Post request for updating FilmInstance

// Get request for reading one FilmInstance

// POST request for reading one FilmInstance


/// DIRECTOR ROUTES ///

// GET request for creating Director

// POST request for creating Director

// GET request for deleting Director

// POST request for deleting Director

// GET request for updating Director

// Post request for updating Director

// Get request for reading one Director

// POST request for reading one Director


/// GENRE ROUTES ///

// GET request for creating Genre

// POST request for creating Genre

// GET request for deleting Genre

// POST request for deleting Genre

// GET request for updating Genre

// Post request for updating Genre

// Get request for reading one Genre

// POST request for reading one Genre

module.exports = router;