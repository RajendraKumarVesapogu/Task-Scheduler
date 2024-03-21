// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACd27d303c041ec607960a27225c70097a";
const authToken = "06e4eeec0052e0e7e28c33c434ed554a";
const client = require("twilio")(accountSid, authToken);


client.calls.create({
  url: "http://demo.twilio.com/docs/voice.xml",
  to: "+916304283125",
  from: "+15642z167565",
})
.then(call => console.log(call.sid));

module.exports.makeCall = async (toPhoneNumber, message) => {
	try {
	const call = await client.calls.create({
	  url: "http://demo.twilio.com/docs/voice.xml",
	  to: "+91"+toPhoneNumber,
	  from: "+15642167565",
	});
	console.log(`Call initiated: ${call.sid}`);
	return call.sid;
  } catch (error) {
	console.error("Error making call:", error);
	throw error;
  }
}
