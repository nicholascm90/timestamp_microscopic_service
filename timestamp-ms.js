var express = require('express') 


var app = express(); 

var date = new Date(); 

app.set('port', (process.env.PORT || 5000));


app.get('/', function (req,res) {
    res.send("hello world"); 
}); 

app.get('/test', function (req, res) {
    res.send(JSON.stringify(getTimes(timeProvided))); 
}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var timeProvided = 1450137600; 

function getTimes(num) {
    var date = new Date(num); 
    return {
        "unix": date.getTime(), 
        "natural": monthString(date.getMonth())+" "+date.getDay()+","+date.getYear()
    }
}; 

function monthString(num) {
    var months = ["January", "February", "March", "April", "May", "June"]
    return months[num]; 
}