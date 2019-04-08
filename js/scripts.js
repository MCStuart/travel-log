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
  this.id++;
  return this.id;
}
// Attached Event Listeners to listed destinations
function attachDestinationListeners(travelLog) {
  $("#places").on("click", "p", function() {
    console.log("The id of this <p> is " + this.id + ".");
    showDestination(this.id);
  });
};
// Search function for destinations by Id
TravelLog.prototype.findDestinationById = function(id) {
  for (var i=0; i< this.destinations.length; i++) {
    if (this.destinations[i]) {
      if (this.destinations[i].id == id) {
        return this.destinations[i];
      }
    }
  };
  return false;
}
// shows the destination's Id
function showDestination(id) {
  var destination = TravelLog.findDestinationById(id);
  $("#places").show();
  $(".location").html(destination.location);
  $(".landmarks").html(destination.landmarks);
  $(".timeOfYear").html(destination.timeOfYear);
  $(".notes").html(destination.notes);
}


// Back-end for our travel Log
function TravelLog() {
  this.destinations = [];
  this.id = 0;
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
