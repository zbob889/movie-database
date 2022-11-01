const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
    director: { type: Schema.Types.ObjectID, ref: "Director", required: true },
    synopsis: { type: String, required: true, minLength: 3 },
    genre: { type: Schema.Types.ObjectID, ref: "Genre", required: true },
    image: { type: String, required: true }
});

FilmSchema.virtual("url").get(function() {
    return `/catalog/film/${this._id}`;
});

module.exports = mongoose.model("Film", FilmSchema);