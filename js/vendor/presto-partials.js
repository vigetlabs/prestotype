var renderPartials = function($context) {
	$('.partial', $context).each(function() {
		var $this = $(this);
		var dataAttributes = _(this.attributes).filter(function(attr) {
			return attr.name.slice(0, 5) === 'data-' && attr.name !== 'data-partial';
		});

		dataAttributes = _.object(_(dataAttributes).map(function(attr) {
			return [attr.name.slice(5), attr.value];
		}));

		var partialUrl = $this.data('partial');

		var html = new EJS({
			url: partialUrl + '.ejs'
		}).render(dataAttributes);

		$this.append(html);

		renderPartials($this);
	});

	if (!$context) {
		console.log('partialsLoaded has triggered');
		$(document).trigger('partialsLoaded');
		window.partialsLoaded = true;
	}
};

var afterPartialsLoad = function(callback) {
	if (window.partialsLoaded) {
		callback();
	} else {
		$(document).on('partialsLoaded', function() {
			callback();
		});
	}
};

$(document).ready(function() {
	renderPartials();
});
