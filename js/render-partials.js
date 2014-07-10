var renderPartials = function(context, callback) {
	$('.partial', context).each(function() {
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

		callback($this);
		renderPartials($this, callback);
	});
};
