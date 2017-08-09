### What are the prototypes capable of?

There are two identical prototypes. One was coded in Java with Spring Boot, the other was coded in JavaScript with Express.js.
The two Prototypes includes two GeneralPages and two static content macros, as well as two dynamic content macros.

##### GeneralPages
There are two basic Pages which can be found in the main menu under the point "extension" 

##### StaticContentMacros 
There are two Macros which can be inserted in a Confluence Page 

_date-time-macro_ : The _date-time-macro_ displays the date and time of the moment the page was synced 

_hello-world-test-macro_ : Displays a Text which includes a set of Parameter. 
You can change the value of the parameter with the edit-button which appears if you click on the macro in editing-mode 
The last parameter depents on the Title of the Current Page

##### DynamicContentmacros
There are a total of two dynamic content macros

_date-time-macro_ : The dynamic version of the static _date-time-macro_

_image-to-base64_ : Converts a locally stored .jpg to Base64 and displays the image on the confluence page where the macro is used

_display-svg_     : Displays a locally stored svg image on the condluence page where the macro is used

##### Getting started (Operating System: Windows 7)


You need to sign up and register your atlassian developer environment [here](https://www.atlassian.com/ondemand/signup/form?product=confluence.ondemand,jira-software.ondemand,jira-servicedesk.ondemand,jira-core.ondemand&developer=true).

Clone the research-atlassian-connect prototypes:
```sh
git clone https://github.com/testIT-LivingDoc/research-atlassian-connect.git
```
or
```sh
git clone git@github.com:testIT-LivingDoc/research-atlassian-connect.git
```

Make sure you have installed [Node.js](https://nodejs.org/en/download/)

Open Powershell and run:

```sh
C:\Users\user> npm install ngrok -g
C:\Users\user> ngrok http 8080
```

ngrok is now tunneling your localhost on port 8080

Copy the https-url of the powershell output to(something like `https://6088840e.ngrok.io`)

Open both the `atlassian-connect.json` files and replace the `{{publicUrl}}` with the copied https-url

Last but not least you have to open the `DynamicMacroControlle.java` and change the final String `JPEG_PATH` and `SVG_PATH`.
Therefore replace 'YOUR_PATH' with the path where you cloned this project to.

Now you are ready to start !

##### Spring Boot Protoype

Open the ` research-atlassian-connect/Spring-Boot-Connect/atlassian-connect-spring-boot/ ` project in a suitable IDE 

Then run the `spring-boot:run` command (using IntelliJ you find it under: `Maven Projects` &rarr; `atlassian-connect-spring-boot` &rarr; `Plugins` &rarr; `spring-boot` &rarr; `spring-boot:run`)

or run the following in your powershell:
```sh 
C:\YourPath\research-atlassian-connect\Spring-Boot-Connect\> mvn spring-boot:run
```
Now install the Add-on in your atlassian developer environment.

##### Express Protoype
Open Powershell and navigate to the root of the `atlassian-connect-express` project and run:
```sh
C:\YourPath\research-atlassian-connect\atlassian-connect-express> npm start
```
Now your node server is running and you cann install the add-on

##### Installing an Add-on

Open your Confluence Cloud environment

Got to `Settings` &rarr; `Manage Add-ons` &rarr; `Upload Add-on`
There you insert the url of the public ngrok tunnel you copied before.
