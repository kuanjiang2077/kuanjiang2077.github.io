var converter = new showdown.Converter();
var DEFAULT_MD = 'all';

$(function(){
    const urlParams = new URLSearchParams(window.location.search);
    md = urlParams.get('note');
    if (md == null) {
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
    hml.find("a").attr("target", "_blank");
    $("#note").html(hml);
}