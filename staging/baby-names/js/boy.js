window.onload = function() {
    var quoteSpan     = document.getElementById("quoteText");
    var submitButton  = document.getElementById('submit');
    var oldQuoteIndex = -1;
    var newQuoteIndex = -1;
    var quotes        = [
        {'text': 'Jerome'},
        {'text': 'Bob'},
        {'text': 'Smithy'},
        {'text': 'Fred'},
        {'text': 'Horrace'},
        {'text': 'Kevin'},
        {'text': 'Jezza'},
        {'text': 'Colin'},
        {'text': 'Wanker'},
        {'text': 'Van'},
        {'text': 'Steve'},
        {'text': 'Scaffy'},

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

