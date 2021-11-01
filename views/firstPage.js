function getHtml(callback) {
	var html = '<!doctype html>' +
		'<html lang="fr">' +
		'<head>' +
		'	<meta charset="UTF-8">' +
		'    <title>Connexion</title>' +
		'        <link rel="stylesheet" type="text/css" href="/assets/dist/semantic.min.css" />' +
		'	<script src="https://cdn.jsdelivr.net/npm/vue"></script>' +
		'</head>' +
		  '<style type="text/css">'+
    'body > .grid { height: 100%;}'+
    '.image { margin-top: -100px;}'+
    '.column { max-width: 450px;}'+
  '</style>'+
		'<body>' ;
		html += '<div class="ui middle aligned center aligned grid">'+
  '<div class="column">'+
    '<h2 class="ui image header">'+
      '<div class="content">Mental Health</div></h2>';
	

    html += '</h2><form class="ui medium form">'+
      '<div class="ui stacked segment">'+
        '<div class="field"><div class="ui left icon input"><i class="user icon"></i><input type="text" name="username" placeholder="6+2"></div></div>'+
           '<div class="field"><div class="ui left icon input"><i class="lock icon"></i><input type="password" name="password" placeholder="Mot de passe"></div></div>'+
 		'<input type="submit" value="connexion" class="ui large teal labeled icon button" />'+       
 //'<div class="ui fluid large teal submit button">Se connecter</div>'+
      '</div></form>';

	html += '</div></div></body>' +
		'</html>';
	callback(html);
}
module.exports.getHtml = getHtml;
