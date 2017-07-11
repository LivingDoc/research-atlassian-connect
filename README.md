<h3>What are the prototypes capable of?</h3>

<br>The Prototypes includes two GeneralPages and two Macros(at the moment just staticContentMacros).
<br><br>
<b>GeneralPages</b><br>
There are two basic Pages which can be found in the main menu under the point "extension"
<br><br>
<b>StaticContentMacros</b>
<br>There are two Macros which can be inserted in a Confluence Page
<br><br>
<i>Date-Time-Macro</i>
: The Time-Macro displays the date and time of the moment the page was synced
<br><br>
<i>Hello-World-Test-Macro</i>
: Displays a Text which includes a set of Parameter. 
<br>You can change the value of the parameter with the edit-button which appears if you click on the macro in editing-mode 
<br>The last parameter depents on the Title of the Current Page


<br><h3>Getting started</h3> 

<br>First of all you need to 
<a href="https://www.atlassian.com/ondemand/signup/form?product=confluence.ondemand,jira-software.ondemand,jira-servicedesk.ondemand,jira-core.ondemand&developer=true">sign up and register </a>
your atlassian developer environment


<h3>What to do to use the Atlassian-Connect-Express Prototype</h3>

Operating System: Windows 7 
<br><br>
Install <a href="https://nodejs.org/en/download/">Node.js</a> for the operating system you are using
<br><br>
Open Powershell and head to the directory where you cloned this git repository 
<br><br>
Install ngrok with the command <code>npm install ngrok -g</code> 
<br><br>
Run <code>npm start</code> to start node server => there will be two powershell commands executed to create a tunnel with ngrok and to log the current status information for the tunnel
<br><br>
Copy the publicURL(of the console output) to your clipboard and insert it in the atlassian-connect.json file everywhere where you can find <code>{{publicUrl}}</code>
<br><br>
Then switch to your browser and open you atlassian cloud instance
<br>
&#8594; Settings
&#8594; Manage Add-ons
&#8594; Upload Add-on
&#8594; Insert the publicURL you copied before

<br><h3>What to do to use the Atlassian-Connect-Spring-Boot Prototype</h3>
