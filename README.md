# Atlassian Connect Research Project
---
This is a research project to see if Atlassian Connect is suited to be used for developing LivingDoc2.
The project contains two prototypes, one coded in Java with Spring Boot and one coded in JavaScript with Express.js.
The operating system used to code these prototypes was Windows 7 and Windows 10. 
The following guide was just tested for Windows 7/10 systems. 

In the following is explained what the prototypes are containing, after that there's a guide about how to install and use the prototypes.

---
#### What are the prototypes capable of?
---
The two Prototypes includes two GeneralPages, two Static Content Macros and three Dynamic Content Macros.

**General Pages**
There are two basic pages which can be found in the main menu under the point "extenseion". They don't contain specific content and just exist for testing purpose.

**Static Contenct Macros**
There are two macros which can be inserted in a Confluence page.

*date-time-macro* : The date-time-macro displays the date and time of the moment the page was synced.

*hello-world-test-macro* : Displays a text which includes a set of parameter. You can change the value of the parameter with the edit-button which appears if you click on the macro in editing-mode The last parameter depents on the title of the current page. 

**Dynamic Content Macros**
There are a total of three dynamic content macros.

*date-time-macro* : The dynamic version of the static date-time-macro. It refreshs the displayed time every second.

*image-to-base64* : Converts a locally stored .jpg-file to a Base64-String and displays the image on the confluence page where the macro is used.

*display-svg* : Loads the code of a locally stored svg image and displays that image on the confluence page, where the macro is inserted.




---
#### How to Install one of the Prototypes?
---
First to say, you can use just one of the Prototypes at the same time. That's because both, the Spring Boot and the Express.js version, will run at localhost `port:8080`.

Operating System: Windows 7/10

Let's get started:
Sign up and register your own atlassian developer evironment [here](https://www.atlassian.com/ondemand/signup/form?product=confluence.ondemand,jira-software.ondemand,jira-servicedesk.ondemand,jira-core.ondemand&developer=true).

Open your bash/shell and direct to the folder where you want to clone the prototypes to.
Then clone the GitHub project:
Clone with SSH: `git clone git@github.com:LivingDoc/research-atlassian-connect.git`
or
Clone with HTTPS: `git clone https://github.com/LivingDoc/research-atlassian-connect.git`

Do you have Node.js installed? If not download and install it from [here](https://nodejs.org/en/download/).

If Ubuntu is used jump to the quote. Otherwise do the following:
Open a second bash/shell and run
```
C:\Users\"username"> npm install ngrok -g
C:\Users\"username"> ngrok http 8080
```
Copy the forwarding https-url of the powershell output to your clipboard (something like `https://6088840e.ngrok.io`)

> Download ngrok [here](https://ngrok.com/download) and follow the three steps
Then run `./ngrok http 8080` in the terminal
Copy the forwarding https-url of the powershell output to your clipboard (something like `https://6088840e.ngrok.io`)

**Spring Boot Prototype**
Open the ` research-atlassian-connect/Spring-Boot-Connect/atlassian-connect-spring-boot/ ` project in a suitable IDE like [IntelliJ](https://www.jetbrains.com/idea/download/#section=windows), or [Eclipse](http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/oxygen/R/eclipse-jee-oxygen-R-win32-x86_64.zip)

Direct to `src` &rarr; `main` &rarr; `resources` &rarr; `atlassian-connect.json` and replace `{{publicUrl}}` with the copied https-url

For the next step you should make sure that you have installed and configured [Maven](https://maven.apache.org/).
Either run
```
C:\YourPath\research-atlassian-connect\Spring-Boot-Connect\> mvn spring-boot:run
```
in your powershell/bash
or 
(if IntelliJ is used) go to `View` &rarr; `Tool Windows` &rarr; `Maven Projects` &rarr; `atlassian-connect-spring-boot` &rarr; `Plugins` &rarr; `spring-boot` 
and click `spring-boot:run` 

Now install the Add-on in your atlassian developer environment. (scroll down to Installing an Add-on)


**Express.js Prototype**
Navigate to the root of the `atlassian-connect-express` project and open the atlassian-connect.json in an editor.
Replace `{{publicUrl}}` with the copied https-url from the last step.

Then open the shell at the current location and run the following command:
```
C:\YourPath\research-atlassian-connect\atlassian-connect-express> npm install
C:\YourPath\research-atlassian-connect\atlassian-connect-express> npm start
```
Now you can install the Add-on in your atlassian developer environment.(scroll down to Installing an Add-on)

**Installing an Add-on**

Open your Confluence Cloud environment.

Go to `Settings` &rarr; ` Manage Add-ons` &rarr; `Settings`(at the bottom of the page) and enable development mode 

Then click apply and click 'Upload Add-on' (at top of page)
There you insert the copied https-url and click the Upload button.


**Insert a macro in a Confluence page**

Hit the `+`-Button on the left sidebar &rarr; choose a space &rarr; create an empty page

Start editing the created page (pencil-icon on right top of the created page)

Type `"{LD2"` &rarr; now you can choose one of the macros the prototype contains
