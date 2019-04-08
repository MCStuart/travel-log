//Back-end for individual destinations
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes,
};

// Destination.prototype.addDestination = function() {
//
// }

// Back-end for our travel Log
function TravelLog() {
  this.destinations = [],
  this.currentId = 0
};
