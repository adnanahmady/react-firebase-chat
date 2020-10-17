const { ...envs } = process.env;

module.exports = {
  apiKey: envs.REACT_APP_FIREBASE_API_KEY,
  authDomain: envs.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: envs.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: envs.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: envs.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envs.REACT_APP_FIREBASE_STORAGE_SENDER_ID,
  appId: envs.REACT_APP_FIREBASE_APP_ID,
  measurementId: envs.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
