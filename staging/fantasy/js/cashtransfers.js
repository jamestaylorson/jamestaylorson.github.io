var url6 = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/omme07/public/values?alt=json';

$.getJSON(url6, function appendData(data) {

  var tableContent = document.getElementById("tablecontent");

  var entries = data.feed.entry;
  console.log(entries);

  for (var i = 0; i < entries.length; i++) {

    var tableRow = document.createElement("tr");

    var str = '<td class ="ctNameAlign">' + entries[i].gsx$team.$t + '</td><td class ="ctCashAlign">' + '£' + entries[i].gsx$cashremaining.$t + 'm' + '</td><td class ="tableAlign">' + entries[i].gsx$transfersremaining.$t + '</td>';
    tableRow.innerHTML = str;

    tableContent.appendChild(tableRow); 

  };
});
