// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var tbody = d3.select("tbody");
// });
    var row = tbody.append("tr");
  
    Object.entries(ufoSightings).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    });
  });

// // loop through the data and append the table with all sightings to the web page
renderTable(
    tableData);

// // filtering the events by date/time

// // select the buttom
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
};