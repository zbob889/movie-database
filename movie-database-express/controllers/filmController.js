const { body, validationResult } = require("express-validator");
const async = require("async");

const Film = require('../models/film');
const Director = require('../models/director');
const Genre = require('../models/genre');

exports.index = (req, res) => {
  res.render('index', {
    title: "Movie Catalog"
  });
};

// Display list of all films.
exports.film_list = (req, res) => {
  res.send("NOT IMPLEMENTED: film list");
};

// Display detail page for a specific film.
exports.film_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: film detail: ${req.params.id}`);
};

// Display film create form on GET.
exports.film_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: film create GET");
};

// Handle film create on POST.
exports.film_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: film create POST");
};

// Display film delete form on GET.
exports.film_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: film delete GET");
};

// Handle film delete on POST.
exports.film_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: film delete POST");
};

// Display film update form on GET.
exports.film_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: film update GET");
};

// Handle film update on POST.
exports.film_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: film update POST");
};