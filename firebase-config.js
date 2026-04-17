/* ========================================
   Firebase 설정
   ======================================== */

const firebaseConfig = {
  apiKey: "AIzaSyAACA_viJ0sT6gEvKUkFJCxJh40WMBrpK0",
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


/* ========================================
   방문자 카운터
   ======================================== */

(function() {
  if (!isFirebaseConfigured || typeof firebase === 'undefined') return;

  var db = firebase.firestore();
  var ref = db.collection('counters').doc('visitors');

  function fmt(n) {
    // 6자리 숫자로 패딩 후 쉼표 삽입 → 000,004 형태
    var padded = String(n).padStart(6, '0');
    return padded.slice(0, 3) + ',' + padded.slice(3);
  }

  function updateUI(count) {
    var f = fmt(count);
    // 사이드바 카운터 (index.html)
    var el = document.getElementById('visitor-count');
    if (el) el.textContent = f;
    // 네오 터미널 위젯
    var neo = document.querySelector('.neo-visitor-num');
    if (neo) neo.textContent = f;
  }

  // 방문 카운트 증가 (세션당 1회)
  if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', '1');
    ref.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true })
      .then(function() {
        return ref.get();
      })
      .then(function(doc) {
        if (doc.exists) updateUI(doc.data().count);
      })
      .catch(function(e) { console.warn('[visitor]', e); });
  } else {
    // 이미 방문한 세션 → 읽기만
    ref.get()
      .then(function(doc) {
        if (doc.exists) updateUI(doc.data().count);
      })
      .catch(function(e) { console.warn('[visitor]', e); });
  }
})();
