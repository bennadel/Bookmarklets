(function capturePointerEvents() {

	var parentTag = ( document.head || document.body || document.documentElement );
	var styleTag = document.createElement( "style" );

	styleTag.setAttribute( "type", "text/css" );
	styleTag.setAttribute( "data-caution", "Injected by bookmarklet" );
	styleTag.innerText = `
		html,
		html * {
			pointer-events: auto !important ;
		}
	`;

	parentTag.appendChild( styleTag );

})();
