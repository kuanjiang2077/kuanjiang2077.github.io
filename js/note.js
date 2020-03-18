var converter = new showdown.Converter();
var DEFAULT_MD = 'all';

$(function(){
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('note')) {
        md = urlParams.get('note');
    } else {
        md = DEFAULT_MD;
    }
    fetch(md);
});

function fetch(md) {
    const prefix = "md/";
    const postfix = ".md";
    $.get(prefix + md + postfix, function(data){
        fillMd(data);
    });
}

function fillMd(md) {
    var html = converter.makeHtml(md);
    hml = $(html);
    $("#note").html(hml);
}