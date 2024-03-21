const { validateToken } = require("../util/jwtService");

module.exports = function (req, res, next) {
	if (req.originalUrl == "/auth/login") {
		return next();
	}
	var authToken = req.headers.authtoken;
	if (!authToken) return res.status(401).send("no token provided");
	let decodedToken = validateToken(authToken);
	if (!decodedToken) {
		return res.status(401).send("Invalid Auth Token");
	}
	console.log(decodedToken);
	if (!decodedToken.userId || !decodedToken.email)
		return res.status(401).send("Invalid Auth token");
	req.decodedToken = decodedToken;
	next();
};
