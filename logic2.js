var config = {
   apiKey: "AIzaSyCrlWmdJi1gjjeDsN23S0YZFkHqAr-fPYo",
   authDomain: "classwork-7e968.firebaseapp.com",
   databaseURL: "https://classwork-7e968.firebaseio.com",
   projectId: "classwork-7e968",
   storageBucket: "classwork-7e968.appspot.com",
   messagingSenderId: "573470693286"
};

firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function() {

   $("#submit-btn").on("click", function() {
      event.preventDefault();
      
      var trainname = $("#trainName").val().trim();
      var destination = $("#trainDestination").val().trim();
      var firsttrain = $("#firstTrainTime").val().trim();
      var frequency =  $("#frequency").val().trim();

      console.log(trainname);
      console.log(destination);
      console.log(firsttrain);
      console.log(frequency);
      
      var newTrain = {
         name: trainname,
         destination: destination,
         first: firsttrain,
         frequency: frequency
      }

      database.ref().push(newTrain);

      $("#trainName").val("");
      $("#trainDestination").val("");
      $("#firstTrainTime").val("");
      $("#frequency").val("");
      
   });

   // $("#submit-btn").on("click", function() {
   //    event.preventDefault();

      // var initialTrainName = "";
      // var initialDestination = "";
      // var initialFrequency = "";
      // var initialNextArrival = "";
      // var initialMinAway = "";

      // var trainname = initialTrainName;
      // var destination = initialDestination;
      // var frequency = initialFrequency;
      // var nextarrival = initialNextArrival;
      // var minaway = initialMinAway;

      // trainname = $("#trainName").val().trim();
      // destination = $("#trainDestination").val().trim();
      // firsttrain = $("#firstTrainTime").val().trim();
      // frequency =  $("#frequency").val().trim();
      // console.log(trainname);

   database.ref().on("child_added", function(snapshot) {

      var trainname = snapshot.val().name;
      var destination = snapshot.val().destination;
      var firsttrain = snapshot.val().first;
      var frequency = snapshot.val().frequency;
      
      console.log(snapshot.val().trainname);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().firsttrain);
      console.log(snapshot.val().frequency);
      
      var currentTime = moment();
      console.log("The Current Time Is: " + moment(currentTime).format("hh:mm A"));

      var firstTimeConverted = moment(firsttrain, "hh:mm A").subtract(1, "years");
      console.log("First Time Converted: " + firstTimeConverted);

      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("Difference in Time: " + diffTime);
   
      var tRemainder = diffTime % frequency;
      console.log(tRemainder);

      var minaway = frequency - tRemainder;
      console.log("Minutes (mm) Until Next Train: " + minaway);

      var nextarrival = moment().add(minaway, "minutes");
      console.log("Next Arrival: " + moment(nextarrival).format("hh:mm A"));

       $(".table").find("tbody")
         .append($("<tr>")
            .append($("<td>")
               .text(trainname))
            .append($("<td>")
               .text(destination))
            .append($("<td>")
               .text(frequency))
            .append($("<td>")
               .text((nextarrival).format("hh:mm A")))
            .append($("<td>")
               .text(minaway))
         )
  
   });

});