// File added to run prototypes outside of testing.

const Park = require("./models/park.js");
const Dinosaur = require("./models/dinosaur.js");

const park = new Park('Jurassic Park', 29.50, []);
const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
const dinosaur2 = new Dinosaur('velocoraptor', 'carnivore', 65);
const dinosaur3 = new Dinosaur('diplodocus', 'herbivore', 100);

// Prints out the details of the whole Park
console.log(park);

// Prints out the Park name
console.log(park.name);

// Prints out the Ticket Price
console.log(park.ticket_price);

// Prints out the Parks Dinosaur collection - currently empty.
console.log(park.collection)

// Prints dinosaur 1 details
console.log(dinosaur1);

// Prints dinosaur 2 details
console.log(dinosaur2);

// Prints dinosaur 3 details
console.log(dinosaur3);

// Adding dinosaurs to the collection
park.addDinosaur(dinosaur1);
park.addDinosaur(dinosaur2);
console.log(park.collection)
console.log(park.collection.length)

// Removing dinosaurs from the collection
park.removeDinosaur(dinosaur1);
console.log(park.collection);
console.log(park.collection.length)

// Finding the dinosaur that attracts the most visitors


// todo - Try adding dinosaurs to the collection at start 
// todo - Add more dinosaurs to start
// 