//including required modules...
var express = require('express');
//creating an instanse of express module...
var app = express();
//including body- parser module...
var bodyParser = require('body-parser');
//including cookie-parser module...
var cookieParser = require('cookie-parser');
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
//calling mongoose module...
var mongoose = require('mongoose');


var dbPath  = "mongodb://localhost/myblog";

////////////////////////////////////////////////////////*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// command to connect with database
db = mongoose.connect(dbPath);

mongoose.connection.once('open', function() {

	console.log("database connection open success");


});
//database connection end


////////////////////////////////////////////////////////*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// application level middleware

app.use(function (req, res, next) {

	var time=String(new Date);
	time=time.slice(16,24);		
  console.log('date of request:',new Date());
  console.log('Time of request:',time);
  console.log('Request Type:', req.method);
  console.log("request url is ",req.originalUrl);
  console.log("request ip address is",req.ip);
  console.log('**********************************************************');
  next();
});

// end application level middleware
////////////////////////////////////////////////////////*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// include the model file 

var blog = require('./blogSchema.js');

var blogModel = mongoose.model('blog');

// end include

// here are the routes.... 
app.get('/', function (req, res) {

  res.send("This is a blog application");

});

//////////// lets write the code here for the route //////////


// start route to GET all blogs
app.get('/blogs',function(req, res,next) {

	blogModel.find(function(err,result){
		if(err){
			//res.send(err);
			next(err);
		}
		else{
			res.send(result)
		}


	});// end user model find 
  
});

// end route to GET all blogs

// route to get a particular blog
app.get('/blog/:id',function(req, res, next) {

	blogModel.findOne({'_id':req.params.id},function(err,result){
		if(err){
			
			console.log("some error");
			next(err);
			//res.send(err);
		}
		else{
			//console.log(result);
			res.send(result)
		}


	});// end user model find 
  
});
	
// end route to get a particular blog

// start route to Create a BLOG

	app.post('/blog/create',function(req, res,next) {

		var newBlog = new blogModel({

			blogTitle 		: req.body.blogTitle,
			authorName 	    : req.body.authorName,
			blogBody		: req.body.blogBody,
			aboutAuthor		: req.body.aboutAuthor

		}); // end newBlog 

		//lets set the date of creation
		var today = Date.now();
		newBlog.created_on = today;

		// now lets save the file 
		newBlog.save(function(error){
			if(error){
				//res.send(error);
					next(err);
			}
			else{
				//console.log(newBlog);
				res.send(newBlog);
			}

		}); // end new blog save
	});

// end route to create a BLOG

// start route to comment on a BLOG
	app.post('/blog/comment/:id',function(req, res,next) {

			blogModel.findOne({'_id':req.params.id},function(err,result){
		     if(err)
		{
			console.log("sorry! ID didn't match any of the post present in the database...");
			//res.send(err);
			next(err);
		}
		else
		{ 
			var time=String(new Date);
				time=time.slice(16,24);
			result.comments.push({ 
				commenterName: req.body.commenterName,
			    commentBody:req.body.commentBody,
			    commented_on:new Date,
				commentTime : time+" hrs."		   
			});

		
		// now lets save the file 
	    result.save(function(error){
			if(error){
				console.log("there is some error!!!");
				//res.send(error);
				next(err);
			}
			else{
				//console.log(result);
				res.send(result);
			}
	});//end of save file...
}
	    });// end of blogModel.Findone....
	});

// end  of route to comment a post...

// start route to update a blog using _id 
//updating the blog using BlogID to Authenticate the blog...

app.put('/blog/:id/edit',function(req, res,next) {

var update = req.body;
//lets set the date of updation
		var today = Date.now();
		update.updated_on = today;
	blogModel.findOneAndUpdate({'_id':req.params.id},update,function(err,result){
			if(err){
			console.log("sorry!blogID is not matching...");
			//res.send(err);
			next(err);
		}
		else{
				console.log("Blog updated...");
				res.send(result);

	}
	});
	// end user model find 
});
// end route to edit a blog using _id

// start the route to delete a blog 
app.post('/blog/:id/delete',function(req, res,next) {

	blogModel.remove({'_id':req.params.id},function(err,result){

		if(err){
			console.log("sorry Blog can't be deleted!!!");
			//res.send(err)
			next(err);
		}
		else{
			res.send(result)
		}


	});// end user model find 
  
});

// end delete 

///////////////////////////////////////////////////*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Generic Error Handling middlewares...................
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next(err);
});

//end of error handling middlewares...
///////////////////////////// end users api //////////////////////////////

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

