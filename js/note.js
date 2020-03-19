var converter = new showdown.Converter();
var DEFAULT_MD = "all";
var PREFIX = "";

$(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("note")) {
    md = urlParams.get("note");
  } else {
    md = DEFAULT_MD;
    PREFIX = "/note.html?note=";
  }
  fetch(md);
});

function fetch(md) {
  const prefix = "md/notes/";
  const postfix = ".md";
  $.get(prefix + md + postfix, function(data) {
    fillMd(data);
  });
}

function fillMd(md) {
  var html = converter.makeHtml(md);
  $html = $(html);
  $html.find("a").each(function(i, a) {
    $a = $(a);
    old = $a.attr("href");
    $a.attr("href", PREFIX + old);
  });
  $("#note").html($html);
  PREFIX = "";
}
