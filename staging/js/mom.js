var url2 = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/olin611/public/values?alt=json';
        
        $.getJSON(url2,function appendData(data){

            var mc = document.getElementById("grid-container-mom");
            
            var entries = data.feed.entry;

            for (var i=0; i<entries.length; i++) {
                var awd = document.createElement("div");awd.className = 'award';
                var win = document.createElement("div");win.className = 'winner';
                var fun = document.createElement("div");fun.className = 'fun';fun.setAttribute("style", "background-size: cover; background-image: url(" + entries[i].gsx$gifurl.$t + ")");
                
                
                awd.innerHTML = '<img src="img/mom.png"">';
                win.innerHTML = '<p class="month">' + entries[i].gsx$month.$t + '</p><p class="momText">Manager of the month award</p><p class="winnerText">' + entries[i].gsx$manager.$t + '</p>';
                
                mc.appendChild(awd);
                mc.appendChild(win);
                mc.appendChild(fun);
         
         };       
    });







