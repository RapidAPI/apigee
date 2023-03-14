# Description

Collect Apigee proxy logs and forward it to RapidAPI Analytics api

# Installation

JavaScript policy:
Use [Apigee’s JavaScript policy](https://docs.apigee.com/api-platform/reference/policies/javascript-policy) to send logs to

1. Select the Apigee proxy from which you want to send logs to RapidAPI.
2. In the selected proxy overview page, click on the ‘DEVELOP’ tab located in the top-right corner.
3. Under Resources, go to add a new JavaScript policy. Then edit the JavaScript file that has been created under the ‘Resources –> jsc’ dropdown.
4. Add the JavaScript code snippet in it. Make sure to set your Rapid keys: RAPID_PLATFORM_ANALYTICS_URL, RAPID_CONSUMER_KEY, RAPID_PLATFORM_ANALYTICS_HOST.
5. Attach the the js policy to the proxy response section by clicking "add policy step".
6. Add new Policy type "AssignMessage" and paste the content of the AssignMessage.xml from this repo. 
7. Add the AssignMessage policy the proxy request section by clicking "add policy step". (This will make the request object available on the response section)
8. Save and Deploy