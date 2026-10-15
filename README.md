# Autosizing Tableau Dashboard Component for Salesforce

The standard Tableau View component in Salesforce uses a fixed height. Use the files in this repo to create a lightning web component in Salesforce that allows for an embedded Tableau dashboard to automatically size to the screen.

## Tutorial for Beginners

Follow [this trail](https://trailhead.salesforce.com/content/learn/projects/get-started-with-salesforce-development/build-reusable-ui-component-with-lightning-web-components) for a full tutorial on building a custom LWC if you haven't done this before.

## Customization

For further customization, edit the return of the vizUrl() function in tableauAutoSize.js. We are essentially appending to the URL.

### Toolbar Options (iframe URL)

| Values          | Result                                  | 
| :---            | :---                                    |
| `:toolbar=yes`  | Same as default, toolbar at the bottom  |
| `:toolbar=top`  | Toolbar shows above the dashboard       |
| `:toolbar=no`	  | Toolbar is hidden                       |

### Hide Individual Toolbar Buttons

| Parameter	                | Hides|
| :---                       | :---                                    |
| `:showShareOptions=false`  |	Share|
| `:customViews=no`          | View (custom views)|
| `:alerts=no`               | Alerts|
| `:subscriptions=no`        | Subscribe|
| `:dataDetails=no`          | Data Details|
| `:showAskData=false`| Ask Data|

### Other Common Parameters

| Parameter	| Values	| What it does |
| :---                       | :---  | :---  |
| :embed	| yes / y	| **Required.** Hides the Tableau Cloud top navigation so only the dashboard shows|
| :tabs	| yes, no	| Shows or hides sheet tabs |
| :tooltip	| yes, no	| Shows or hides tooltips (shown by default) |
| :refresh	| yes	| Loads the latest data instead of cached data |
| :device	| desktop, tablet, phone	| Forces a specific device layout, if one exists in Tableau |
| :linktarget	| _self, _blank, _parent	| Where links and URL actions open |
| :showAppBanner	| FALSE	| Hides the "Open in Tableau Mobile" banner |
| :revert	| all, filters, sorts, axes, shelves	| Resets the view to its original state |
| :showVizHome	| yes, no	| Tableau Public only; not needed for Tableau Cloud |
| Field filter	| FieldName=Value	| Filters the dashboard on load (case-sensitive), e.g. Season=2026 |


**Note that Salesforce tries to be as true to the Tableau dashboard as possible. So many of these changes can just be done in Tableau if that is easier for you.**



