import admin from 'firebase-admin';
// import serviceAccount from '../serviceAccount';

let firestore = null;
export function initializeFirebase() {
  return new Promise((resolve) => {

    const firebaseApp = admin.initializeApp({
      serviceAccountId: '41962893823@cloudbuild.gserviceaccount.com',
    });
    console.log("----pass initialisation----");
    firestore = admin.firestore();
    resolve(firebaseApp);
    console.log("----finish initialisation----");
  });
}

export {
  firestore,
}
