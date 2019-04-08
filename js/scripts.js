// Test destinations
var destination = new Destination("China", ['Great wall of China', "Emporor's Palace"], "Monsoon Season", "The air-quality sucks", "img/Forbidden-city.jpg");

//Back-end for individual destinations
function Destination(location, landmarks, timeOfYear, notes, img) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.img = img;
  this.id = 0;
};
//Inintialize destination objects
TravelLog.prototype.addDestinations = function(destination) {
  destination.id = this.addIdToDestination();
  this.destinations.push(destination);
}
//add order of the destination that was visited
TravelLog.prototype.addIdToDestination = function() {
  this.orderVisited++;
  return this.orderVisited;
}
// Will search through destinations by assigned Id and return any matched value
TravelLog.prototype.findDestination = function(id) {
  for (var i = 0; i < this.destinations.length; i++) {
    if (this.destinations[i]) {
      if (this.destinations[i].id === id) {
        return this.destinations[i];
      }
    }
  };
  return "https://en.wikipedia.org/wiki/" + this.location; // returns wikipedia link for a specific searched location if no matching location is found
}
// return output of travel destination during a specific time of timeOfYear
// Destination.prototype.tripDetail = function() {
//   return ("I traveled to " + this.destination + " during " + this.timeOfYear ". I had a great time!")
// }

// Back-end for our travel Log
function TravelLog() {
  this.destinations = [];
  this.orderVisited = 0;
};

// User Interface Logic
$(document).ready(function() {
  var travelLog = new TravelLog();
  $("form").submit(function(event)  {
    event.preventDefault();
    var destination = new Destination($("#location").val(),$("#landmarks").val(),$("#timeOfYear").val(),$("#notes").val(),$("#image").val());
    travelLog.addDestinations(destination);
    console.log(travelLog);

  })

});
