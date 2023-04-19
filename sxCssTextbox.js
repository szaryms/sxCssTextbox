define( [ "qlik"
],
function ( qlik) {

	return {
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element) {
			//add your rendering code here
			$element.html( "sxCssTextbox" );
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );

