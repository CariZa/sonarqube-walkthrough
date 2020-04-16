## Part 1: Run and Setup Sonarqube with docker

Let’s setup sonarqube ourselves and play around with it.

Sonarqube is a really useful tool to use to view the quality of multiple projects. It integrates really well with CI (continuous integration). 

It displays data that sonarqube scanner sends it. It relies on the sonarqube scanner to send it information.

This walkthrough is a hands on step by step journey to get practical experience with sonarqube in an environment of your choosing.

Some references:

https://docs.sonarqube.org/latest/setup/get-started-2-minutes/


Run with docker:

```
$ docker run -d --rm --name sonarqube -p 9000:9000 sonarqube:8.2-community
```

Just a note: I'm using the sonarqube image tagged "8.2-community" this was the latest at the time of writing this, might not be the latest anymore.

Give it a few minutes to spin up.

You can allows follow logs if it’s taking a while to spin up 

```
$ docker logs sonarqube -f
```

Note: There is no persistent storage setup here, so if you stop the container and run it again it will start from scratch.

Browse:
http://localhost:9000

That’s it! You have a running sonarqube environment running with docker to integrate with. Now we need the sonarqube scanner.

