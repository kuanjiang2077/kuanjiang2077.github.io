var converter = new showdown.Converter();
$(function(){
    $("#nav li").click(function(e) {
        url = $(e.target).attr("data-fetch");
        $.get(url, fillMd);
    });

    setup();
});

function setup() {
    url = $("#nav li:first").attr("data-fetch");
    $.get(url, fillMd);
}

function fillMd(md) {
    var html = converter.makeHtml(md);
    hml = $(html);
    hml.find("a").attr("target", "_blank");
    $("#detail").html(hml);
}