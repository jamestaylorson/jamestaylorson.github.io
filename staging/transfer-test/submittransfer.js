
var url = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/of7uz54/public/values?alt=json';
        
        $.getJSON(url,function appendData(data){
            
            // Array holds managers names and emails for populated name at top of transfer card.
            //IMPORTANT that the last object in the array holds blank details
            var managers = [{name: "James", email: "jamestaylorson@gmail.com"},{name: "Aiden", email: "aiden@gmail.com"},{name: "", email: ""}];
            var entries = data.feed.entry;
            console.log(entries);
            var man = document.querySelector(".manager");
            var lpn = document.querySelector(".leftPlayerName");
            var om = document.querySelector(".outMil");
            var lpi = document.querySelector(".leftPlayerImage");
            var pandl = document.querySelector(".PandL");
            var rpn = document.querySelector(".rightPlayerName");
            var im = document.querySelector(".inMil");
            var rpi = document.querySelector(".rightPlayerImage");
            
            document.getElementById("email").addEventListener('change', swapManager);
            document.getElementById("playerOut").addEventListener('change', swapPlayerOut);
            document.getElementById("playerIn").addEventListener('change', swapPlayerIn);
            document.getElementById("playerOut").addEventListener('change', pl);
            document.getElementById("playerIn").addEventListener('change', pl2);

            // Swaps out the managers name based on their email input – see managers array
            function swapManager(){
               var result = managers.find(manager => manager.email === this.value);
               man.textContent = result.name;
            };

            // Swaps out the player being sold
            function swapPlayerOut(){
               var result = entries.find(player => player.gsx$playerfullname.$t === this.value);
               lpn.innerHTML = result.gsx$first.$t + '<br>' +result.gsx$last.$t;
               om.innerHTML = result.gsx$value.$t;
               lpi.innerHTML = '<img src="../img/' + result.gsx$imageid.$t + '_sml.png">';
               a = result.gsx$value.$t;
            };

            // Swaps in the player being bought
            function swapPlayerIn(){
               var result = entries.find(player => player.gsx$playerfullname.$t === this.value);

               rpn.innerHTML = result.gsx$first.$t + '<br>' +result.gsx$last.$t;
               im.innerHTML = result.gsx$value.$t;
               rpi.innerHTML = '<img src="../img/' + result.gsx$imageid.$t + '_sml.png">';
               b = result.gsx$value.$t;
            };

            // function pl1 () {
            //     var pandl = document.getElementsByClassName("PandL")[0];                
            //     var price = a.value - b.value;
            // }

            function pl () {
                var pandl = document.getElementsByClassName("PandL")[0];
                var round = +a;
                pandl.innerHTML = 'P&L ' + round.toFixed(1);
            }

            function pl2 () {
                var pandl = document.getElementsByClassName("PandL")[0];
                var round = a-b;
                pandl.innerHTML = 'P&L ' + round.toFixed(1);
            }

            for (var i=0; i<entries.length; i++) {
              var cont = data.feed.entry[i].gsx$playerfullname.$t;
              arr = [];
              arr.push(cont);

              var playerarray = arr;
                var list = document.getElementById('players');

                playerarray.forEach(function(item){
                   var option = document.createElement('option');
                   option.value = item;
                   list.appendChild(option);
                });
            }
});



             





