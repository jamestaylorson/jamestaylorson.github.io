var url1 = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/7/public/values?alt=json';
        
        $.getJSON(url1,function appendData(data){

            
            var gw = data.feed.entry[0].gsx$gameweek.$t;
            var y = data.feed.entry[0].gsx$year.$t;
            var m = data.feed.entry[0].gsx$month.$t;
            var d = data.feed.entry[0].gsx$day.$t;
            var h = data.feed.entry[0].gsx$hour.$t;
            var min = data.feed.entry[0].gsx$min.$t;
            var dyd = data.feed.entry[0].gsx$nexttransferwindow.$t;
            var led = data.feed.entry[0].gsx$leader.$t;
            
            var gwv = document.getElementById("gameweekDynamic");
            gwv.innerHTML = gw;

            var ldy = document.getElementById("leaderDynamic");
            ldy.innerHTML = led;

            var dd = document.getElementById("deadlineDynamic");
            dd.innerHTML = "(" + dyd + " at 10am GMT)";

       
$(function () {
    var transferWindow = new Date();
    transferWindow = new Date(y, m - 1, d, h, min);
    $('#defaultCountdown').countdown({ 
      until: $.countdown.UTCDate(+1, transferWindow), onExpiry: twindowopen});
  });
  function twindowopen() {document.getElementById("defaultCountdown").innerHTML = "Transfer window open";}

  });