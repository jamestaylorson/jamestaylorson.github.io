var url5 = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/4/public/values?alt=json';
        
        $.getJSON(url5,function appendData(data){

            var mainContainer = document.getElementById("teamcontent");
            
            var entries = data.feed.entry;
            console.log(entries);

            for (var i=0; i<entries.length; i++) {

                var dh = document.createElement("div");dh.className = 'dateHeader';
                var tgc = document.createElement("div");tgc.className = 'grid-container-teams';
                var mgr = document.createElement("div");mgr.className = 'manager';
                var kep = document.createElement("div");kep.className = 'keeper';
                var kepN = document.createElement("div");kepN.className = 'keeperName';
                var dfc = document.createElement("div");dfc.className = 'defence';
                var dfcN = document.createElement("div");dfcN.className = 'defenceName';
                var mdf = document.createElement("div");mdf.className = 'midfield';
                var mdfN = document.createElement("div");mdfN.className = 'midfieldName';
                var fwd = document.createElement("div");fwd.className = 'forwards';
                var fwdN = document.createElement("div");fwdN.className = 'forwardsName';
                var bchH = document.createElement("div");bchH.className = 'benchHead';
                var bch = document.createElement("div");bch.className = 'bench';
                var bchN = document.createElement("div");bchN.className = 'benchName';
                

                dh.innerHTML = '<span class="dateStyle">' + entries[i].gsx$date.$t + '</span>';
                mgr.innerHTML = entries[i].gsx$manager.$t;
                
                kep.innerHTML = '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$kepimage.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$kepimage.$t + '_sml.png 300w, img/' + entries[i].gsx$kepimage.$t + '_med.png 400w, img/' + entries[i].gsx$kepimage.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>';
                kepN.innerHTML = '<div class="name">' + entries[i].gsx$kepln.$t + '</div>';
                
                dfc.innerHTML = '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$defimage.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$defimage.$t + '_sml.png 300w, img/' + entries[i].gsx$defimage.$t + '_med.png 400w, img/' + entries[i].gsx$defimage.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$defimage_2.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$defimage_2.$t + '_sml.png 300w, img/' + entries[i].gsx$defimage_2.$t + '_med.png 400w, img/' + entries[i].gsx$defimage_2.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$defimage_3.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$defimage_3.$t + '_sml.png 300w, img/' + entries[i].gsx$defimage_3.$t + '_med.png 400w, img/' + entries[i].gsx$defimage_3.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$defimage_4.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$defimage_4.$t + '_sml.png 300w, img/' + entries[i].gsx$defimage_4.$t + '_med.png 400w, img/' + entries[i].gsx$defimage_4.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$defimage_5.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$defimage_5.$t + '_sml.png 300w, img/' + entries[i].gsx$defimage_5.$t + '_med.png 400w, img/' + entries[i].gsx$defimage_5.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>';
                dfcN.innerHTML = '<div class="name">' + entries[i].gsx$defln.$t + '</div>' + '<div class="name">' + entries[i].gsx$defln_2.$t + '</div>' + '<div class="name">' + entries[i].gsx$defln_3.$t + '</div>' + '<div class="name">' + entries[i].gsx$defln_4.$t + '</div>' + '<div class="name">' + entries[i].gsx$defln_5.$t + '</div>';
                
                mdf.innerHTML = '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$midimage.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$midimage.$t + '_sml.png 300w, img/' + entries[i].gsx$midimage.$t + '_med.png 400w, img/' + entries[i].gsx$midimage.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$midimage_2.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$midimage_2.$t + '_sml.png 300w, img/' + entries[i].gsx$midimage_2.$t + '_med.png 400w, img/' + entries[i].gsx$midimage_2.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$midimage_3.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$midimage_3.$t + '_sml.png 300w, img/' + entries[i].gsx$midimage_3.$t + '_med.png 400w, img/' + entries[i].gsx$midimage_3.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$midimage_4.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$midimage_4.$t + '_sml.png 300w, img/' + entries[i].gsx$midimage_4.$t + '_med.png 400w, img/' + entries[i].gsx$midimage_4.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$midimage_5.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$midimage_5.$t + '_sml.png 300w, img/' + entries[i].gsx$midimage_5.$t + '_med.png 400w, img/' + entries[i].gsx$midimage_5.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>';
                mdfN.innerHTML = '<div class="name">' + entries[i].gsx$midln.$t + '</div>' + '<div class="name">' + entries[i].gsx$midln_2.$t + '</div>' + '<div class="name">' + entries[i].gsx$midln_3.$t + '</div>' + '<div class="name">' + entries[i].gsx$midln_4.$t + '</div>' + '<div class="name">' + entries[i].gsx$midln_5.$t + '</div>';
                
                fwd.innerHTML = '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$fwdimage.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$fwdimage.$t + '_sml.png 300w, img/' + entries[i].gsx$fwdimage.$t + '_med.png 400w, img/' + entries[i].gsx$fwdimage.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$fwdimage_2.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$fwdimage_2.$t + '_sml.png 300w, img/' + entries[i].gsx$fwdimage_2.$t + '_med.png 400w, img/' + entries[i].gsx$fwdimage_2.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$fwdimage_3.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$fwdimage_3.$t + '_sml.png 300w, img/' + entries[i].gsx$fwdimage_3.$t + '_med.png 400w, img/' + entries[i].gsx$fwdimage_3.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>';
                fwdN.innerHTML = '<div class="name">' + entries[i].gsx$fwdln.$t + '</div>' + '<div class="name">' + entries[i].gsx$fwdln_2.$t + '</div>' + '<div class="name">' + entries[i].gsx$fwdln_3.$t + '</div>';
                
                bchH.innerHTML = '<p>SUBS BENCH</p>' ;
                bch.innerHTML = '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$bchimage.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$bchimage.$t + '_sml.png 300w, img/' + entries[i].gsx$bchimage.$t + '_med.png 400w, img/' + entries[i].gsx$bchimage.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$bchimage_2.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$bchimage_2.$t + '_sml.png 300w, img/' + entries[i].gsx$bchimage_2.$t + '_med.png 400w, img/' + entries[i].gsx$bchimage_2.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>' + '<div class="player"><img data-sizes="auto" data-src="img/' + entries[i].gsx$bchimage_3.$t + '_xsml.png" data-srcset="img/' + entries[i].gsx$bchimage_3.$t + '_sml.png 300w, img/' + entries[i].gsx$bchimage_3.$t + '_med.png 400w, img/' + entries[i].gsx$bchimage_3.$t + '_lrg.png 500w" class="lazyload" onerror="$(this.parentNode).hide();"></div>';
                bchN.innerHTML = '<div class="name">' + entries[i].gsx$bchln.$t + '</div>' + '<div class="name">' + entries[i].gsx$bchln_2.$t + '</div>' + '<div class="name">' + entries[i].gsx$bchln_3.$t + '</div>';
                mainContainer.insertBefore(dh, null);                
                mainContainer.appendChild(tgc);
                tgc.appendChild(mgr);
                tgc.appendChild(kep);
                tgc.appendChild(kepN);
                tgc.appendChild(dfc);
                tgc.appendChild(dfcN);
                tgc.appendChild(mdf);
                tgc.appendChild(mdfN);
                tgc.appendChild(fwd);
                tgc.appendChild(fwdN);
                tgc.appendChild(bchH);
                tgc.appendChild(bch);
                tgc.appendChild(bchN);
       
    };
    $(".name:empty").hide();
});