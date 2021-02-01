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
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// renderTable(tableData);

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime").property("value");

  var inputValue = inputElement.property("value");

  console.log(inputElement);

  var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === inputElement);

  console.log(filteredData);

  d3.select("tbody").html("")

  renderTable(filteredData);

};