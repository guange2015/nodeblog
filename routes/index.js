
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.md5 = function(req,res) {
	var crypto = require('crypto');
	res.render('md5',{title: 'MD5 Hash', string:req.params.string,
		hash:crypto.createHash('md5').
		update(req.params.string).digest('hex')});
};

exports.ejs = function  (req,res) {
	res.render('hello',{title: "hello ejs"});
};

exports.api_post = function (req,res) {
	console.log('api called');
	console.log(req.params);
	res.render('api', {layout: false});
}