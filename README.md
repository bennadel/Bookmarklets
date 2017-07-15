
# Bookmarklet Scripts

These are some simple Bookmarklets that I use to inject Scripts into various sites.

### Loggly - JSON Modal

This adds a double-click handler to the "Grid" view cells. If the cell contains data that
can be successfully parsed as JSON, it will be opened up and displayed in a modal window
that will output the JSON with pretty-print formatting.

```js
javascript:(function(d,b,f){f="loggly-json-modal.js",u=(b+f+"?="+Date.now()),s=d.createElement("script");s.setAttribute("src",u);d.body.appendChild(s);})(document,"https://bennadel.github.io/Bookmarklets/");void(0);
```

### Loggly - Search Formatting

This makes the "Grid" view of the Loggly search a bit easier to read, increasing the
contrast, changing the font, and adding some padding (making it more like Kibana).

```js
javascript:(function(d,b,f){f="loggly-search-formatting.js",u=(b+f+"?="+Date.now()),s=d.createElement("script");s.setAttribute("src",u);d.body.appendChild(s);})(document,"https://bennadel.github.io/Bookmarklets/");void(0);
```