var url3 = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/oqf3jxg/public/values?alt=json';
        
        $.getJSON(url3,function appendData(data){

            // Overall table
            var tpt = document.getElementById("topPointsTitle");
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

            // Weekly table
            var tpt2 = document.getElementById("topPointsTitle2");
            var image6 = document.getElementById("image6");
            var image7 = document.getElementById("image7");
            var image8 = document.getElementById("image8");
            var image9 = document.getElementById("image9");
            var image10 = document.getElementById("image10");

            var name6 = document.getElementById("name6");
            var name7 = document.getElementById("name7");
            var name8 = document.getElementById("name8");
            var name9 = document.getElementById("name9");
            var name10 = document.getElementById("name10");

            var points6 = document.getElementById("points6");
            var points7 = document.getElementById("points7");
            var points8 = document.getElementById("points8");
            var points9 = document.getElementById("points9");
            var points10 = document.getElementById("points10");

            var ffm6 = document.getElementById("ffm6");
            var ffm7 = document.getElementById("ffm7");
            var ffm8 = document.getElementById("ffm8");
            var ffm9 = document.getElementById("ffm9");
            var ffm10 = document.getElementById("ffm10");

            // Overall table
            var ir1 = data.feed.entry[0].gsx$image.$t;
            var ir2 = data.feed.entry[1].gsx$image.$t;
            var ir3 = data.feed.entry[2].gsx$image.$t;
            var ir4 = data.feed.entry[3].gsx$image.$t;
            var ir5 = data.feed.entry[4].gsx$image.$t;

            var pn1 = data.feed.entry[0].gsx$fullname.$t;
            var pn2 = data.feed.entry[1].gsx$fullname.$t;
            var pn3 = data.feed.entry[2].gsx$fullname.$t;
            var pn4 = data.feed.entry[3].gsx$fullname.$t;
            var pn5 = data.feed.entry[4].gsx$fullname.$t;

            var pts1 = data.feed.entry[0].gsx$pts.$t;
            var pts2 = data.feed.entry[1].gsx$pts.$t;
            var pts3 = data.feed.entry[2].gsx$pts.$t;
            var pts4 = data.feed.entry[3].gsx$pts.$t;
            var pts5 = data.feed.entry[4].gsx$pts.$t;

            var ob1 = data.feed.entry[0].gsx$ownedby.$t;
            var ob2 = data.feed.entry[1].gsx$ownedby.$t;
            var ob3 = data.feed.entry[2].gsx$ownedby.$t;
            var ob4 = data.feed.entry[3].gsx$ownedby.$t;
            var ob5 = data.feed.entry[4].gsx$ownedby.$t;

            // Weekly table
            var ir6 = data.feed.entry[0].gsx$image_3.$t;
            var ir7 = data.feed.entry[1].gsx$image_3.$t;
            var ir8 = data.feed.entry[2].gsx$image_3.$t;
            var ir9 = data.feed.entry[3].gsx$image_3.$t;
            var ir10 = data.feed.entry[4].gsx$image_3.$t;

            var pn6 = data.feed.entry[0].gsx$fullname_3.$t;
            var pn7 = data.feed.entry[1].gsx$fullname_3.$t;
            var pn8 = data.feed.entry[2].gsx$fullname_3.$t;
            var pn9 = data.feed.entry[3].gsx$fullname_3.$t;
            var pn10 = data.feed.entry[4].gsx$fullname_3.$t;

            var pts6 = data.feed.entry[0].gsx$pts_2.$t;
            var pts7 = data.feed.entry[1].gsx$pts_2.$t;
            var pts8 = data.feed.entry[2].gsx$pts_2.$t;
            var pts9 = data.feed.entry[3].gsx$pts_2.$t;
            var pts10 = data.feed.entry[4].gsx$pts_2.$t;

            var ob6 = data.feed.entry[0].gsx$ownedby_2.$t;
            var ob7 = data.feed.entry[1].gsx$ownedby_2.$t;
            var ob8 = data.feed.entry[2].gsx$ownedby_2.$t;
            var ob9 = data.feed.entry[3].gsx$ownedby_2.$t;
            var ob10 = data.feed.entry[4].gsx$ownedby_2.$t;

            // Overall table
            tpt.innerHTML = '<p>Top Points Overall</p>';
            image1.innerHTML = '<img data-sizes="auto" data-src="img/' + ir1 + '_xsml.png" data-srcset="img/' + ir1 + '_sml.png 300w, img/' + ir1 + '_med.png 400w, img/' + ir1 + '_lrg.png 500w" class="lazyload">';
            name1.innerHTML = pn1;
            points1.innerHTML = pts1;
            ffm1.innerHTML = "owned by " + "<br>" + ob1;

            image2.innerHTML = '<img data-sizes="auto" data-src="img/' + ir2 + '_xsml.png" data-srcset="img/' + ir2 + '_sml.png 300w, img/' + ir2 + '_med.png 400w, img/' + ir2 + '_lrg.png 500w" class="lazyload">';
            name2.innerHTML = pn2;
            points2.innerHTML = pts2;
            ffm2.innerHTML = "owned by " + "<br>" + ob2;

            image3.innerHTML = '<img data-sizes="auto" data-src="img/' + ir3 + '_xsml.png" data-srcset="img/' + ir3 + '_sml.png 300w, img/' + ir3 + '_med.png 400w, img/' + ir3 + '_lrg.png 500w" class="lazyload">';
            name3.innerHTML = pn3;
            points3.innerHTML = pts3;
            ffm3.innerHTML = "owned by " + "<br>" + ob3;

            image4.innerHTML = '<img data-sizes="auto" data-src="img/' + ir4 + '_xsml.png" data-srcset="img/' + ir4 + '_sml.png 400w, img/' + ir4 + '_med.png 400w, img/' + ir4 + '_lrg.png 500w" class="lazyload">';
            name4.innerHTML = pn4;
            points4.innerHTML = pts4;
            ffm4.innerHTML = "owned by " + "<br>" + ob4;

            image5.innerHTML = '<img data-sizes="auto" data-src="img/' + ir5 + '_xsml.png" data-srcset="img/' + ir5 + '_sml.png 500w, img/' + ir5 + '_med.png 500w, img/' + ir5 + '_lrg.png 500w" class="lazyload">';
            name5.innerHTML = pn5;
            points5.innerHTML = pts5;
            ffm5.innerHTML = "owned by " + "<br>" + ob5;

            // Weekly table
            tpt2.innerHTML = '<p>Top Points This Week</p>';
            image6.innerHTML = '<img data-sizes="auto" data-src="img/' + ir6 + '_xsml.png" data-srcset="img/' + ir6 + '_sml.png 300w, img/' + ir6 + '_med.png 400w, img/' + ir6 + '_lrg.png 500w" class="lazyload">';
            name6.innerHTML = pn6;
            points6.innerHTML = pts6;
            ffm6.innerHTML = "owned by " + "<br>" + ob6;

            image7.innerHTML = '<img data-sizes="auto" data-src="img/' + ir7 + '_xsml.png" data-srcset="img/' + ir7 + '_sml.png 300w, img/' + ir7 + '_med.png 400w, img/' + ir7 + '_lrg.png 500w" class="lazyload">';
            name7.innerHTML = pn7;
            points7.innerHTML = pts7;
            ffm7.innerHTML = "owned by " + "<br>" + ob7;

            image8.innerHTML = '<img data-sizes="auto" data-src="img/' + ir8 + '_xsml.png" data-srcset="img/' + ir8 + '_sml.png 300w, img/' + ir8 + '_med.png 400w, img/' + ir8 + '_lrg.png 500w" class="lazyload">';
            name8.innerHTML = pn8;
            points8.innerHTML = pts8;
            ffm8.innerHTML = "owned by " + "<br>" + ob8;

            image9.innerHTML = '<img data-sizes="auto" data-src="img/' + ir9 + '_xsml.png" data-srcset="img/' + ir9 + '_sml.png 400w, img/' + ir9 + '_med.png 400w, img/' + ir9 + '_lrg.png 500w" class="lazyload">';
            name9.innerHTML = pn9;
            points9.innerHTML = pts9;
            ffm9.innerHTML = "owned by " + "<br>" + ob9;

            image10.innerHTML = '<img data-sizes="auto" data-src="img/' + ir10 + '_xsml.png" data-srcset="img/' + ir10 + '_sml.png 500w, img/' + ir10 + '_med.png 500w, img/' + ir10 + '_lrg.png 500w" class="lazyload">';
            name10.innerHTML = pn10;
            points10.innerHTML = pts10;
            ffm10.innerHTML = "owned by " + "<br>" + ob10;




});