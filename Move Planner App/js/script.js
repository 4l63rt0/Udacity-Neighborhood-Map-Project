
function loadData() {


    var $wikiElem = $('#wikipedia-links');


    // clear out old data before new request
    $wikiElem.text("");
    var cityStr = "Monterrey";

var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
    cityStr + '&format=json&callback=wikiCallback';

var wikiRequestTimeOut = setTimeout(function() {
    $wikiElem.text("failed to get wikipedia resources");
}, 8000);

$.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    success: function( response ) {
        var articleList = response[1];

        for (var i = 0; i < articleList.length; i++) {
          articleStr = articleList[i];
          var url = 'http://en.wikipedia.org/wiki/' + articleStr;
          $wikiElem.append('<li><a href="' + url + '">' + articleStr +
          '</a></li>');
        };
        clearTimeout(wikiRequestTimeOut);
    }
})

    return false;
};

loadData()
