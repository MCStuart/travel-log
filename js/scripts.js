//Back-end for individual destinations
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes,
};
//Inintialize destination objects
Destination.prototype.addDestinations = function(destinations) {
  destinations.id = this.addIdToDestination();
  this.destinations.push(destinations)
}
//add order of the destination that was visited
destination.prototype.addIdToDestination = function() {
  this.orderVisited++;
  return this.currentId;
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
Destination.prototype.tripDetail = function() {
  return "I traveled to " + this.destination + " during " + this.timeOfYear ". I had a great time!"
}

// Back-end for our travel Log
function TravelLog() {
  this.destinations = [],
  this.orderVisited = 0
};
