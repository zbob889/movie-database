const { body, validationResult } = require("express-validator");
const async = require("async");

const Film = require('../models/film');
const Director = require('../models/director');
const Genre = require('../models/genre');

// Display list of all directors.
exports.director_list = (req, res) => {
  res.send("NOT IMPLEMENTED: director list");
};

// Display detail page for a specific director.
exports.director_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: director detail: ${req.params.id}`);
};

// Display director create form on GET.
exports.director_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: director create GET");
};

// Handle director create on POST.
exports.director_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: director create POST");
};

// Display director delete form on GET.
exports.director_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: director delete GET");
};

// Handle director delete on POST.
exports.director_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: director delete POST");
};

// Display director update form on GET.
exports.director_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: director update GET");
};

// Handle director update on POST.
exports.director_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: director update POST");
};
