---
---
require([
  '/public/js/jquery-2.1.1.min.js',
  '/public/js/lunr.min.js',
], function (_, lunr) {

  var docs =
  [
  {% for page in site.pages limit:100 %}
    {% if page.layout != "section" %}
      {% unless page.exclude_from_search %}
        {% include page.json %},
      {% endunless %}
    {% endif %}
  {% endfor %}
  ];
  // init lunr
  var idx = lunr(function () {
    this.field('title', 10);
    this.field('content');
    this.ref('id');
  });

  // add each document to be index
  for(var index in docs) {
    idx.add(docs[index]);
  }

  var originalContent = {
    selector : '.page',
  };
  originalContent.content = $(originalContent.selector).html();
  originalContent.reset = function() {
    $(originalContent.selector).html(originalContent.content);
  };

  var debounce = function (fn) {
    var timeout;
    return function () {
      var args = Array.prototype.slice.call(arguments),
          ctx = this;

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, 100);
    };
  };

  $('#search').bind('input click', debounce(function () {
    var query = $(this).val();
    if (query < 1) {
      originalContent.reset();
      return;
    }

    render( prepare( query ) );
  }));

  function prepare( query ) {
    var entries = idx.search(query).map(function (result) {
      return docs.filter(function (q) { return q.id === result.ref })[0]
    })
    return entries;
  }

  function render( entries ) {
    var output = '';
    if (entries.length == 0) {
      output = '<h2 class="minor-text">Nothing found</h2>';
    }
    for(var index in entries) {
      entry = entries[index];
      output += '<div class="search-result">';
      output += '<a href="' + entry.id + '">';
      output += '<h2 class="search-result__title">';
      output += entry.title;
      output += '</h2>';
      output += '</a>';
      output += '</div>';
    }

    $(originalContent.selector).html( output );
  }

});
