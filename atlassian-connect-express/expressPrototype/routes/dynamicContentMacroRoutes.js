module.exports = function (app, addon) {

      const JPG_PATH = "../../resources/falloutVaultBoyThumbsUp.jpg"
      const SVG_PATH = "../../resources/kiwi.svg"
      const SCRIPT_DATE_TIME = "routes/macro-scripts/date-time-script.js"

      // Helper Functions:

      const fs = require("fs")

      // Function to encode a file to a Base64 string
      function file_encode(file, convertionType) {
          // read binary data
          var binaryData = fs.readFileSync(file)
          // convert data to base64 encoded string
          return new Buffer(binaryData).toString(convertionType)
      }

      // Macros:

      // DateTime Macro: displays the current time
      app.get('/express/macro/dynamic/date-time', addon.authenticate(), function(req, res) {
        let hbs = require("express-hbs")
        // Registers a handlebar helper to insert javascript code and to make the macro dynamic --> time will be refreshed every second
        hbs.registerHelper('dateTime', function() {
          return new hbs.SafeString(file_encode(SCRIPT_DATE_TIME, 'utf8'));
        })
        res.render('dynamic-macro-date-time')
      })

      // Image to Base64 Macro: converts a locally stored jpg to base 64 and displays the content on the confluence page.
      // file is saved at JPG_PATH
      app.get('/express/macro/dynamic/image-to-base64', addon.authenticate(), function(req, res) {
        var preBase64 = 'data:image/jpeg;base64,'
        // concat preBase64 and base64 encoded string cause preBase64 is needed to use <img>-tag
        var base64String = preBase64.concat(file_encode(JPG_PATH, 'base64'))
        res.render('dynamic-macro-image-to-base64', {
          base64String: base64String
        })
      })

      // Display SVG Macro: displays a locally stored svg image. file is saved at SVG_PATH
      app.get('/express/macro/dynamic/display-svg', addon.authenticate(), function(req, res) {

        var fileContent = file_encode(SVG_PATH, 'utf8')
        res.render('dynamic-macro-display-svg', {
          svg: fileContent
        })
      })


}
