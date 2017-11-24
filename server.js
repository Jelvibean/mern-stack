const express = require('express');
const app = express();

app.use(express.static('static'));  // static is the directory where you will house your index

app.listen(3000, function(){
	console.log('App started on port 3000');
});