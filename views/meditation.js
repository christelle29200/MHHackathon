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
    '<h3 class="first">Mindfulness Meditation Exercice</h3>'+
    '<p>During this exercice, you have to focus your attention on your hands.</p>'+
	'<p>Try to stop your thouhts as much as you can. If some thoughts are coming up, don\'t worry, the more practice, the more focued you will become.</p>'+
	'<audio controls autoplay><source src="/assets/white_noise.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>'+
	'<div class="ui two column centered grid"><button type="button" class="ui large labeled icon button teal" onclick="location.href=\'/run\'" title="Next" ><i class="arrow circle right icon"></i>Next</button></div>' +
  '</div>';
html += '</body></html>';

callback(html);
}
module.exports.getHtml = getHtml;
