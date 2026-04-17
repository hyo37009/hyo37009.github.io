/* ========================================
   방명록 스크립트 — Firebase Firestore 연동
   ======================================== */

/* ── 유틸리티 ── */

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* 랜덤 파스텔 색상 (닉네임 기반 고정) */
function nameToColor(name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  var hue = Math.abs(hash) % 360;
  return 'hsl(' + hue + ', 55%, 88%)';
}

function nameToAccent(name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  var hue = Math.abs(hash) % 360;
  return 'hsl(' + hue + ', 45%, 42%)';
}

/* ── 아이콘 피커 ── */

var selectedIcon = '🐶';

document.addEventListener('DOMContentLoaded', function() {
  var picker = document.getElementById('gb-icon-picker');
  if (!picker) return;

  picker.addEventListener('click', function(e) {
    var btn = e.target.closest('.gb-icon-btn');
    if (!btn) return;

    picker.querySelectorAll('.gb-icon-btn').forEach(function(b) {
      b.classList.remove('selected');
    });
    btn.classList.add('selected');
    selectedIcon = btn.dataset.icon;
  });

  /* 글자수 카운터 */
  var msgEl = document.getElementById('guest-message');
  var counter = document.getElementById('gb-char-current');
  if (msgEl && counter) {
    msgEl.addEventListener('input', function() {
      counter.textContent = msgEl.value.length;
    });
  }
});


/* ── 방명록 등록 ── */

function submitGuestbook() {
  if (typeof isFirebaseConfigured === 'undefined' || !isFirebaseConfigured) {
    alert('아직 Firebase가 연결되지 않았습니다!');
    return;
  }

  var nameEl = document.getElementById('guest-name');
  var msgEl = document.getElementById('guest-message');
  var name = nameEl.value.trim();
  var message = msgEl.value.trim();

  if (!name || !message) {
    alert('이름과 메시지를 입력해주세요!');
    return;
  }

  var btn = document.getElementById('guest-submit');
  btn.disabled = true;
  btn.querySelector('.gb-submit-text').textContent = '저장중...';

  var db = firebase.firestore();
  db.collection('guestbook').add({
    name: name,
    message: message,
    icon: selectedIcon,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function() {
    nameEl.value = '';
    msgEl.value = '';
    var counter = document.getElementById('gb-char-current');
    if (counter) counter.textContent = '0';
    btn.disabled = false;
    btn.querySelector('.gb-submit-text').textContent = '남기기 ✦';
    loadGuestbook();
  }).catch(function(error) {
    btn.disabled = false;
    btn.querySelector('.gb-submit-text').textContent = '남기기 ✦';
    alert('저장 실패: ' + error.message);
  });
}


/* ── 방명록 불러오기 ── */

function loadGuestbook() {
  if (typeof isFirebaseConfigured === 'undefined' || !isFirebaseConfigured) {
    return;
  }

  var list = document.getElementById('guestbook-list');
  if (!list) return;

  var notice = document.getElementById('firebase-notice');
  if (notice) notice.style.display = 'none';

  var db = firebase.firestore();
  db.collection('guestbook')
    .orderBy('timestamp', 'desc')
    .limit(50)
    .get()
    .then(function(snapshot) {
      list.innerHTML = '';

      /* 카운터 업데이트 */
      var totalEl = document.getElementById('gb-total');
      if (totalEl) totalEl.textContent = snapshot.size;

      var counterEl = document.getElementById('gb-counter');
      if (counterEl) counterEl.style.display = 'flex';

      if (snapshot.empty) {
        list.innerHTML = '<div class="gb-empty">' +
          '<div class="gb-empty-icon">📭</div>' +
          '<div class="gb-empty-text">아직 방명록이 비어있어요<br>첫 번째 글을 남겨주세요!</div>' +
          '</div>';
        return;
      }

      snapshot.forEach(function(doc, index) {
        var data = doc.data();
        var entry = document.createElement('div');
        entry.className = 'gb-entry';

        var date = data.timestamp ? data.timestamp.toDate() : new Date();
        var dateStr = date.getFullYear() + '.' +
          String(date.getMonth() + 1).padStart(2, '0') + '.' +
          String(date.getDate()).padStart(2, '0');

        var icon = data.icon || '🐶';
        var bgColor = nameToColor(data.name);
        var accentColor = nameToAccent(data.name);

        entry.innerHTML =
          '<div class="gb-entry-side">' +
            '<div class="gb-entry-icon" style="background:' + bgColor + '">' + icon + '</div>' +
          '</div>' +
          '<div class="gb-entry-body">' +
            '<div class="gb-entry-header">' +
              '<span class="gb-entry-name" style="color:' + accentColor + '">' + escapeHtml(data.name) + '</span>' +
              '<span class="gb-entry-date">' + dateStr + '</span>' +
            '</div>' +
            '<div class="gb-entry-message">' + escapeHtml(data.message) + '</div>' +
          '</div>';

        list.appendChild(entry);
      });
    })
    .catch(function(error) {
      list.innerHTML = '<div class="notice-bar">방명록을 불러오지 못했습니다.</div>';
    });
}

/* 페이지 로드 시 방명록 불러오기 */
document.addEventListener('DOMContentLoaded', loadGuestbook);
