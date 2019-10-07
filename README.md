# CYOQ-CREATE YOUR OWN QUEUE
General Purpose Queue System which also includes notification capabilities and intelligent scheduling.

## Set up environment
Step 1: Install git at [https://git-scm.com/downloads](https://git-scm.com/downloads)

Step 2: Install node js at [https://nodejs.org/en/](https://nodejs.org/en/)

Step 3: Install Mongo DB at [https://www.mongodb.com/download-center](https://www.mongodb.com/download-center)

Step 4: At the Github repo, click ```Clone or download```

Step 5: Copy the link provided.

Step 6: On the command line, enter:
> ```git clone <link>```

Step 7: Navigate into the new folder created:
> ```cd CYOQ-CreateYourOwnQueue```

Step 8: Get all the dependencies:
> ```npm install```

Step 9: The final release is in the v1.0 branch
> ```git checkout v1.0```

## Make changes
Make any changes on the ```dev``` branch. Changes will be merged into the ```master``` branch upon each release. To switch to the ```dev``` branch, on your command line enter:
> ```git checkout dev```

After you are done your changes, mark all the changed files to be ready for sharing online:
> ```git add .```

Add a message explaining what changes you've made:
> ```git commit -m "<explanation>"```

Then share your changes (push it to the remote source):
> ```git push```

## Run application
Step 1: Run the server. On the command line:
> ```npm start```

Step 2: Go to the site at `localhost:4200` on your browser.

Step 3: Stop application in the command line by pressing `Ctrl+C`
