var
    // Requirements
    express = require('express'),
    app = express(),
    request = require('request'),
    // Default environment variables:
    port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Environment running on PORT: ' + port);
});

// Routes
app.get('/', (req, res) => {
    let hello = "Hello world!";
    res.send(hello);
});