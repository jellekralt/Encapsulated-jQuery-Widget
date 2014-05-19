(function() {

	var loadJS,
		Widget, 
		wdgt,
		$;

	/**
	 * Widget
	 * @constructor
	 */
	Widget = {
		

		/** App settings */
		settings: {
			
		},

	
		/**
		 * Initialize the widget
		 */
		init: function() {

		}

		/** Add more functions here */

	};


	/**
	 * This function loads Zepto in a safe and encapsulated way
	 */
	var loadJS = function(loaded) {
		var tries = 0;
		// Load the script by appending a script tag to the head
		var script = document.createElement("SCRIPT");
		script.src = '//cdnjs.cloudflare.com/ajax/libs/zepto/1.1.3/zepto.min.js';
		script.type = 'text/javascript';
		document.getElementsByTagName("head")[0].appendChild(script);

		// Poll for Zepto to come into existance
		var checkReady = function(callback) {
			// Check if Zepto exists
		    if (window.Zepto) {
		    	// If so, call the callback
		        callback(window.Zepto);
		    }
		    else if(tries > 10) {
		    	throw('Failed to load the Zepto library');
		    }
		    else {
		    	// Set a timeout to check again
		        window.setTimeout(function() { checkReady(callback); }, 100);
		        tries++;
		    }
		};
		
		// Start polling...
		checkReady(function(Zepto) {
			// Zepto loaded successfully, define encapsulated $ as Zepto ref
			$ = Zepto;
			loaded.call();
		});

	};

	/** Start loading the JS */
	loadJS(function() {
		var wdgt = Object.create( Widget );
		wdgt.init();
	});

})();