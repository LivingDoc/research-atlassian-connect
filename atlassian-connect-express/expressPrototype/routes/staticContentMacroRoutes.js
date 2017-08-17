module.exports = function (app, addon) {

      app.get('/express/macro/static/hello-world', addon.authenticate(), function(req, res) {
        let thisWorld = req.query.thisWorld
        let personName = req.query.personName
        let pageTitle = req.query.pageTitle
        res.render('static-macro-hello-world', {
          thisWorld: thisWorld
          , personName: personName
          , pageTitle: pageTitle
        })
      })


      app.get('/express/macro/static/date-time', addon.authenticate(), function(req, res) {
        let currentDateTime = new Date()
        let date = currentDateTime.toDateString()
        let time = currentDateTime.toLocaleTimeString()
        res.render('static-macro-date-time', {
          date: date
          , time: time
        })
      })
}
