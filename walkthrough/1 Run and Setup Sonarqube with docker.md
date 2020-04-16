## Part 1: Run and Setup Sonarqube with docker

Let’s setup sonarqube ourselves and play around with it.

Sonarqube in itself is just a GUI. It displays data that is the sonarqube scanner sends it. It doesn’t do any scanning or monitoring itself, it relies on the sonarqube scanner to send it information.

It offers a few useful features for effective CI 

Quality gates
Sonarqube can help notify you if code drops below a certain quality level
Again, it does not monitor that, it tells you what you send it
Feedback/Notifications - pipeline errors

Get experienced

Based on this guide:

https://docs.sonarqube.org/latest/setup/get-started-2-minutes/

https://hub.docker.com/r/bitnami/sonarqube/

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

