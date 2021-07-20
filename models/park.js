const { prototype } = require("mocha");
const Dinosaur = require("./dinosaur");

const Park = function (name, ticket_price, collection){
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection = collection;
}

Park.prototype.addDinosaur = function(dinosaurToAdd){
    this.collection.unshift(dinosaurToAdd);
};

Park.prototype.removeDinosaur = function(dinosaurToRemove) {
    this.collection.shift(dinosaurToRemove);
}
// Should have used splice

module.exports = Park;