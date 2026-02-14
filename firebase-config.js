/* ========================================
   Firebase 설정 파일

   Firebase 프로젝트를 만든 후 아래 값을 채워주세요.
   https://console.firebase.google.com/

   1. Firebase 프로젝트 생성
   2. 웹 앱 추가
   3. 아래 firebaseConfig에 본인 설정값 복사
   4. Firestore Database 활성화
   ======================================== */

// Firebase SDK (CDN)
// 이 파일이 로드되기 전에 Firebase SDK가 필요합니다.
// guestbook.html에서 순서대로 로드합니다.

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Firebase 초기화 여부
const isFirebaseConfigured = firebaseConfig.apiKey !== "";
