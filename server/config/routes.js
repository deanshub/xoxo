module.exports = function(app){
	app.get('/', function(req, res) {
		res.send('/index.html');
	});

	app.get('*', function(req, res) {
		res.redirect('/#'+req.originalUrl);
	});
}