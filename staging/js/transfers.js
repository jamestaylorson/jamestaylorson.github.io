var url4 = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/od6/public/values?alt=json';
        
        $.getJSON(url4,function appendData(data){

            var mainContainer = document.getElementById("transfercontent");
            
            var entries = data.feed.entry;
            $.each(entries.reverse(),function(){});
                console.log(entries);

            for (var i=0; i<entries.length; i++) {

                var dh = document.createElement("div");dh.className = 'dateHeader';
                var ngc = document.createElement("div");ngc.className = 'grid-container-transfers';
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
                

                dh.innerHTML = '<span class="dateStyle">' + entries[i].gsx$date.$t + '</span>';
                mgr.innerHTML = entries[i].gsx$manager.$t;
                lpi.innerHTML = '<img data-sizes="auto" data-src="img/' + entries[i].gsx$outimage.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$outimage.$t + '_sml.png 300w, img/' + entries[i].gsx$outimage.$t + '_med.png 400w, img/' + entries[i].gsx$outimage.$t + '_lrg.png 500w" class="lazyload" />';
                rpi.innerHTML = '<img data-sizes="auto" data-src="img/' + entries[i].gsx$inimage.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$inimage.$t + '_sml.png 300w, img/' + entries[i].gsx$inimage.$t + '_med.png 400w, img/' + entries[i].gsx$inimage.$t + '_lrg.png 500w" class="lazyload" />';
                oui.innerHTML = '<img src=img/outIcon.svg>';
                ini.innerHTML = '<img src=img/inIcon.svg>';
                lpn.innerHTML = '<span class="firstName">' + entries[i].gsx$fnout.$t + '</span>' + '<br>' + '<span class="secondName">' + entries[i].gsx$lnout.$t + '</span>';
                rpn.innerHTML = '<span class="firstName">' + entries[i].gsx$fnin.$t + '</span>' + '<br>' + '<span class="secondName">' + entries[i].gsx$lnin.$t + '</span>';
                pl.innerHTML = entries[i].gsx$ple.$t + ' ' + entries[i].gsx$pandl.$t + 'm';
                im.innerHTML = entries[i].gsx$buyvalue.$t + 'm';
                om.innerHTML = entries[i].gsx$salevalue.$t + 'm';

                mainContainer.insertBefore(dh, null);
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







