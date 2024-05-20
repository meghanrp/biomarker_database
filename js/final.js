function runSearch(search_term) {

    $('#results').hide();
    $('tbody').empty();

    var frmStr = $('#biomarker_search').serialize();

    $.ajax({
        url: './final.cgi',
        dataType: 'json',
        data: frmStr,
        success: function(data, textStatus, jqXHR) {
            processJSON(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert("Failed to perform gene search! textStatus: (" + textStatus +
                  ") and errorThrown: (" + errorThrown + ")");
        }
    });
}

function processJSON(data) {
    $('#match_count').text(data.match_count);

    var next_row_num = 1;

    $.each(data.matches, function (i, item) {
        $("#myTable").append("<tr><td>" + item.biomarker + "</td><td><a href =" + item.geneURL + ">" + item.gene + "</a></td><td><a href =" + item.proteinURL + ">" + item.protein + "</a></td><td><textarea id ="+item.proteinNum+">" + item.proteinSeq + "</textarea><button class='btn' data-clipboard-action='cut' data-clipboard-target="+item.proteinHash+">" + "Cut To Clipboard" + "</button></td><td><a href =" + item.drugInfo + ">" + item.drug + "</a></td><td><textarea id ="+item.geneNum+">" + item.canonical + "</textarea><button class='btn' data-clipboard-action='cut' data-clipboard-target="+item.geneHash+">" + "Cut To Clipboard" + "</button></td><td><img height='100' width='100' src=" + item.drugSVG + "></td><td>"+ item.disease + "</td></tr>");
    });
    $('#results').show();
}

$(document).ready(function () {
    $('#search_query').autocomplete({
        source: function (request, response) {
            $.ajax({
                url: './final.cgi',
                dataType: 'json',
                maxResults: 5,
                data: {
                    maxRows: 5,
                    search_query: request.term
                },
                success: function (data) {
                    response($.map(data.matches, function (item) {
                        return {
                            label: item.biomarker,
                            value: item.biomarker
                        }
                    }));
                }
            });
        }
    });
    $('#submit').click(function () {
        runSearch();
        new ClipboardJS('.btn');
        return false;
    });
});
