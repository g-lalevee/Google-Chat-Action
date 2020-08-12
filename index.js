const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');


try {
  // Retrieve input variables
  const googleChatRoom = core.getInput('googleChatRoom');
  console.log(`${googleChatRoom}`);
  const googleChatKey = core.getInput('googleChatKey');
  console.log(`${googleChatKey}`);
  const googleChatToken = core.getInput('googleChatToken');
  console.log(`${googleChatToken}`);
  const message = core.getInput('message');
  console.log(`${message}`);

  const webhookURL = 'https://chat.googleapis.com/v1/spaces/' + googleChatRoom + '/messages?key=' + googleChatKey + '&token=' + googleChatToken;
  const data = JSON.stringify(message);

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
  }).then((response) => {
    console.log(response);
    if (response.status != 200) {
        console.log('Google Chat Action encountered an error:' + response.statusText + '(' + response.status + ')');
        core.setFailed('Google Chat Action failed! Error: ' + response.status) 
    } else {
        core.setOutput("status", response.status);
        core.setOutput("statusText", response.statusText);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
    }
  });



} catch (error) {
  core.setFailed(error.message);
}
