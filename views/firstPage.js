function getHtml(callback) {
	var html = '<!doctype html>' +
		'<html lang="fr">' +
		'<head>' +
		'	<meta charset="UTF-8">' +
		'<meta name="viewport" content="width=device-width, initial-scale=1" /> '+
		'    <title>MH practice</title>' +
		'        <link rel="stylesheet" type="text/css" href="/assets/dist/semantic.min.css" />' +
		'	<script src="https://cdn.jsdelivr.net/npm/vue"></script>' +
		'</head>' +
		'<body>' ;
		
html += '<div class="ui text container">'+
    '<h3 class="first">Mental Health Exercices</h3>'+
    '<p>Welcome to this mental health improvement program. By following the following exercises regularly, you will improve your well-being.</p>'+
	'<p>Ready to go ?</p>'+
	'<div class="ui two column centered grid"><button type="button" class="ui large labeled icon button teal" onclick="location.href=\'/meditation\'" title="Next" ><i class="arrow circle right icon"></i>Next</button></div>' +
  '</div>';
html += '</body></html>';

callback(html);
}
module.exports.getHtml = getHtml;
