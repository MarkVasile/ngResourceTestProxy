# ngResource issue with custom $http calls direct vs proxy
(using angular-seed — the seed for AngularJS apps)

* I have created this test due to an issue I'm having when using custom $http methods and i've published it here not to file it as a bug, but rather to raise awareness of this for anyone who
  might try to use function assignment rather than simple calls. I didn't test this with Restangular, only with ngResource, so those of you who use Restangular may have not encountered this
issue.

If you look at the resource.js you'll see we have a simple ngResource object and a couple of custom methods. Nothing special so far.

However, sometimes in JS I call various methods of an object by 'proxy' so to speak, meaning I assign the method function to a variable and call it later. 
To see what i'm talking about look in controllers.js -- the MyCtrl1 uses function assignment (action) while MyCtrl2 duplicates the post functionality in order to 
directly call the ngResource method on a case-by-case method.

```
var action = Article.$save;
[... some decision making code ...]
```

vs.

```
if (edit) Article.$update(...);
else Article.$save(...);
```

For reasons i don't yet understand MyCtrl1 fails to post the article (take a look at the Networking tab in your Developer Tools). I am running full speed developing a time sensitive project
right now so i don't have time to look into the reasons and possible explanations, but i'll return to this in a couple of weeks and will post any new findings.


### Install Dependencies

```
npm install
```

### Run the Application


```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


### Check results

Open Developer Tools to see console logs and Networking Tab (to see Request payloads)

* The view1 has calls via proxy

* The view2 partial saves the article by calling $save or $update directly
