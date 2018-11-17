var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');
var users = require('./models/users.js');
var stories = require('./models/adminPostStory.js');
const app = express();


app.use(cors())
mongoose.connect('mongodb://localhost:27017/users',{ useNewUrlParser: true });

mongoose.connection.once('open', function () {
    console.log('MongoDB connection open');
});

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())



var http=require('http');

app.set('view engine', 'ejs');

app.get('/admin',(req, res)=>{

	res.render('index');

});


app.post('/',(req,res)=>{

	stories.find({category:'Culture'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})
app.post('/news',(req,res)=>{

	stories.find({category:'News'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})

app.post('/technology',(req,res)=>{

	stories.find({category:'Technology'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})

app.post('/movies',(req,res)=>{

	stories.find({category:'Movies'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})

app.post('/politics',(req,res)=>{

	stories.find({category:'Politics'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})

app.post('/design',(req,res)=>{

	stories.find({category:'Design'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})

app.post('/health',(req,res)=>{

	stories.find({category:'Health'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})

app.post('/railways',(req,res)=>{

	stories.find({category:'Railways'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})

app.post('/jobs',(req,res)=>{

	stories.find({category:'Jobs'}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			
			res.json({
				status:"success",
				story:data
			});
			
		}

	})

})



app.post('/adminLogin', (req, res)=>{



	users.findOne({name:req.body.username}, function(err, data){

		if(data != null){

			users.findOne({name:req.body.username, password:req.body.password}, function(err, user){

				if(user){
					res.render('dashboard');


				}else{

					res.send("you are not an admin");
				}

				
			})

		}else{

			res.send("admin not found");

		}

	});

})

app.post('/singleStory', (req,res)=>{
	
	stories.findOne({_id:req.body.get_id}, (err,data)=>{

		if(err){

			res.send("No data found");

		}else{

			console.log(data);

			res.json({



				status:"success",

				singleStory:data

			});
		}


	})



})

app.get('/logout',(req,res)=>{
	res.render('index');
})

app.get('/story_post',(req, res)=>{

res.render('storyPost');

})
app.get('/return_home', (req,res)=>{
	res.render('dashboard');
})

app.post('/postStory', (req,res)=>{

	new stories({
		title:req.body.title,
		description:req.body.description,
		category:req.body.category,
		story:req.body.story
	}).save(function(err, user){

	    if(!err) { 
	 		res.send("Successfully posted")
	 	}else{
	 		res.send('not posted');
	 	}
	})

	})




app.listen(3002, function () {
   console.log('app listening on port 3002')
})