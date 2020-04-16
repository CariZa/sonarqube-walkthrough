## Part 5: Use sonarqube scanner to analyse the project

Now let’s setup some steps so we can run the sonarqube scanner on our nodejs project:

Sonarqube command:

Remember that command you copied?

Just update one value:

```
    -Dsonar.sources=./src \
```

And add another value, language:

```
    -Dsonar.language=js \
```

Make sure your sources is property is pointing to ./src

```
sonar-scanner \
  -Dsonar.language=js \
  -Dsonar.projectKey=nodejs \
  -Dsonar.sources=./src \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=0b2144d5a096c825ef9996d5780cdfc5a8860015
```

View the results:

If you visit the sonarqube dashboard you will see the results appear:

Visit:

http://localhost:9000


You will also see some info like these:

Reliability A
Security A
Security Review A
Maintainability A

This is a fairly empty project still, there will be little that sonarqube can deduce from the little code we've written.

Take a look at the sections:

* [Issues](http://localhost:9000/project/issues?id=nodejs&resolved=false)
* [Measures](http://localhost:9000/component_measures?id=nodejs)

You will see these sections at the top of the screen, below the project name.

Section Issues 

You should see no issues yet in this section.

Section Measures

In measures you will already see some values that sonaqube has assigned under "Complexity".

There are 2 forms of complexity that Sonarqube generates:

* Cyclomatic
* Cognitive

These values are good to be aware of as the code in your project increases.

Let's add a new file with some code smells and bugs

```
$ touch ./src/code-smells.js
$ vi ./src/code-smells.js
```

Paste the below code inside ./src/code-smells.js:

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
```

```
$ touch ./src/bugs.js
$ vi ./src/bugs.js
```

Paste the below code inside ./src/bugs.js:

```
function incorrectReturn(value) {
    return value;
    console.log("Still do a thing");
}
```


Run the sonarqube command again:

```
sonar-scanner \
  -Dsonar.language=js \
  -Dsonar.projectKey=nodejs \
  -Dsonar.sources=./src \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=0b2144d5a096c825ef9996d5780cdfc5a8860015
```

Now you should see the issues being flagged:

Refresh 

```
http://localhost:9000/dashboard?id=nodejs
```

Take a look at the sections again:

* [Issues](http://localhost:9000/project/issues?id=nodejs&resolved=false)
* [Measures](http://localhost:9000/component_measures?id=nodejs)

Now you will see issues appear. 

Issues:

There are unused variables, duplicated code, code after a return statement.

Complexity (in the Measures section, near the bottom):

The complexity has gone up as well.

 Reliability:

 If you take a look at the Reliability section on the Measures screen you'll even see Sonarqube has added some values, "Remediation effort". It's given an estimate on how long it estimates it would take you to fix the issues.

This part was just a basic analysis. 

To really get value out of CI we need to include linting and tests (with code coverage). This is where we can also really start benefiting from sonarqube's quality gates. 

Adding sonarqube into your CI pipelines can help ensure we keep code tested and keep the quality of the code high.

----

[Next Section: 6 Add linting.md](https://github.com/CariZa/sonarqube-walkthrough/blob/master/walkthrough/6%20Add%20linting.md)
