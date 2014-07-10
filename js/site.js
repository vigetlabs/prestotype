// this function gets re-run every time a partial is included,
// which is why it's important to use $context.

// otherwise, it might run the same behavior multiple times
// on your whole page
var afterRender = function($context) {
	indexBehaviors($context);
};

$(document).ready(function() {
	afterRender($(document));
	renderPartials($(document), afterRender);
});
