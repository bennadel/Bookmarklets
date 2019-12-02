
# Bookmarklet Scripts

by [Ben Nadel][bennadel]

These are some simple Bookmarklets that I use to inject Scripts and additional formatting
into various websites and applications.

### Loggly - JSON Modal

This adds a double-click handler to the "Grid" view cells. If the cell contains data that
can be successfully parsed as JSON, it will be opened up and displayed in a modal window
that will output the JSON using pretty(ish)-print formatting.

```js
javascript:(function(d,b,f,u,s){f="loggly-json-modal.js";u=(b+f+"?="+Date.now());s=d.createElement("script");s.setAttribute("src",u);d.body.appendChild(s);})(document,"https://bennadel.github.io/Bookmarklets/");void(0);
```

### Loggly - Search Formatting

This makes the "Grid" view of the Loggly search a bit easier to read, increasing the 
contrast, changing the font, and adding some breathing room (making it all look a little
more like Kibana).

```js
javascript:(function(d,b,f,u,s){f="loggly-search-formatting.js";u=(b+f+"?="+Date.now());s=d.createElement("script");s.setAttribute("src",u);d.body.appendChild(s);})(document,"https://bennadel.github.io/Bookmarklets/");void(0);
```

### General - Capture Pointer Events

This injects a `style` tag that enables `pointer-events` on the root element. And then,
attempts to force the cascade of `pointer-events` down the DOM tree using the
`!important` modifier.

```js
javascript:(function(d,b,f,u,s){f="capture-pointer-events.js";u=(b+f+"?="+Date.now());s=d.createElement("script");s.setAttribute("src",u);d.body.appendChild(s);})(document,"https://bennadel.github.io/Bookmarklets/");void(0);
```

[bennadel]: https://www.bennadel.com
