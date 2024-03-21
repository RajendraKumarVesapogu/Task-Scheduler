const dotenv = require("dotenv");
dotenv.config();

module.exports.makeCall = async (toPhoneNumber) => {
	const accountSid = process.env.TWILIO_SID;
	const authToken = process.env.TWILIO_AUTH_TOKEN;
	// console.log(accountSid, authToken);
	const client = require("twilio")(accountSid, authToken);
	try {
		const call = await client.calls.create({
			url: "http://demo.twilio.com/docs/voice.xml",
			to: toPhoneNumber,
			from: process.env.TWILIO_PHONE_NUMBER,
		}).then(() => {
			console.log("call made");
			return null;
		});
	} catch (error) {
		console.error("Error making call:", error);
		throw error;
	}
}
