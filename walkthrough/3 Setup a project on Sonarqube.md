## Part 3 Setup a project on Sonarqube

Create a project

We need to create a new sonarqube project to send our sonnarqube scanner data to

Admin access:

Click the login button or link, or just go straight to http://localhost:9000/sessions/new as the System Administrator using the credentials:

```
Login: admin 
Password: admin 
```

Click the Create new project button to setup your first project.
For this example I used these values: 

Project key: nodejs
Display name: NodeJs project


Then Click the “Setup” button.

At the bottom of the screen is a message informing you that you are using an embedded database. We’re just testing, but normally you would want to setup some form of persistent data with a database.

As the message says:


> Embedded database should be used for evaluation purposes only




Step 1: Provide a Token

You are then given the option to create a private token, let’s create one.

Enter a name for your token: nodejs-token

Copy the token generated for you eg 0b2144d5a096c825ef9996d5780cdfc5a8860015



Step 2: Run analysis on your project

What is your project's main language? Select the “Other” option for js.

What is your OS? In my case macOS

Sonarscanner

You should already have sonnarqube scanner setup, but here you will find a link to download in case you don’t have it set up yet.
Download and unzip the Scanner for macOS Follow the documentation, this process is stepped up further down in this tutorial


Execute the Scanner from your computer: copy the command for later


```
sonar-scanner \
  -Dsonar.projectKey=nodejs \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=0b2144d5a096c825ef9996d5780cdfc5a8860015
```

We will use this command as a base, but will edit and add some values.

Just a note before we move on, one of the values we will need to update is -Dsonar.sources= we need to update this to point to the ./src folder we will create in the next section:

Example:

```
sonar-scanner \
  -Dsonar.projectKey=nodejs \
  -Dsonar.sources=./src \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=0b2144d5a096c825ef9996d5780cdfc5a8860015
```

I will repeat this information, but wanted make a mention of it before we move on.


Let's 


TODO: Screenshots & code? Maybe? 
