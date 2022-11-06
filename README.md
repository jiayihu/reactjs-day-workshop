# skei

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> **NOTE**: the API keys used during the workshop have been revoked and don't work anymore. You need to create your own accounts with [Firebase](https://firebase.google.com/) and [Nordigen](https://nordigen.com/en/)

## Testing

During testing, Nordigen APIs have actually been mocked with [MSW](https://mswjs.io/) to avoid unnecessary hitting the real APIs whereas Firebase API services have been mocked with fixtures. This means that you don't actually any account in order to run the tests and play with them.

## Firebase

Firebase is used for Authentication and Realtime Database (Firestore). After you have [created a project with Firebase](https://cloud.google.com/firestore/docs/client/get-firebase?hl=en), copy over the [configuration keys](https://support.google.com/firebase/answer/7015592?hl=en#zippy=%2Cin-this-article) into the file `src/services/firebase.ts`:

```js
const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'skei-11111.firebaseapp.com',
  projectId: 'skei-11111',
  storageBucket: 'skei-11111.appspot.com',
  appId: '1:1111111:web:11111asacv11111',
};
```

## Nordigen

Nordigen is used as service provider for PSD2 bank information. After you have created an account, copy over the [User Secrets](https://ob.nordigen.com/user-secrets/) into the file `.env`:

```
REACT_APP_NORDIGEN_SECRET_ID=secret-id
REACT_APP_NORDIGEN_SECRET_KEY=secret-key
```
