function buildTable() {
  var rows = document.getElementById("setRows").value;
  var cols = document.getElementById("setCols").value;

  var table = "<table>";
  table += "<tbody>";
 
 

  for (i = 0; i < rows; i++) {
    table += "<tr>";
    
  

    for (t = 0; t < cols; t++) {
      table += "<td>Row&nbsp;"+i+", Col&nbsp;"+t+"</td>";
     
    }


    table += "</tr>";
  }

  table += "</tbody>";
  table += "</table>";

  document.getElementById("tableHolder").innerHTML = table;
}
