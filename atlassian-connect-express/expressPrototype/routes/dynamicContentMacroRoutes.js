module.exports = function (app, addon) {

      const JPEG_PATH = "C:/YOUR_PATH/research-atlassian-connect/Spring-Boot-Connect/atlassian-connect-spring-boot/src/main/resources/falloutVaultBoyThumbsUp.jpg"
      const SVG_PATH = "C:/YOUR_PATH/research-atlassian-connect/Spring-Boot-Connect/atlassian-connect-spring-boot/src/main/resources/kiwi.svg"

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



      // Image to Base64 Macro: converts a locally stored jpeg to base 64 and displays the content on the confluence page.
      // file is saved at JPEG_PATH
      app.get('/express/macro/dynamic/image-to-base64', addon.authenticate(), function(req, res) {
        let imageUrl = "http://images.techtimes.com/data/images/full/163412/falloutVaultBoyThumbsUp.jpg"
        res.render('dynamic-macro-image-to-base64')
      })



}
