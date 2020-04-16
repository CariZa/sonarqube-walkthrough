## Part 7: Add tests and code coverage

Install packages called sinon, nyc and mocha:

$ npm install sinon nyc mocha chai --save-dev

In package.json file replace the “test” script with:

Replace this:
```
"test": "echo \"Error: no test specified\" && exit 1"
```
With:
```
"test": "nyc --reporter=html --reporter=text mocha --file src/*.js --exit",
"coverage-report": "nyc report --reporter=lcovonly",
```

Your scripts section should look something like this:

```
  "scripts": {
    "test": "nyc --reporter=html --reporter=text mocha --file src/*.js --exclude *.spec.js --exit",
    "coverage-report": "nyc report --reporter=lcovonly",
    "lint": "eslint ./src --ignore-path .gitignore",
    "lint-report": "eslint ./src -f json -o reports/report.json --ignore-path .gitignore || true"
  },
```

And at the bottom of your package.json file add a nyc object:

```
{
...
    "nyc": {
        "all": true,
        "include": [
          "src/**/*.js"
        ],
        "exclude": [
          "**/*.spec.js"
        ],
        "check-coverage": true,
        "branches": 0,
        "lines": 0,
        "functions": 0,
        "statements": 0
    }
...
}
```

Now run:

```
$ npm test
```

Generate the coverage report for sonarqube:

```
$ npm run coverage-report
```

Update the sonarqube command to include the lcov coverage report:

Add the lines:

```
-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
-Dsonar.exclusions=src/**/*.spec.js \
```

Your command:

```
sonar-scanner \
  -Dsonar.language=js \
  -Dsonar.eslint.reportPaths=reports/report.json \
  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
  -Dsonar.exclusions=src/**/*.spec.js \
  -Dsonar.projectKey=nodejs \
  -Dsonar.sources=./src \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=0b2144d5a096c825ef9996d5780cdfc5a8860015
```

You won't get new information, we know we have 0% coverage. 

Let's write some tests.

First let's make some updates to our code to make it easier to test. We're going to use "module.exports", I'm using es5 statements for simplicity, but feel to make it es6 rather.

Update './src/bugs.js' to be:

```
function incorrectReturn(value) {
    return value;
    console.log("Still do a thing");
}

module.exports = {
    incorrectReturn
};
```

Update './src/socde-smells.js' to be:

```
function codeSmellExample(a, b, c, d, e, f) {
    let g;
    let h;
    let i;
    let value;
    if (a) {
        if (b) {
            if (c) {
                if (d) {
                    if (e) {
                        console.log("Nested adventures!");
                        value = a + b + c + d + e;
                    }
                }
            }
        }
    } else if (a) {
        console.log(f);
        value = f;
    } else {
        console.log(f);
        value = f;
    }
    return value;
}

module.exports = {
    codeSmellExample
};
```

Add tests:

bugs.spec.js

```
touch ./src/bugs.spec.js
vi ./src/bugs.spec.js
```

Add the following content into ./src/bugs.spec.js:

```
const chai = require('chai');
const lib = require('./bugs.js');

const expect = chai.expect;

describe('bugs', () => {
    it("Should return the value it's passed", () => {
        var value = lib.incorrectReturn('a');
        expect(value).to.equal('a');
    });
});
```


code-smells.spec.js

```
touch ./src/code-smells.spec.js
vi ./src/code-smells.spec.js
```

Add the following content into "./src/code-smells.spec.js":

```
const chai = require('chai');
const lib = require('./code-smells.js');

const expect = chai.expect;

describe('code smells', () => {
    it('calls the original function', function () {
        var value = lib.codeSmellExample('a','b','c','d','e','f');
        expect(value).to.equal('abcde');
    }); 
    it('calls the original function', function () {
        var value = lib.codeSmellExample(null,null,null,null,null,'f');
        expect(value).to.equal('f');
    }); 
});
```

Run the npm test command:

```
npm test
```

Your command:

```
sonar-scanner \
  -Dsonar.language=js \
  -Dsonar.eslint.reportPaths=reports/report.json \
  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
  -Dsonar.exclusions=src/**/*.spec.js \
  -Dsonar.projectKey=nodejs \
  -Dsonar.sources=./src \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=0b2144d5a096c825ef9996d5780cdfc5a8860015
```

If you refresh your project in sonarqube you will see the code coverage has now gone up and reflects the code coverage of your project code.

Now we're not quite done yet, we need to still add some tests and code coverage. We will go over that in the next section.

----

[Next Section: 8 Final thoughts.md](https://github.com/CariZa/sonarqube-walkthrough/blob/master/walkthrough/8%20Final%20thoughts.md)
