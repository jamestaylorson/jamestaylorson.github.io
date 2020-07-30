var url = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/5/public/values?alt=json';

$.getJSON(url, function appendData(data) {

  var tableContent = document.getElementById("tablecontent");

  var entries = data.feed.entry;
  console.log(entries);

  for (var i = 0; i < entries.length; i++) {

    var tableRow = document.createElement("tr");

    var str = '<td>' + entries[i].gsx$position.$t + '</td><td>' + entries[i].gsx$team.$t + '</td><td class ="tableAlign">' + entries[i].gsx$weeklyscore.$t + '</td><td class ="tableAlign">' + entries[i].gsx$totals.$t + '</td>';
    tableRow.innerHTML = str;

    tableContent.appendChild(tableRow);

  };
});