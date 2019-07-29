const express = require('express')
const PORT = process.env.PORT || 4200;
var request = require('request');

const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(express.urlencoded({
    extended: true
    })); 

app.use(express.static('demo-app'))
app.use(express.json());           

app.get('/*', function(req, res) { 
res.sendFile(__dirname + '/demo-app/index.html')
});

app.listen(PORT, () => console.log('UI service listening on port '+PORT+'!')) 
    
