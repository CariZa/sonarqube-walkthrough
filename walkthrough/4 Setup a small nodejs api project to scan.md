## Part 4: 4 Setup a small nodejs api project to scan

Requirements

Make sure you have these pre-installed:

```
node
npm
```

Instructions here if you need to set them up still:

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


Setup the nodejs project

Use an IDE or command line / terminal. Run from a folder you would like to setup the project in.

Eg mkdir nodejs

Initialise your package.json by running:

```
npm init
```

(For testing purposes you can just click enter on every question)

Install these packages:

```
npm install nodemon --save-dev
npm install express request --save
```


// Might remote this part, gitignore is not necessary for this
The next few steps for gitignore is just something I always do by default, even though we’re not using git yet, I try stay in the habit of adding gitignore rules from the start.

Add .gitignore

```
touch .gitignore
```

Add /node_modules into the .gitignore file

```
echo "/node_modules" > .gitignore
```


Add the js code: 

Create the src folder for all the source code:

```
mkdir ./src
```

Create an server.js file

```
touch ./src/server.js
```

### Examples of code

Open up server.js in a code editor like Visual Studio Code. Or use vi.

Example code for server.js file:

```
$ vi server.js
```

Paste the code below:

```
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
```

To run the code with node, run the command:

$ node ./src/server.js

You should see this output:

```
Environment running on PORT: 3000
```

And the default url will be:

```
http://127.0.0.1:3000/
```

Response in browser:

```
Hello world!
```


Now that we have setup a project, let's integrate this with the sonarqube we are running.

----

[Next Section: 5 Use sonarqube scanner to analyse the project.md](https://github.com/CariZa/sonarqube-walkthrough/blob/master/walkthrough/6%20Add%20linting.md)
