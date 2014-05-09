---
---
require([
  '/public/js/jquery-2.1.1.min.js',
  '/public/js/lunr.min.js',
], function (_, lunr) {

  var docs =
  [
  {% for page in site.pages limit:100 %}
    {% include page.json %},
  {% endfor %}
  ];
  // init lunr
  var idx = lunr(function () {
    this.field('title', 10);
    this.field('content');
  })
  // add each document to be index
  for(var index in docs) {
    idx.add(docs[index]);
  }
  console.log(idx);

  var debounce = function (fn) {
    var timeout
    return function () {
      var args = Array.prototype.slice.call(arguments),
          ctx = this

      clearTimeout(timeout)
      timeout = setTimeout(function () {
        fn.apply(ctx, args)
      }, 100)
    }
  }

  $('#search').bind('keyup', debounce(function () {
    if ($(this).val() < 2) return
    var query = $(this).val()
    var results = $.map(this.index.search(query), function(result) {
      return $.grep(entries, function(entry) { return entry.id === parseInt(result.ref, 10); })[0];
    });

    console.log(results)
  }))

})
