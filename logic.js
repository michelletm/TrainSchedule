var currentTime = moment().format();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm a"));

function addTrain () {

   var trainname = $("#trainName").val().trim();
   var destination = $("#trainDestination").val().trim();
   var firsttrain = $("#firstTrainTime").val().trim();
   var frequency =  $("#frequency").val().trim();
   
}


$(document).ready(function() {

   $("#submit-btn").on("click", function() {
      
      var trainname = $("#trainName").val().trim();
      var destination = $("#trainDestination").val().trim();
      var firsttrain = $("#firstTrainTime").val().trim();
      var frequency =  $("#frequency").val().trim();

      console.log(trainname);
      console.log(destination);
      console.log(firsttrain);
      console.log(frequency);

      $("#trainName").val("");
      $("#trainDestination").val("");
      $("#firstTrainTime").val("");
      $("#frequency").val("");

      var firstTimeConverted = moment(firsttrain, "hh:mm a").subtract(1, "years");
      console.log("First Time Converted: " + firstTimeConverted);

      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("Difference in Time: " + diffTime);
   
      var tRemainder = diffTime % frequency;
      console.log(tRemainder);

      var nextarrival = moment().add(minaway, "minutes");
      console.log("Next Arrival: " + moment(nextarrival).format("hh:mm a"));

      var minaway = frequency - tRemainder;
      console.log("Minutes Until Next Train: " + minaway);

         
      $(".table").find("tbody")
         .append($("<tr>")
            .append($("<td>")
               .text(trainname))
            .append($("<td>")
               .text(destination))
            .append($("<td>")
               .text(frequency))
            .append($("<td>")
               .text((nextarrival).format("hh:mm a")))
            .append($("<td>")
               .text(minaway))
         )
      
   });
})     
     
