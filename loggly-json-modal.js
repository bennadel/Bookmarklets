(function() {

	var doc = $( document );
	var head = $( "head:first" );
	var body = $( document.body );
	var outer = $( "<div></div>" ).addClass( "bn-outer" );
	var inner = $( "<pre></pre>" ).addClass( "bn-inner" );
	var style = $( "<style></style>" ).attr( "type", "text/css" );

	style.html(`
		.bn-outer {
			background-color: rgba( 0, 0, 0, 0.8 ) ;
			bottom: 0px ;
			display: none ;
			left: 0px ;
			position: fixed ;
			right: 0px ;
			top: 0px ;
			z-index: 999999999999 ;
		}

		.bn-outer--active {
			display: block ;
		}

		.bn-inner {
			background-color: #FFFFFF ;
			border: 1px solid #CCCCCC ;
			border-radius: 7px 7px 7px 7px ;
			bottom: 100px ;
			color: #000000 ;
			font-family: monospace ;
			font-size: 16px ;
			left: 100px ;
			line-height: 24px ;
			margin: 0px 0px 0px 0px ;
			overflow: auto ;
			padding: 30px 30px 30px 30px ;
			position: absolute ;
			right: 100px ;
			top: 100px ;
			white-space: pre-wrap ;
		}

		.bn-inner strong {
			color: #AA0000 ;
			font-weight: 400 ;
		}
	`);

	head.append( style );
	body.append( outer.append( inner ) );

	doc.on(
		"dblclick",
		".ui-grid-cell-contents",
		function handleDblClick( event ) {

			try {

				var node = $( this );
				var payload = JSON.parse( node.text() );
				var content = JSON.stringify( payload, null, 4 );

				inner.text( content );

				var html = inner
					.html()
					.replace( /("[\w-]+":)/g, "<strong>$1</strong>" )
				;

				inner.html( html );

				outer.addClass( "bn-outer--active" );
				
			} catch ( error ) {

				console.warn( "Could not parse JSON in grid cell." );
				// console.log( error );

			}		

		}
	);

	doc.on(
		"click",
		".bn-outer",
		function handleClick( event ) {

			if ( outer.is( event.target ) ) {

				outer.removeClass( "bn-outer--active" );
				
			}

		}
	);

})();
