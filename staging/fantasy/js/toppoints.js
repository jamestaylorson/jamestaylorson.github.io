var url = 'https://spreadsheets.google.com/feeds/list/1O213s-JsDtRxLEg3uKb3sruvbNK_ymZFXi7tjIeCclc/3/public/values?alt=json';
        
        $.getJSON(url,function appendData(data){

            var pointsTitle = document.getElementById("pointsScorerTitle");
            var image1 = document.getElementById("image1");
            var image2 = document.getElementById("image2");
            var image3 = document.getElementById("image3");
            var image4 = document.getElementById("image4");
            var image5 = document.getElementById("image5");

            var name1 = document.getElementById("name1");
            var name2 = document.getElementById("name2");
            var name3 = document.getElementById("name3");
            var name4 = document.getElementById("name4");
            var name5 = document.getElementById("name5");

            var points1 = document.getElementById("points1");
            var points2 = document.getElementById("points2");
            var points3 = document.getElementById("points3");
            var points4 = document.getElementById("points4");
            var points5 = document.getElementById("points5");

            var ffm1 = document.getElementById("ffm1");
            var ffm2 = document.getElementById("ffm2");
            var ffm3 = document.getElementById("ffm3");
            var ffm4 = document.getElementById("ffm4");
            var ffm5 = document.getElementById("ffm5");

            var ir1 = data.feed.entry[0].gsx$imageref.$t;
            var ir2 = data.feed.entry[1].gsx$imageref.$t;
            var ir3 = data.feed.entry[2].gsx$imageref.$t;
            var ir4 = data.feed.entry[3].gsx$imageref.$t;
            var ir5 = data.feed.entry[4].gsx$imageref.$t;

            var pn1 = data.feed.entry[0].gsx$playername.$t;
            var pn2 = data.feed.entry[1].gsx$playername.$t;
            var pn3 = data.feed.entry[2].gsx$playername.$t;
            var pn4 = data.feed.entry[3].gsx$playername.$t;
            var pn5 = data.feed.entry[4].gsx$playername.$t;

            var pts1 = data.feed.entry[0].gsx$points.$t;
            var pts2 = data.feed.entry[1].gsx$points.$t;
            var pts3 = data.feed.entry[2].gsx$points.$t;
            var pts4 = data.feed.entry[3].gsx$points.$t;
            var pts5 = data.feed.entry[4].gsx$points.$t;

            topPointsTitle.innerHTML = '<p>Top Points</p>';
            image1.innerHTML = '<img data-sizes="auto" data-src="img/' + ir1 + '_xsml.png" data-srcset="img/' + ir1 + '_sml.png 300w, img/' + ir1 + '_med.png 400w, img/' + ir1 + '_lrg.png 500w" class="lazyload">';
            name1.innerHTML = pn1;
            points1.innerHTML = pts1 + " pts";
            ffm1.innerHTML = "owned by " + "<br>" + "Aiden";

            image2.innerHTML = '<img data-sizes="auto" data-src="img/' + ir2 + '_xsml.png" data-srcset="img/' + ir2 + '_sml.png 300w, img/' + ir2 + '_med.png 400w, img/' + ir2 + '_lrg.png 500w" class="lazyload">';
            name2.innerHTML = pn2;
            points2.innerHTML = pts2 + " pts";
            ffm2.innerHTML = "owned by " + "<br>" + "Daryl";

            image3.innerHTML = '<img data-sizes="auto" data-src="img/' + ir3 + '_xsml.png" data-srcset="img/' + ir3 + '_sml.png 300w, img/' + ir3 + '_med.png 400w, img/' + ir3 + '_lrg.png 500w" class="lazyload">';
            name3.innerHTML = pn3;
            points3.innerHTML = pts3 + " pts";
            ffm3.innerHTML = "owned by " + "<br>" + "Chris";

            image4.innerHTML = '<img data-sizes="auto" data-src="img/' + ir4 + '_xsml.png" data-srcset="img/' + ir4 + '_sml.png 400w, img/' + ir4 + '_med.png 400w, img/' + ir4 + '_lrg.png 500w" class="lazyload">';
            name4.innerHTML = pn4;
            points4.innerHTML = pts4 + " pts";
            ffm4.innerHTML = "owned by " + "<br>" + "Stephan";

            image5.innerHTML = '<img data-sizes="auto" data-src="img/' + ir5 + '_xsml.png" data-srcset="img/' + ir5 + '_sml.png 500w, img/' + ir5 + '_med.png 500w, img/' + ir5 + '_lrg.png 500w" class="lazyload">';
            name5.innerHTML = pn5;
            points5.innerHTML = pts5 + " pts";
            ffm5.innerHTML = "owned by " + "<br>" + "Roger";

});