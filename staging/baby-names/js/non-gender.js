window.onload = function() {
    var quoteSpan     = document.getElementById("quoteText");
    var submitButton  = document.getElementById('submit');
    var oldQuoteIndex = -1;
    var newQuoteIndex = -1;
    var quotes        = [
		{'text': 'Alexis'},{'text': 'Amari'},{'text': 'Angel'},{'text': 'Ari'},{'text': 'Ariel'},{'text': 'Armani'},{'text': 'Avery'},{'text': 'Azariah'},{'text': 'Blake'},{'text': 'Briar'},{'text': 'Cameron'},{'text': 'Carter'},{'text': 'Casey'},{'text': 'Charlie'},{'text': 'Dakota'},{'text': 'Dallas'},{'text': 'Dylan'},{'text': 'Eden'},{'text': 'Elliot'},{'text': 'Elliott'},{'text': 'Ellis'},{'text': 'Emerson'},{'text': 'Emery'},{'text': 'Emory'},{'text': 'Finley'},{'text': 'Frankie'},{'text': 'Harley'},{'text': 'Harper'},{'text': 'Hayden'},{'text': 'Hunter'},{'text': 'Jamie'},{'text': 'Jayden'},{'text': 'Jessie'},{'text': 'Jordan'},{'text': 'Justice'},{'text': 'Kai'},{'text': 'Kamryn'},{'text': 'Karter'},{'text': 'Kendall'},{'text': 'Landry'},{'text': 'Leighton'},{'text': 'Lennon'},{'text': 'Lennox'},{'text': 'Logan'},{'text': 'London'},{'text': 'Lyric'},{'text': 'Marley'},{'text': 'Micah'},{'text': 'Milan'},{'text': 'Morgan'},{'text': 'Nova'},{'text': 'Oakley'},{'text': 'Parker'},{'text': 'Payton'},{'text': 'Peyton'},{'text': 'Phoenix'},{'text': 'Quinn'},{'text': 'Reagan'},{'text': 'Reese'},{'text': 'Reign'},{'text': 'Remington'},{'text': 'Remy'},{'text': 'Riley'},{'text': 'River'},{'text': 'Rory'},{'text': 'Rowan'},{'text': 'Royal'},{'text': 'Ryan'},{'text': 'Rylan'},{'text': 'Sage'},{'text': 'Sawyer'},{'text': 'Shiloh'},{'text': 'Skylar'},{'text': 'Skyler'},{'text': 'Spencer'},{'text': 'Sutton'},{'text': 'Tatum'},{'text': 'Taylor'},{'text': 'Zion'},
		];  
    function nextQuote() {
        while (newQuoteIndex == oldQuoteIndex) {
            newQuoteIndex = Math.floor(Math.random() * quotes.length);
        }

        quoteSpan.innerHTML  = quotes[newQuoteIndex].text; //make HTML's quoteText random quote

        oldQuoteIndex = newQuoteIndex;
    }
    submitButton.onclick = nextQuote;
}

