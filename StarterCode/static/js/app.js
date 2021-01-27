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

// // loop through the data and append the table with all sightings to the web page
// renderTable(tableData);

// // filtering the events by date/time

// // select the buttom


// // select the form 


// // create event handlers for clicking the button or pressing the enter key


// // create the function to run for both events


//     // prevent the page from refreshing


//     // select the input element and get the raw HTML node


//     // get the value property of the input element


//     // print the value to the console


//     // filter the data


//     // print the values to the console


//     // clear the existing table


//     // loop through the data and append the table with the filtered sightings to the web page


// };