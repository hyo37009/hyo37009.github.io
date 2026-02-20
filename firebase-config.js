/* ========================================
   Firebase 설정
   ======================================== */

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const isFirebaseConfigured = firebaseConfig.apiKey !== "";

if (isFirebaseConfigured && typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}
