const { ...envs } = process.env;

module.exports = {
    limit: +envs.REACT_APP_FIREBASE_MESSAGES_LIMIT || 25
};