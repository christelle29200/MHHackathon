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
    '<h3 class="first">Running 10 minuts (or more)</h3>'+
    '<p>It\'s time to get out for a jog ! To keep the rythme, you can play the following video. </p>'+
	'<p>I also recommand the Nike Run Club application. With the Nike Run Club app, you can monitor your run but you can also find guided runs <a href="https://nikerunning.app.link/iXkttjfFPkb">here</a></p>'+
	'<iframe width="560" height="315" src="https://www.youtube.com/embed/QxbJSe6ueoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+	
	'<div class="ui two column centered grid"><button type="button" class="ui large labeled icon button teal" onclick="location.href=\'/run\'" title="Next" ><i class="arrow circle right icon"></i>Next</button></div>' +
  '</div>';
html += '</body></html>';

callback(html);
}
module.exports.getHtml = getHtml;
