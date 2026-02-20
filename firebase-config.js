/* ========================================
   Firebase 설정
   ======================================== */

const firebaseConfig = {
  apiKey: "AIzaSyB3Z0c1-xL0wf-bBBuIXLorGl3w5y0Ydz4",
  authDomain: "blog-a4550.firebaseapp.com",
  projectId: "blog-a4550",
  storageBucket: "blog-a4550.firebasestorage.app",
  messagingSenderId: "162752629868",
  appId: "1:162752629868:web:21de66a22387b689ff1c49"
};

const isFirebaseConfigured = firebaseConfig.apiKey !== "";

if (isFirebaseConfigured && typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}
