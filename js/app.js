var converter = new showdown.Converter();
var DEFAULT_MD = "study";

$(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("category")) {
    md = urlParams.get("category");
  } else {
    md = DEFAULT_MD;
  }
  breadCrumbs(md);
  fetchAndFill(md);
});

function breadCrumbs(md) {
  $("#bread").html("bookmark / " + md);
}

function fetchAndFill(md) {
  const prefix = "md/";
  const postfix = ".md";
  $.get(prefix + md + postfix, function(data) {
    fill(data);
  });
}

function fill(md) {
  var html = converter.makeHtml(md);
  $html = $(html);
  $html.find("a").attr("target", "_blank");
  $("#detail").html($html);
}
