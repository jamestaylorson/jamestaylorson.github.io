var url = 'https://spreadsheets.google.com/feeds/list/1_uPcFXdW5Qv9KmgZ69ESl6afIl84RAYO_2Ktxq5nwr0/ormaz1w/public/values?alt=json';
        
        $.getJSON(url,function appendData(data){
           
            var entries = data.feed.entry;

            var option = "";
            var option2 = "";

            for (let i = 0; i < entries.length; i++)
            
            {option += '<option value="' + entries[i].gsx$playerfullname.$t + '">';}
            //{option2 += '<option value="' + entries[i].gsx$playerfullname.$t + '">';}


            $("#options").html(option);
            $("#options2").html(option);               
    
});







