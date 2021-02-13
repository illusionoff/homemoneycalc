module.exports = {
  NODE_TLS_REJECT_UNAUTHORIZED: "0",
  MONGODB_URI:
    "mongodb+srv://alex:ICBZCa0ta3jLtDQl@cluster0-tyjtp.mongodb.net/shop",
  SESSION_SECRET: "ilovescotchscotchyscotchscotch",
  SESSION_MAXAGE: 24 * 60 * 60 * 1000, // Время жизни сесии 24 * 60 * 60 * 1000 = 1 сутки
  // PASSWORD_GMAIL: 'passwsx16',
  // GMAIL_ADDRES: 'myhomeshop16@gmail.com',
  // BASE_URL: "http://localhost:8080",
  PORT: 5000, // 8080,
  BASE_URL: "http://localhost:5000", // "http://localhost:8080" http://localhost:5000
  EMAIL_FROM: "learnnodelang@gmail.com",
  GMAIL_SETTINGS: {
    service: "learnwewe@mail.com",
    // service: "gmail",
    auth: {
      // type: 'OAuth2',
      user: "learnnodelang@gmail.com",
      pass: "pass16gmail",
    },
  },
  FACEBOOK_AUTH: {
    clientID: "626143524912139", // your App ID
    clientSecret: "f91993a87bf0d1a501f2b60463911408", // your App Secret
    callbackURL: "http://localhost:8080/auth/facebook/callback",
    // callbackURL: "https://funprograms.ru/auth/facebook/callback",
  },
  GOOGLE_AUTH: {
    clientID:
      "55184465602-i1bi2om7ctg4k8ra0n4e2ukgs6fpnupa.apps.googleusercontent.com",
    clientSecret: "dlN45_PtqLeL4R8IqA3I5CV_",
    callbackURL: "http://localhost:8080/auth/google/callback",
    // callbackURL: "https://funprograms.ru/auth/google/callback",
  },
  // TWITTER_AUTH : {
  // 	'consumerKey' 		: 'your-consumer-key-here',
  // 	'consumerSecret' 	: 'your-client-secret-here',
  // 	'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
  // },
};
// mygoogle Id: 114142487789692040539
