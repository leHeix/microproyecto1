document.addEventListener("DOMContentLoaded", (event) => {
    var userdata = localStorage.getItem("history");

    if(userdata)
    {
        userdata = JSON.parse(userdata);
        userdata = Object.fromEntries(Object.entries(userdata).sort(([, a], [, b]) => a.top - b.top));
        
        var table = document.getElementById("rankings-table");


        for(const [name, stats] of Object.entries(userdata))
        {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = name;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = stats.top;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = stats.date;
        }

    }
});