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
// Attached Event Listeners to listed destinations
function attachDestinationListeners() {
  $("ul.placeList").on("click", "li", function() {
    console.log("The id of this <li> is " + this.id + ".");
  });
};

// Back-end for our travel Log
function TravelLog() {
  this.destinations = [];
  this.orderVisited = 0;
};

// User Interface Logic
$(document).ready(function() {
  attachDestinationListeners();
  var travelLog = new TravelLog();
  $("form").submit(function(event)  {
    event.preventDefault();
    var location = $("#location").val();
    var landmarks = $("#landmarks").val().split(", ");
    var timeOfYear = $("timeOfYear").val();
    var notes = $("#notes").val();
    var image = $("#images").val();
    var destination = new Destination(location, landmarks, timeOfYear, notes, image);
    travelLog.addDestinations(destination);
    console.log(travelLog);
  })
});
