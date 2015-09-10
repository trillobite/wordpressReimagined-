
var project = {};
project.initialRender = function() {
	$jConstruct('div', {
		text: 'this was generated dynamically brought to you by jsonHTML!',
	}).appendTo('body');
};
$(document).ready(project.initialRender);