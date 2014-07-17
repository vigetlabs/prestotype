var loadSync = function(filenames) {
	filenames.forEach(function(filename) {
		var xhrObj = new XMLHttpRequest();
		xhrObj.open('GET', 'js/vendor/' + filename + '.js', false);
		xhrObj.send('');

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = xhrObj.responseText;

		var firstScript = document.getElementsByTagName('script')[0];
		firstScript.parentNode.insertBefore(script, firstScript);
	});
};

loadSync([
	'jquery',
	'jquery-ui',
	'jquery.transit',
	'underscore',
	'bootstrap',
	'ejs',
	'less',
	'presto-partials'
]);
