// replace these values with those generated in your TokBox Account
var apiKey = "45957022";
var sessionId = "2_MX40NTk1NzAyMn5-MTUwNTE3MzAyMDg4NH5RanZ2R29EQjEweHVRVFhYN3VkampMNXl-fg";
var token = "T1==cGFydG5lcl9pZD00NTk1NzAyMiZzaWc9N2M5NjE3NTg2YjdlYmRkNGZiNGMxYmRmNDlhNjUzNjc5YjkyOTQ1MzpzZXNzaW9uX2lkPTJfTVg0ME5UazFOekF5TW41LU1UVXdOVEUzTXpBeU1EZzROSDVSYW5aMlIyOUVRakV3ZUhWUlZGaFlOM1ZrYW1wTU5YbC1mZyZjcmVhdGVfdGltZT0xNTA1MTczMDY0Jm5vbmNlPTAuNjY3MDU4MDg1MTMwOTk0NCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA3NzY1MDYzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
  var publisher2 = OT.initPublisher('publisher2', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
  var publisher3 = OT.initPublisher('publisher3', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, publisher2, publisher3, handleError);
    }
  });
}
