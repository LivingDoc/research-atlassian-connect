module.exports = function (app, addon) {

      const JPG_PATH = "C:/workspace/src/NT/research-atlassian-connect/resources/falloutVaultBoyThumbsUp.jpg"
      const SVG_PATH = "C:/workspace/src/NT/research-atlassian-connect/resources/kiwi.svg"
      const SCRIPT_DATE_TIME = "routes/macro-scripts/date-time-script.js"

      // Helper Functions:

      const fs = require("fs")

      // Function to encode a file to a Base64 string
      function base64_encode(file) {
          // read binary data
          var binaryData = fs.readFileSync(file)
          // convert data to base64 encoded string
          return new Buffer(binaryData).toString('base64')
      }

      // Function to encode a file to an utf8 string
      function utf8_encode(file) {
          // read binary data
          var binaryData = fs.readFileSync(file)
          // convert data to utf8 encoded string
          return new Buffer(binaryData).toString('utf8')
      }


      // Macros:

      // DateTime Macro: displays the current time
      app.get('/express/macro/dynamic/date-time', addon.authenticate(), function(req, res) {
        let hbs = require("express-hbs")
        // Registers a handlebar helper to insert javascript code and to make the macro dynamic --> time will be refreshed every second
        hbs.registerHelper('dateTime', function() {
          return new hbs.SafeString(utf8_encode(SCRIPT_DATE_TIME));
        })
        res.render('dynamic-macro-date-time')
      })

      // Image to Base64 Macro: converts a locally stored jpg to base 64 and displays the content on the confluence page.
      // file is saved at JPG_PATH
      app.get('/express/macro/dynamic/image-to-base64', addon.authenticate(), function(req, res) {
        var preBase64 = 'data:image/jpeg;base64,'
        // concat preBase64 and base64 encoded string cause preBase64 is needed to use <img>-tag
        var base64String = preBase64.concat(base64_encode(JPG_PATH))
        res.render('dynamic-macro-image-to-base64', {
          base64String: base64String
        })
      })

      // Display SVG Macro: displays a locally stored svg image. file is saved at SVG_PATH
      app.get('/express/macro/dynamic/display-svg', addon.authenticate(), function(req, res) {

        var fileContent = utf8_encode(SVG_PATH)
        res.render('dynamic-macro-display-svg', {
          svg: fileContent
        })
      })


}
