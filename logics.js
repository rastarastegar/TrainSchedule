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
    apiKey: "AIzaSyA9LBK4zO-VfWgJM3TTxmyEVGAwqbkYmYw",
    authDomain: "timesheet-19e46.firebaseapp.com",
    databaseURL: "https://timesheet-19e46.firebaseio.com",
    projectId: "timesheet-19e46",
    storageBucket: "timesheet-19e46.appspot.com",
    messagingSenderId: "505941642862"
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
  console.log(snapshot).val();
  $("#train-table").append("<tr><td>" + name + "</td></tr>")
  
  console.log(moment().format("DD/MM/YY hh:mm A"));

  
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume train start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  