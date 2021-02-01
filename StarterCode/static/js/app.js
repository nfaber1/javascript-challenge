// // from data.js
var tableData = data;

// // YOUR CODE HERE!
console.log(tableData)

data.forEach(function(tableData) {
  console.log(tableData);
});

var tbody = d3.select("tbody");

var row = tbody.append("tr");

data.forEach(function(tableData) {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
        row.append("td").text(value);
  });
});

data.forEach(function(tableData) {
      console.log(tableData);
      var row = tbody.append("tr");
        Object.entries(tableData).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
  });
});

data.forEach(function(tableData) {
      console.log(tableData);
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
      });
  });

form.on("submit",runEnter);

function runEnter() {
  
  d3.event.preventDefault();
  
  var inputElement = d3.select("#datetime").property("value");
  
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);
  console.log(tableData);
  
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
  console.log(filteredData);
  
  d3.select("summary").text(inputValue);

  d3.select("tbody").html("")

  renderTable(filteredData);

};