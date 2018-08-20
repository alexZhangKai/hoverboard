import admin from 'firebase-admin';
// import serviceAccount from '../serviceAccount';

let firestore = null;
export function initializeFirebase() {
  return new Promise((resolve) => {
    console.log(process.env.AUTH_KEY)
    let privatekey = JSON.parse(JSON.stringify(process.env.AUTH_KEY).split('\\\\').join('\\'));
    const firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: 'firebase-adminsdk-aymeb@gdgcloud-devfest.iam.gserviceaccount.com',
        privateKey: privatekey
      }),
      databaseURL: 'https://gdgcloud-devfest.firebaseio.com'
    });
    firestore = admin.firestore();
    resolve(firebaseApp);
  });
}

export {
  firestore,
}
