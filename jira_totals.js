
var totals = document.getElementsByClassName('customfield_10211');
var table = document.getElementById('issuetable');
var tbody = table.firstElementChild;
var total_cols = tbody.children[0].children.length;

// Just the spacer td
var cell = document.createElement("td");
cell.setAttribute('colspan', total_cols-2);

// The td that says "Totals:"
var cell2 = document.createElement("td");
cell2.appendChild(document.createTextNode("Total:"));

// Finally the td that holds the total count
var cell3 = document.createElement("td");

// Now build the row to hold all these tds
var row = document.createElement("tr");
row.setAttribute('class', 'rowNormal');
row.appendChild(cell);
row.appendChild(cell2);
row.appendChild(cell3);
tbody.appendChild(row);

var j = totals.length;
var undefined;
if (j > 0) {
 var total = 0.0;
 for (var i=0; i<j; i++){
     var val = parseFloat(totals[i].innerText);
     if (val !== undefined && typeof(total) == 'number' && val > 0) total += val;
 };
 cell3.appendChild(document.createTextNode(total));
}
