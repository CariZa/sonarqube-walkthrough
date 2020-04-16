## Part 6: Add linting

Add these libraries to your project:

$ npm install eslint eslint-plugin-sonarjs --save-dev

In the root of your project add a file called ".eslintrc.json":

```
touch .eslintrc.json
```

Add the following to the file ".eslintrc.json":

```
{
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["plugin:sonarjs/recommended"],
    "plugins": ["sonarjs"]
}
```

Update your package.json file, and add two keys (lint & lint-report) with commands:

```
    "scripts": {
        ...
        "lint": "eslint ./src --ignore-path .gitignore",
        "lint-report": "eslint ./src -f json -o reports/report.json --ignore-path .gitignore || true"
    },
```

Run:

$ npm run lint

You will see some new issues flagged by eslint.

Generate the lint report:

$ npm run lint-report

Add to the sonarqube command:
```
-Dsonar.eslint.reportPaths=reports/report.json /
```

Your command:

```
sonar-scanner \
  -Dsonar.language=js \
  -Dsonar.eslint.reportPaths=reports/report.json \
  -Dsonar.projectKey=nodejs \
  -Dsonar.sources=./src \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=0b2144d5a096c825ef9996d5780cdfc5a8860015
```

If you get any errors just make sure you've created the report (using the command "npm run lint-report" as mentioned above).

Once you have run the sonarqube command above you can go to the issues section, and you will see new issues raised with the tag "ESLINT_REPO".

This is a nice way to add linting both on the code level and have it match up on sonarqube.

It's a very good idea to make sure linting runs whenever someone pushes code to your repo. It will help the project, create standardized ways of coding and consistent feedback for developers to help them maintain the code.