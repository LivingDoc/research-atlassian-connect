module.exports = function (app, addon) {

    // Root route. This route will serve the `atlassian-connect.json` unless the
    // documentation url inside `atlassian-connect.json` is set
    app.get('/', function (req, res) {
        res.format({
            // If the request content-type is text-html, it will decide which to serve up
            'text/html': function () {
                res.redirect('/atlassian-connect.json');
            },
            // This logic is here to make sure that the `atlassian-connect.json` is always
            // served up when requested by the host
            'application/json': function () {
                res.redirect('/atlassian-connect.json');
            }
        });
    });

    // This is an example route that's used by the default "generalPage" module.
    // Verify that the incoming request is authenticated with Atlassian Connect
    app.get('/express/generalPage/hello-world', addon.authenticate(), function (req, res) {
            // Rendering a template is easy; the `render()` method takes two params: name of template
            // and a json object to pass the context in
            res.render('general-page-hello-world', {
                title: 'Atlassian Connect'
                //issueId: req.query['issueId']
            });
        }
    );

    // Add any additional route handlers you need for views or REST resources here...
    app.get('/express/generalPage/test-page', addon.authenticate(), function(req, res) {
        res.render('general-page-test-page', {
            title: 'This is a title!'
        });
    });


    // STATIC CONTENT MACROS

    app.get('/express/macro/static/hello-world', addon.authenticate(), function(req, res) {
      let thisWorld = req.query.thisWorld
      let personName = req.query.personName
      let pageTitle = req.query.pageTitle
      res.render('static-macro-hello-world', {
        thisWorld: thisWorld
        , personName: personName
        , pageTitle: pageTitle
      });
    });


    app.get('/express/macro/static/date-time', addon.authenticate(), function(req, res) {
      let currentDateTime = new Date()
      let date = currentDateTime.toDateString()
      let time = currentDateTime.toLocaleTimeString()
      res.render('static-macro-date-time', {
        date: date
        , time: time
      })
    })


    // DYNAMIC CONTENT MACROS

    app.get('/express/macro/dynamic/date-time', addon.authenticate(), function(req, res) {
      let currentDateTime = new Date()
      let date = currentDateTime.toDateString()
      let time = currentDateTime.toLocaleTimeString()
      res.render('dynamic-macro-date-time', {
        date: date
        , time: time
      })
    })

    app.get('/express/macro/dynamic/image-to-base64', addon.authenticate(), function(req, res) {
      let imageUrl = "http://images.techtimes.com/data/images/full/163412/falloutvaultboythumbsup.jpg"
      res.render('dynamic-macro-image-to-base64', {
        imageUrl: imageUrl
      })
    })

    // load any additional files you have in routes and apply those to the app
    {
        var fs = require('fs');
        var path = require('path');
        var files = fs.readdirSync("routes");
        for(var index in files) {
            var file = files[index];
            if (file === "index.js") continue;
            // skip non-javascript files
            if (path.extname(file) != ".js") continue;

            var routes = require("./" + path.basename(file));

            if (typeof routes === "function") {
                routes(app, addon);
            }
        }
    }
};
