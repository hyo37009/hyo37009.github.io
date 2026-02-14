/* ========================================
   방명록 스크립트

   Firebase Firestore 연동 전에는
   안내 메시지만 표시됩니다.

   Firebase 연동 후에는 이 파일을 업데이트합니다.
   ======================================== */

function submitGuestbook() {
  if (typeof isFirebaseConfigured === 'undefined' || !isFirebaseConfigured) {
    alert('아직 Firebase가 연결되지 않았습니다!');
    return;
  }

  // Firebase 연동 후 구현 예정
  // Firestore에 { name, message, timestamp } 저장
}

function loadGuestbook() {
  if (typeof isFirebaseConfigured === 'undefined' || !isFirebaseConfigured) {
    return; // Firebase 미설정 시 안내 메시지만 표시
  }

  // Firebase 연동 후 구현 예정
  // Firestore에서 방명록 목록 불러오기
}

// 페이지 로드 시 방명록 불러오기
document.addEventListener('DOMContentLoaded', loadGuestbook);
