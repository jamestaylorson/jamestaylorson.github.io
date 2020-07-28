var url = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/od6/public/values?alt=json';
        
        $.getJSON(url,function appendData(data){

            var mainContainer = document.getElementById("content");
            
            var entries = data.feed.entry;

            for (var i=0; i<entries.length; i++) {

                var ngc = document.createElement("div");ngc.className = 'nested-grid-container';
                var mgr = document.createElement("div");mgr.className = 'manager';
                var lpi = document.createElement("div");lpi.className = 'leftPlayerImage';
                var rpi = document.createElement("div");rpi.className = 'rightPlayerImage';
                var oui = document.createElement("div");oui.className = 'outIcon';
                var ini = document.createElement("div");ini.className = 'inIcon';
                var lpn = document.createElement("div");lpn.className = 'leftPlayerName';
                var rpn = document.createElement("div");rpn.className = 'rightPlayerName';
                var pl = document.createElement("div");pl.className = 'PandL';
                var om = document.createElement("div");om.className = 'outMil';
                var im = document.createElement("div");im.className = 'inMil';
                

                mgr.innerHTML = entries[i].gsx$manager.$t;
                lpi.innerHTML = '<img src=img/' + entries[i].gsx$outimage.$t + '.png>';
                rpi.innerHTML = '<img src=img/' + entries[i].gsx$inimage.$t + '.png>';
                oui.innerHTML = '<img src=img/outIcon.svg>';
                ini.innerHTML = '<img src=img/inIcon.svg>';
                lpn.innerHTML = '<span class="firstName">' + entries[i].gsx$fnout.$t + '</span>' + '<br>' + '<span class="secondName">' + entries[i].gsx$lnout.$t + '</span>';
                rpn.innerHTML = '<span class="firstName">' + entries[i].gsx$fnin.$t + '</span>' + '<br>' + '<span class="secondName">' + entries[i].gsx$lnin.$t + '</span>';
                pl.innerHTML = 'P&L: ' + entries[i].gsx$pandl.$t; + 'm';
                im.innerHTML = entries[i].gsx$buyvalue.$t + 'm';
                om.innerHTML = entries[i].gsx$salevalue.$t + 'm';

                mainContainer.appendChild(ngc);
                ngc.appendChild(mgr);
                ngc.appendChild(lpi);
                ngc.appendChild(rpi);
                ngc.appendChild(oui);
                ngc.appendChild(ini);
                ngc.appendChild(lpn);
                ngc.appendChild(rpn);
                ngc.appendChild(pl);
                ngc.appendChild(om);
                ngc.appendChild(im);
    };
});