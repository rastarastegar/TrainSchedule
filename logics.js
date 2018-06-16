/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase





// 2. Create button for adding new trains - then update the html + update the database


// 3. Create a way to retrieve trains from the train database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyDoU5ipoRKozfJd2HT98wvIgJ7HP5j_HJk",
    authDomain: "train-schedule-1529164524229.firebaseapp.com",
    databaseURL: "https://train-schedule-1529164524229.firebaseio.com",
    projectId: "train-schedule-1529164524229",
    storageBucket: "",
    messagingSenderId: "807445527719"
  };
  firebase.initializeApp(config);
  var database=firebase.database();
  
  
  
  // 2. Button for adding trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    
    var trainData={
      
      name: $("#train-name-input").val().trim(),
      destination: $("#destination-input").val().trim(),
      arrivalTime: $("#arrival-input").val().trim(),
      frequency: $("#frequency-input").val().trim(),
    }
    
    database.ref().push(trainData);
  });
  
  database.ref().on("child_added", function(snapshot){
  console.log(snapshot.val());
  var newRow = $("<tr>");
  var nameD = $("<td>").text(snapshot.val().name);
  var destD = $("<td>").text(snapshot.val().destination);
  var arrivD = $("<td>").text(snapshot.val().arrivalTime);
  var freqD = $("<td>").text(snapshot.val().frequency);
  newRow.append(nameD, destD, arrivD, freqD);
  $("#train-table").append(newRow);

  console.log(moment().format("DD/MM/YY hh:mm A"));

  
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume train start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  