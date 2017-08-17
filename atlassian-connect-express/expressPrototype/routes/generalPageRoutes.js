module.exports = function (app, addon) {

    app.get('/express/generalPage/hello-world', addon.authenticate(), function (req, res) {
            // Rendering a template is easy; the `render()` method takes two params: name of template
            // and a json object to pass the context in
            res.render('general-page-hello-world', {
                title: 'Atlassian Connect'
                //issueId: req.query['issueId']
            })
        }
    )

    app.get('/express/generalPage/test-page', addon.authenticate(), function(req, res) {
        res.render('general-page-test-page', {
            title: 'This is a title!'
        })
    })
}
