
var req =new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET','employees.json',true);
req.onload =function(){
    var jsonResponde=JSON.parse(req.responseText);
    for(let item of jsonResponde){
        console.log(jsonResponde);
        res.innerHTML+= `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.department}</td>
        </tr>
        `
     }

};
req.send(null);
