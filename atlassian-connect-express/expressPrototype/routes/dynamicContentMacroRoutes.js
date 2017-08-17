module.exports = function (app, addon) {

      const JPG_PATH = "C:/YOUR_PATH/research-atlassian-connect/resources/falloutVaultBoyThumbsUp.jpg"
      const SVG_PATH = "C:/YOUR_PATH/research-atlassian-connect/resources/kiwi.svg"

      // DateTime Macro: displays the current time
      app.get('/express/macro/dynamic/date-time', addon.authenticate(), function(req, res) {
        let hbs = require("express-hbs")
        // Registers a handlebar helper to insert javascript code and to make the macro dynamic --> time will be refreshed every second
        hbs.registerHelper('dateTime', function() {
          return new hbs.SafeString(
            "<script>" +
              "setInterval(myTimer, 1000);" +
              "function myTimer() {" +
                "var d = new Date();" +
                "document.getElementById('localDate').innerHTML = 'DATE: ' + d.toDateString();" +
                "document.getElementById('localTime').innerHTML = 'TIME: ' + d.toLocaleTimeString();" +
              "}" +
            "</script>"
          );
        })
        res.render('dynamic-macro-date-time')
      })



      // Image to Base64 Macro: converts a locally stored jpg to base 64 and displays the content on the confluence page.
      // file is saved at JPG_PATH
      app.get('/express/macro/dynamic/image-to-base64', addon.authenticate(), function(req, res) {
        var fs = require("fs")
        function base64_encode(file) {
            // read binary data
            var binaryData = fs.readFileSync(file)
            // convert data to base64 encoded string
            return new Buffer(binaryData).toString('base64')
        }
        var preBase64 = 'data:image/jpeg;base64,'
        // concat preBase64 and base64 encoded string cause preBase64 is needed to use <img>-tag
        var base64String = preBase64.concat(base64_encode(JPG_PATH))
        res.render('dynamic-macro-image-to-base64', {
          base64String: base64String
        })

      })


      // Display SVG Macro: displays a locally stored svg image. file is saved at SVG_PATH
      app.get('/express/macro/dynamic/display-svg', addon.authenticate(), function(req, res) {
        var fs = require("fs")
        function utf8_encode(file) {
            // read binary data
            var binaryData = fs.readFileSync(file)
            // convert data to utf8 encoded string
            return new Buffer(binaryData).toString('utf8')
        }
        var fileContent = utf8_encode(SVG_PATH)
        res.render('dynamic-macro-display-svg', {
          svg: fileContent
        })
      })
}
