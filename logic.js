var currentTime = moment();
console.log(moment(currentTime).format("hh:mm"));

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
         
         
      $(".table").find("tbody")
         .append($("<tr>")
            .append($("<td>")
               .text(trainname))
            .append($("<td>")
               .text(destination))
            // .append($("<td>")
            //    .text(firsttrain))
            .append($("<td>")
               .text(frequency)
            )
         )

   
   
   
      
      
      
      
     
   });
})     
     
