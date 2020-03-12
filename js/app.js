var converter = new showdown.Converter();
$(function(){
    $("#nav li").click(function(e) {
        url = $(e.target).attr("data-fetch");
        $.get(url, fillMd);
        bgurl = $(e.target).attr("data-bg");
        $("#detail").css("background-image", "url(\""+ bgurl +"\")");
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