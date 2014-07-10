// don't delete this function! it gets rerun on every included partial. it's cool!
var siteFunctionality = function($context) {
	$context.find('.datepicker').datepicker();
	$context.find('.copyright').css('font-weight', 'bold');
};

$(document).ready(function() {
	siteFunctionality($(this));
});
