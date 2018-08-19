import admin from 'firebase-admin';
// import serviceAccount from '../serviceAccount';

let firestore = null;
export function initializeFirebase() {
  return new Promise((resolve) => {

    const firebaseApp = admin.initializeApp({
      serviceAccountId: '1068100401628@cloudbuild.gserviceaccount.com'
    });
    firestore = admin.firestore();
    resolve(firebaseApp);
  });
}

export {
  firestore,
}
