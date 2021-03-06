const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');

const options = {
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	callbackURL: '/google/redirect'
};

module.exports = (passport) => {
	passport.use(new GoogleStrategy(options, async (accessToken, refreshToken, profile, done) => {
		console.log('passport callback function fired:');
    console.log(profile);

		await User.findOrCreate({where: {
			name: profile.displayName,
			thumbnail: profine._json.picture
		}}).then((user) => {
			console.lot('Ok');
		});

	}))
};
