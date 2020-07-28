var url = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/od6/public/values?alt=json';
        
        $.getJSON(url,function appendData(data){

            var mainContainer = document.getElementsByClassName("nested-grid-container");
            
            var entries = data.feed.entry;

            for (var i=0; i<entries.length; i++) {

                var div = document.createElement("div"); div.classList.add("manager");
                var div = document.createElement("div"); div.classList.add("leftPlayerImage");
                var div = document.createElement("div"); div.classList.add("rightPlayerImage");
                var div = document.createElement("div"); div.classList.add("leftPlayerName");
                var div = document.createElement("div"); div.classList.add("rightPlayerName");
                var div = document.createElement("div"); div.classList.add("PandL");
                var div = document.createElement("div"); div.classList.add("outMil");
                var div = document.createElement("div"); div.classList.add("inMil");

                var mgr = document.getElementsByClassName("manager");
                var lpi = document.getElementsByClassName("leftPlayerImage");
                var rpi = document.getElementsByClassName("rightPlayerImage");
                var lpn = document.getElementsByClassName("leftPlayerName");
                var rpn = document.getElementsByClassName("rightPlayerName");
                var pl = document.getElementsByClassName("PandL");
                var om = document.getElementsByClassName("outMil");
                var im = document.getElementsByClassName("inMil");
                
                mgr.innerHTML = entries[i].gsx$manager.$t;
                lpi.innerHTML = '<img src=img/' + entries[i].gsx$outimage.$t + '.png>';
                rpi.innerHTML = '<img src=img/' + entries[i].gsx$inimage.$t + '.png>';
                lpn.innerHTML = entries[i].gsx$transferout.$t;
                rpn.innerHTML = entries[i].gsx$transferin.$t;
                pl.innerHTML = entries[i].gsx$manager.$t;
                im.innerHTML = entries[i].gsx$salevalue.$t;
                om.innerHTML = entries[i].gsx$buyvalue.$t;
            

                mainContainer.appendChild(mgr);
                mainContainer.appendChild(lpi);
                mainContainer.appendChild(rpi);
                mainContainer.appendChild(lpn);
                mainContainer.appendChild(rpn);
                mainContainer.appendChild(pl);
                mainContainer.appendChild(om);
                mainContainer.appendChild(im);

    };
});