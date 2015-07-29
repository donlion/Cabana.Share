if (arguments.length == 0) {

	//= include methods/on.js
	//= include methods/off.js
	//= include methods/listeners.js
	//= include methods/addThis.js
	//= include methods/extend.js
	//= include methods/config.js
	//= include methods/renderShareBox.js
	//= include methods/styleSvg.js
	//= include methods/documentReady.js

	return (function() {

		return {
			version: '0.3.0',
			on: on,
			off: off,
			listeners: listeners,
			addThis: addThis,
			extend: extend,
			config: config,
			styleSvg: styleSvg,
			documentReady: documentReady
		};

	})();

}