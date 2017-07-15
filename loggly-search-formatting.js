(function() {

	var head = $( "head:first" );
	var style = $( "<style></style>" ).attr( "type", "text/css" );

	// Setup the CSS styles to be used by the bookmarklet.
	var styles = `
		.ui-grid-cell-contents {
			background-color: #FFFFFF ;
			border-bottom: 1px solid #F0F0F0 ;
			color: #000000 ;
			font-family: 'Lucida Console', Monaco, monospace ;
			font-size: 13px ;
			padding: 11px 11px 11px 11px ;
		}

		.grid-view.ui-grid .ui-grid-cell[ ui-grid-cell ] {
			height: 40px ;
		}
	`;

	// Add all the nodes to the active documents.
	head.append( style.html( styles ) );

})();
