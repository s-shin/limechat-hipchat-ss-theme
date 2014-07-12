// クエリに日本語を含むURLをデコードして見やすくする。
document.addEventListener("DOMNodeInserted", function(e) {
  var line = e.target;
  var urls = line.getElementsByClassName("url");
  for (var i = 0; i < urls.length; ++i) {
    var url = urls[i];
    url.textContent = decodeURIComponent(url.href);
  }
});
