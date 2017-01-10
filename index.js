var express = require('express');
var compression = require('compression');
var path = require('path');
var app = express();
var max_age = 0;

app.set('port', (process.env.PORT || 3000));

app.use(compression());
app.use("/public", express.static(path.join(__dirname, 'public'), { maxAge: max_age }));
app.use("/src", express.static(path.join(__dirname, 'src'), { maxAge: max_age }));

app.get('/*', function(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=' + max_age);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
