## Part 2: Setup a sonarqube scanner


Setup sonarqube scanner in the environment you want to run the analysis on the code 

Could be a vm, could be a CI environment like Jenkins, or in my case it’s on my macOS for me to test.

This part is assuming you are running this on an OS like environment you can setup software on.

In order to send analysed data to sonarqube you need a sonarqube scanner setup.

https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/

I followed the steps in the documentation for macOS:


Just downloaded the zip, unzipped, I moved the files to /usr/local/sonar-scanner
And I added that to the PATH variable 

```
$ vi ~/.bash_profile
```

Add

```
# Add this line to the .bash_profile file
export PATH="/usr/local/mysql/bin:/usr/local/sonar-scanner/bin:$PATH"
```

Then either open a new terminal or run $ source ~/.bash_profile to load the latest

Test that you have the sonar-scanner setup:

```
$ sonar-scanner --version
```


Just to recap quick, you’ve created and run a sonarqube instance with docker. And you have installed the sonarqube scanner to create the sonarqube data to send to the sonarqube instance running with docker.

----

[Next Section: 3 Setup a project on Sonarqube.md](https://github.com/CariZa/sonarqube-walkthrough/blob/master/walkthrough/3%20Setup%20a%20project%20on%20Sonarqube.md)