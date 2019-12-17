(function() {

	// CAUTION: We can use jQuery in this bookmarklet because we know that Loggly 
	// uses jQuery in their application.

	var doc = $( document );
	var win = $( window );
	var head = $( "head:first" );
	var body = $( document.body );
	var outer = $( "<div></div>" ).addClass( "bnb-outer" );
	var inner = $( "<pre></pre>" ).addClass( "bnb-inner" );
	var explore = $( "<a>Explore</a>" ).addClass( "bnb-explore" ).attr( "target", "_blank" );
	var style = $( "<style></style>" ).attr( "type", "text/css" );

	// Setup the CSS styles to be used by the bookmarklet.
	var styles = `
		.bnb-outer {
			background-color: rgba( 0, 0, 0, 0.8 ) ;
			bottom: 0px ;
			display: none ;
			left: 0px ;
			position: fixed ;
			right: 0px ;
			top: 0px ;
			z-index: 999999999999 ;
		}

		.bnb-outer--active {
			display: block ;
		}

		.bnb-inner {
			background-color: #ffffff ;
			border: 1px solid #cccccc ;
			border-radius: 7px 7px 7px 7px ;
			bottom: 100px ;
			color: #000000 ;
			font-family: monospace ;
			font-size: 18px ;
			left: 100px ;
			line-height: 27px ;
			margin: 0px 0px 0px 0px ;
			overflow: auto ;
			padding: 30px 30px 30px 30px ;
			position: absolute ;
			right: 100px ;
			top: 100px ;
			white-space: pre-wrap ;
		}

		.bnb-inner strong {
			color: #aa0000 ;
			font-weight: 400 ;
		}

		.bnb-explore,
		.bnb-explore:visited {
			background-color: #ffffff ;
			border-radius: 5px 5px 5px 5px ;
			color: #aa0000 ;
			display: none ;
			padding: 7px 13px 8px 13px ;
			position: absolute ;
			right: 5px ;
			top: 5px ;
		}

		.bnb-explore:hover {
			background-color: #aa0000 ;
			color: #ffffff ;
		}

		.bnb-explore--active {
			display: block ;
		}
	`;

	// When the user double-clicks in the Grid cell, check for valid JSON and pretty-
	// print it in a modal window.
	doc.on(
		"dblclick",
		".ui-grid-cell-contents",
		function handleDblClick( event ) {

			// Since there's no native way to check to see if a value is valid JSON 
			// before parsing it, we might as well just try to parse it and catch
			// any errors.
			try {

				var node = $( this );

				// Parse the JSON content and then re-stringify it so that it is 
				// formatted for easier reading.
				var jsonContent = node.text();
				var payload = JSON.parse( jsonContent );
				var content = JSON.stringify( payload, null, 4 );

				// Inject the value into the modal window using .text() so that any HTML
				// that might be embedded in the JSON is escaped.
				inner.text( content );

				// Pull the HTML content out, which now contain ESCAPED embedded HTML if
				// it exists. At this point, we can do some light string-manipulation to
				// add additional HTML-based formatting.
				var html = inner
					.html()
					// Replace escaped line-breaks in strings with actual line-breaks 
					// that indent based on the prefix of the JSON key-value pair.
					.replace(
						/(^\s*"[\w-]+":\s*")([^\r\n]+)/gm,
						function( $0, leading, value ) {

							var indentation = " ".repeat( leading.length );
							var formattedValue = value.replace( /\\n/g, ( "\n" + indentation ) );

							return( leading + formattedValue );

						}
					)
					// Emphasize the JSON key.
					.replace( /("[\w-]+":)/g, "<strong>$1</strong>" )
				;
				inner.html( html );

				// Show the modal window.
				outer.addClass( "bnb-outer--active" );

				// Try to add the explore button, which requires the btoa() function.
				try {

					explore.attr( "href", `https://bennadel.github.io/JSON-Explorer/dist/#${ btoa( jsonContent ) }` );
					explore.addClass( "bnb-explore--active" );

				} catch ( error ) {

					console.warn( "Explore button could not be rendered." );
					console.error( error );

				}
				
			} catch ( error ) {

				console.warn( "Could not parse JSON in Grid cell." );
				// console.log( error );

			}		

		}
	);

	// When the user clicks on the outer portion of the modal window, close it.
	doc.on(
		"click",
		".bnb-outer",
		function handleClick( event ) {

			// Ignore any click events from the inner portion of the modal.
			if ( outer.is( event.target ) ) {

				outer.removeClass( "bnb-outer--active" );
				explore.removeClass( "bnb-explore--active" );
				
			}

		}
	);

	// When the hits ESC, close the modal window.
	win.on(
		"keydown",
		function handleKeyPress( event ) {

			var ESC_CODE = 27;

			if ( outer.is( ".bnb-outer--active" ) && ( event.which === ESC_CODE ) ) {

				outer.removeClass( "bnb-outer--active" );

			}

		}
	);

	// Add all the nodes to the active documents.
	head.append( style.html( styles ) );
	body.append( outer.append( explore ).append( inner ) );

})();
