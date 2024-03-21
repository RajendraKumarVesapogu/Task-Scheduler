const { saveOTP, fetchOTP } = require("../../Repositories/otpRepository");
const { getUserByEmail } = require("../userServices/userProfileService");
const { hashPassword, validatePassword } = require("./hashingService");
const sendMail = require("./mailService");

const generateRandomOtp = () => {
	return Math.floor(Math.random() * 1000000);
};

// TODO : implement better email template for sending emails
module.exports.sendOtp = async (email) => {
	let user = await getUserByEmail(email);
	if (user == null) {
		throw Error("User not found");
	}
	let otp = generateRandomOtp().toString();
	if (otp.length == 5) {
		otp = "0" + otp;
	}
	await sendMail({
		toEmail: email,
		mailSubject: "OTP",
		mailBody: otp,
	});
	let hashedOtp = await hashPassword(otp);
	await saveOTP({ email: email, hashedOtp: hashedOtp });
};

// TODO : validate the provided otp with the otp saved in database
module.exports.validateOtp = async (email, otp) => {
	let hashedOtp = (await fetchOTP(email))["hashedOtp"];
	return validatePassword({ hashedPassword: hashedOtp, password: otp });
};
