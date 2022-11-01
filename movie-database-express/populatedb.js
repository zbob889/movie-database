#! /usr/bin/env node

console.log('This script populates the movie databse');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
const async = require('async');
const Director = require('./models/director');
const Film = require('./models/film');
const Genre = require('./models/genre');


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then( () => {
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    var directors = []
    var genres = []
    var films = []

    function directorCreate(first_name, family_name, d_birth, d_death, cb) {
    directordetail = {first_name:first_name , family_name: family_name }
    if (d_birth != false) directordetail.date_of_birth = d_birth
    if (d_death != false) directordetail.date_of_death = d_death
    
    var director = new Director(directordetail);
        
    director.save(function (err) {
        if (err) {
        cb(err, null)
        return
        }
        console.log('New Director: ' + director);
        directors.push(director)
        cb(null, director)
    }  );
    }

    function genreCreate(name, cb) {
    var genre = new Genre({ name: name });
        
    genre.save(function (err) {
        if (err) {
        cb(err, null);
        return;
        }
        console.log('New Genre: ' + genre);
        genres.push(genre)
        cb(null, genre);
    }   );
    }

    function filmCreate(name, synopsis, director, genre, image, cb) {
    filmdetail = { 
        name: name,
        synopsis: synopsis,
        director: director,
        image: image,
    }
    if (genre != false) filmdetail.genre = genre
        
    const film = new Film(filmdetail);    
    film.save(function (err) {
        if (err) {
        cb(err, null)
        return
        }
        console.log('New Film: ' + film);
        films.push(film)
        cb(null, film)
    }  );
    };

    // Continue from here

    function createGenreAuthors(cb) {
        async.series([
            function(callback) {
                directorCreate('Peter', 'Jackson', '1961-10-31', false, callback);
            },
            function(callback) {
                directorCreate('Werner', 'Herzog', '1942-09-05', false, callback);
            },
            function(callback) {
                directorCreate('Toshiya', 'Fujita', '1932-01-16', '1997-08-30', callback);
            },
            function(callback) {
                directorCreate('Norman', 'Jewison', '1926-07-21', false, callback);
            },
            function(callback) {
                directorCreate('Michal', 'Waszynski', '1904-09-29', '1965-02-20', callback);
            },
            function(callback) {
                genreCreate("Fantasy", callback);
            },
            function(callback) {
                genreCreate("Horror", callback);
            },
            function(callback) {
                genreCreate("Action", callback);
            },
            function(callback) {
                genreCreate("Musical", callback);
            },
            function(callback) {
                genreCreate("Documentary", callback);
            },
        ],
            // optional callback
        cb);
    }


    function createFilms(cb) {
        async.parallel([
            function(callback) {
                filmCreate('Grizzly Man', 'A devastating and heart-rending take on grizzly bear activists Timothy Treadwell and Amie Huguenard, who were killed in October of 2003 while living among grizzly bears in Alaska.', directors[1], genres[4], "https://m.media-amazon.com/images/M/MV5BODc3NTAxMTY1MV5BMl5BanBnXkFtZTcwOTE4NjUzMw@@._V1_.jpg", callback)
            },
            function(callback) {
                filmCreate('The Lord of the Rings: The Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', directors[0], genres[0], "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", callback)
            },
            function(callback) {
                filmCreate('The Lord of the Rings: The Two Towers', "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.", directors[0], genres[0], "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", callback)
            },
            function(callback) {
                filmCreate('The Lord of the Rings: The Return of the King', "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", directors[0], genres[0], "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", callback)
            },
            function(callback) {
                filmCreate("Lady Snowblood", "A strikingly beautiful young woman is trained from birth to be a deadly instrument of revenge against the swindlers who destroyed her family.", directors[2], genres[2], "https://m.media-amazon.com/images/M/MV5BMjFiOTIyNTEtYzU1NS00MzRhLTg1ZDktMDE3N2ZlZDRhZjEwXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_FMjpg_UX1000_.jpg", callback)
            },
            function(callback) {
                filmCreate('Fiddler on the Roof', "In pre-revolutionary Russia, a Jewish peasant with traditional values contends with marrying off three of his daughters with modern romantic ideals while growing anti-Semitic sentiment threatens his village.", directors[3], genres[3], "https://m.media-amazon.com/images/M/MV5BODQ5NGUzMzQtZTJjZC00MTk0LThjNmMtYzRjMjI1YTZiNmM5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg", callback)
            },
            function(callback) {
                filmCreate('The Dybbuk', "The mystical love story between Chonen, a poor Talmud student, and Lea, a girl from a wealthy family, depicts the traditional folk culture of Polish Jews before WW2.", directors[4], genres[1], "https://flxt.tmsimg.com/assets/p98933_v_v8_aa.jpg", callback)
            }
            ],
            // optional callback
            cb);
    };

    async.series([
        createGenreAuthors,
        createFilms,
    ],
    // Optional callback
    function(err, results) {
        if (err) {
            console.log('FINAL ERR: '+err);
        }
        else {
            
        }
        // All done, disconnect from database
        mongoose.connection.close();
    });
});



