define( [ "qlik"
],
function ( qlik) {

	return {
		support : {
			snapshot: false,
			export: false,
			exportData : false
		},
		definition : {
			type : "items",
			component : "accordion",
			items: {
				settings: {
					uses: "settings",
					items: {
						sxOptions: {
							label: "Content",
							items: {
								ContentTextarea: {
									label:"Content HTML",
									component: "textarea",
									rows: 7,//the amount of rows in the textarea component (default is 3)
									//maxlength: 100,//will not allow more than 100 characters
									ref: "sxProp.contentTextarea",
									expression: "optional"
								},
								CssTextarea: {
									label:"Include CSS",
									component: "textarea",
									rows: 7,//the amount of rows in the textarea component (default is 3)
									//maxlength: 100,//will not allow more than 100 characters
									ref: "sxProp.cssTextarea",
									expression: "optional"
								},
								UseCSSOnly: {
									type: "boolean",
									component: "switch",
									label: "Use CSS Only - hide textbox",
									ref: "sxProp.CssOnly",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Not On"
									}],
									defaultValue: false
								}
							}
						}

					}
				}
			}
		},
		paint: function ($element, layout) {
			//add your rendering code here
			var html = '<style>'+layout.sxProp.cssTextarea+'</style>';
			
			if(layout.sxProp.CssOnly == true) {
				html += '<style>[tid="'+layout.qInfo.qId+'"] article:not(.qv-mode-edit) { visibility: hidden; }</style>';
			}
			
			if(layout.sxProp.CssOnly != true) {
				html += '<div class="sxCssTextbox_container">'+layout.sxProp.contentTextarea+'</div>';
			}
			
			$element.html(html);
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );

