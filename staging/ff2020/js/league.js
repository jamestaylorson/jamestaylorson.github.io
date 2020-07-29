var data = [{
    'order': '1',
        'name': 'nheco',
        'k': '3',
        'd': '0',
        'score': '121',
        'id': '540'
}, {
    'order': '2',
        'name': 'boingo',
        'k': '15',
        'd': '3',
        'score': '122',
        'id': '541'
}, {
    'order': '3',
        'name': 'Oswaldo',
        'k': '0',
        'd': '23',
        'score': '123',
        'id': '542'
}];

var currentID = 541;

var transform = {
    tag: 'tr',
    children: [{
        "tag": "td",
            "html": "${order}"
    }, {
        "tag": "td",
            "html": "${name}"
    }, {
        "tag": "td",
            "html": "${k}"
    }, {
        "tag": "td",
            "html": "${d}"
    }]
};

$('#placar > tbody ').json2html(data, transform);