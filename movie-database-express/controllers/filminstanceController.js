const { body, validationResult } = require("express-validator");
const async = require("async");
// const FilmInstance = require("../models/filminstance");

// Display list of all filminstances.
exports.filminstance_list = (req, res) => {
  res.send("NOT IMPLEMENTED: filminstance list");
};

// Display detail page for a specific filminstance.
exports.filminstance_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: filminstance detail: ${req.params.id}`);
};

// Display filminstance create form on GET.
exports.filminstance_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: filminstance create GET");
};

// Handle filminstance create on POST.
exports.filminstance_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: filminstance create POST");
};

// Display filminstance delete form on GET.
exports.filminstance_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: filminstance delete GET");
};

// Handle filminstance delete on POST.
exports.filminstance_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: filminstance delete POST");
};

// Display filminstance update form on GET.
exports.filminstance_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: filminstance update GET");
};

// Handle filminstance update on POST.
exports.filminstance_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: filminstance update POST");
};
