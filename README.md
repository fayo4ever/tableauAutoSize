# Autosizing Tableau Dashboard Component for Salesforce

The standard Tableau View component in Salesforce uses a fixed height. Use the files in this repo to create a lightning web component in Salesforce that allows for an embedded Tableau dashboard to automatically size to the screen.

Follow [this trail](https://trailhead.salesforce.com/content/learn/projects/get-started-with-salesforce-development/build-reusable-ui-component-with-lightning-web-components), for a full tutorial on building a custom LWC if you haven't done this before.

For further customization, edit the return of the vizUrl() function in tableauAutoSize.js. We are essentially appending to the URL.

### Toolbar Options (iframe URL)

| Values        | Result                                  | 
| :---          | :---                                    |
| :toolbar=yes  | Same as default, toolbar at the bottom  |
| :toolbar=top  | Toolbar shows above the dashboard       |
| :toolbar=no	  | Toolbar is hidden                       |

### Hide Individual Toolbar Buttons

Parameter	Hides
`:showShareOptions=false`	Share
`:customViews=no`	View (custom views)
`:alerts=no`	Alerts
`:subscriptions=no`	Subscribe
`:dataDetails=no`	Data Details
`:showAskData=false`	Ask Data


