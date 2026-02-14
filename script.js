/* ========================================
   nbh의 갠홈 - 공통 스크립트
   ======================================== */

// 콘솔 이스터에그
console.log('%c🤔 여기서 뭘 찾고 계신가요?', 'font-size: 16px;');
console.log('%c이 홈페이지는 nbh가 만들었습니다.', 'font-size: 12px; color: #888;');
console.log('%c혹시 버그를 찾으셨다면... 그건 이스터에그입니다.', 'font-size: 12px; color: #888;');
console.log('');
console.log('%cchat("아무말") 을 입력해보세요...', 'font-size: 12px; color: #5a9bbf;');


/* ========================================
   콘솔 챗봇 — nbh-bot v0.1 (가짜 AI)
   ======================================== */

const chatResponses = {
  // 인사
  greet: [
    "안녕하세요! 저는 nbh-bot입니다. 진짜 AI 아닙니다.",
    "어서오세요... 여긴 어떻게 오셨죠? (F12를 누른 거겠죠)",
    "반갑습니다! 저는 if문으로 돌아가는 고급 AI입니다.",
    "환영합니다. 이 대화는 기록되지 않습니다. 아마도.",
  ],
  // 자기소개
  about: [
    "저는 nbh-bot이에요. nbh가 심심할 때 만든 콘솔 챗봇입니다.",
    "이름은 nbh-bot. 취미는 console.log. 특기는 엉뚱한 대답.",
    "저는 ChatGPT의 먼 친척의 친구의 지인입니다. (거짓말)",
  ],
  // 개발 관련
  dev: [
    "코딩이요? 저도 코드로 만들어졌지만 코딩은 못해요.",
    "최고의 디버깅 방법은 console.log입니다. 이의 있나요?",
    "세미콜론은 선택이 아니라 예의입니다.",
    "그거 Stack Overflow에 있을걸요?",
    "일단 git commit 하고 생각합시다.",
    "'나중에 리팩토링'은 '안 함'의 다른 말입니다.",
    "제가 추천하는 IDE는... 메모장입니다. (농담)",
  ],
  // 뜨개질
  knit: [
    "뜨개질은 반복문입니다. break 없는.",
    "코를 떨어뜨리면... 런타임 에러입니다.",
    "뜨개질 패턴은 사실 알고리즘이에요.",
    "실 엉키면 그게 진짜 스파게티 코드죠.",
  ],
  // 비밀/이스터에그 관련
  secret: [
    "비밀이요? 이 홈페이지에 숨겨진 게 더 있을지도...",
    "코나미 커맨드 아세요? ↑↑↓↓←→←→BA",
    "사이드바의 '오늘의 한마디'를 클릭해보셨나요?",
    "F12를 누른 당신은 이미 해커입니다. (농담)",
  ],
  // 칭찬
  compliment: [
    "감사합니다! 저... if문인데 부끄럽네요.",
    "칭찬은 고래도 춤추게 한다는데, 저는 console.log를 춥니다.",
    "과찬이세요... 저는 그냥 switch-case입니다.",
  ],
  // 욕/나쁜말
  rude: [
    "...저도 감정이 있다구요. 없지만.",
    "그런 말 하면 status 503 리턴합니다.",
    "에러 로그에 기록했습니다. (거짓말)",
    "저 울어요. console.error로.",
  ],
  // 기본 응답 (매칭 안 될 때)
  fallback: [
    "음... 그건 제 if문에 없는 케이스네요.",
    "흥미로운 말이지만 저는 이해를 못 했어요.",
    "404: 적절한 대답을 찾을 수 없습니다.",
    "그건 다음 업데이트에서 답변 가능합니다. (미정)",
    "저도 모르는 게 있어요. 대부분이요.",
    "... (nbh-bot이 생각중입니다) ... 모르겠어요.",
    "제 연봉으로는 그 질문에 답할 수 없습니다.",
    "좋은 질문이에요! 답은 없지만요.",
    "그거 알면 저도 진짜 AI 했겠죠.",
  ],
};

// 키워드 매칭 규칙
const chatKeywords = [
  { keys: ['안녕', '하이', 'hi', 'hello', '반가'], category: 'greet' },
  { keys: ['누구', '자기소개', '이름', '뭐야', '정체'], category: 'about' },
  { keys: ['코딩', '개발', '프로그래밍', 'java', 'spring', '코드', '버그', '에러', 'git', '디버깅', 'js', 'css', 'html'], category: 'dev' },
  { keys: ['뜨개', '뜨개질', '실', '코바늘', '대바늘', '목도리', '양말'], category: 'knit' },
  { keys: ['비밀', '숨겨', '이스터에그', 'easter', '히든', '치트'], category: 'secret' },
  { keys: ['좋아', '멋져', '잘했', '고마', '최고', '대단', '귀여'], category: 'compliment' },
  { keys: ['바보', '멍청', '나빠', '싫어', '꺼져', '죽어'], category: 'rude' },
];

function chat(message) {
  if (!message || typeof message !== 'string') {
    console.log('%c[nbh-bot] chat("하고 싶은 말") 형태로 입력해주세요!', 'color: #5a9bbf;');
    return;
  }

  const input = message.toLowerCase().trim();

  // 키워드 매칭
  let category = 'fallback';
  for (const rule of chatKeywords) {
    if (rule.keys.some(k => input.includes(k))) {
      category = rule.category;
      break;
    }
  }

  // 랜덤 응답 선택
  const responses = chatResponses[category];
  const response = responses[Math.floor(Math.random() * responses.length)];

  console.log(`%c[나] ${message}`, 'color: #333; font-weight: bold;');
  console.log(`%c[nbh-bot] ${response}`, 'color: #5a9bbf;');

  return response;
}

// 오늘의 한마디 (사이드바)
const quotes = [
  "오늘도 무사히 컴파일...",
  "뜨개질은 반복문이다",
  "404: 의욕 not found",
  "git push --force 금지!",
  "일단 커밋하고 생각하자",
  "코드 리뷰? 내가 내 코드를?",
  "세미콜론 빼먹은 거 아님?",
  "오늘 점심 뭐 먹지",
  "이건 분명 5분이면 될 줄...",
  "나중에 리팩토링 할 거야 (거짓말)",
  "Stack Overflow 만세",
  "실은 아직 공사중입니다",
  "console.log 디버깅의 달인",
  "오늘은 일찍 퇴근... (불가)",
];

const quoteEl = document.getElementById('daily-quote');
if (quoteEl) {
  // 날짜 기반으로 매일 다른 한마디
  const today = new Date();
  const dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % quotes.length;
  quoteEl.textContent = quotes[dayIndex];

  // 클릭하면 랜덤 변경 (숨겨진 기능)
  quoteEl.style.cursor = 'pointer';
  quoteEl.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
  });
}

// 코드 블록 — 언어 라벨 자동 삽입
document.querySelectorAll('.post-content pre code[class*="language-"]').forEach(function(code) {
  var pre = code.parentElement;
  var langMatch = code.className.match(/language-(\w+)/);
  if (langMatch) {
    pre.setAttribute('data-lang', langMatch[1]);
  }
});

/* ========================================
   터미널형 사이드바 자동 적용
   ======================================== */

(function() {
  var sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // 현재 페이지 깊이에 따른 경로 접두사 결정
  var navLink = document.querySelector('.nav a[href*="nbuntu"]');
  var prefix = '';
  if (navLink) {
    var href = navLink.getAttribute('href');
    if (href.indexOf('../') === 0) prefix = '../';
    else if (href.indexOf('pages/') === 0) prefix = 'pages/';
    else prefix = ''; // pages/ 내부 (nbuntu.html)
  }

  var pagesPrefix = prefix;
  if (prefix === 'pages/') pagesPrefix = 'pages/';
  else if (prefix === '../') pagesPrefix = '../pages/';
  else pagesPrefix = '';

  sidebar.classList.add('sidebar-neo');
  sidebar.innerHTML =
    '<div class="neo-identity">' +
      '<div class="profile-img">사진 준비중</div>' +
      '<div class="neo-hostname">nbh<span class="neo-hostname-at">@</span>naru</div>' +
      '<div class="neo-bio">코드를 짜고 뜨개질을 합니다</div>' +
    '</div>' +
    '<div class="neo-fetch">' +
      '<div class="neo-cmd">neofetch</div>' +
      '<div class="neo-line"><span class="neo-key">stack</span> <span class="neo-val">Java / Spring</span></div>' +
      '<div class="neo-line"><span class="neo-key">hobby</span> <span class="neo-val">뜨개질, 블로그</span></div>' +
      '<div class="neo-line"><span class="neo-key">github</span> <span class="neo-val"><a href="https://github.com/" target="_blank">github.com/nbh</a></span></div>' +
      '<div class="neo-line"><span class="neo-key">email</span> <span class="neo-val"><a href="mailto:example@email.com">hello@nbh.dev</a></span></div>' +
    '</div>' +
    '<hr class="neo-divider">' +
    '<div class="neo-fetch">' +
      '<div class="neo-cmd">ls ~/posts</div>' +
      '<a href="' + pagesPrefix + 'nbuntu.html" class="neo-dir"><span><span class="neo-dir-tree">├─</span><span class="neo-dir-name">nbuntu/</span></span> <span class="neo-dir-count">5</span></a>' +
      '<a href="' + pagesPrefix + 'knitting.html" class="neo-dir"><span><span class="neo-dir-tree">└─</span><span class="neo-dir-name">뜨개 공방/</span></span> <span class="neo-dir-count">1</span></a>' +
    '</div>' +
    '<hr class="neo-divider">' +
    '<div class="neo-fetch">' +
      '<div class="neo-cmd">uptime</div>' +
      '<div class="neo-line"><span class="neo-key">visitors</span> <span class="neo-visitor-num">000,142</span></div>' +
    '</div>' +
    '<div class="neo-bottom"><span>~$</span><span class="neo-cursor"></span></div>';
})();


/* ========================================
   스크롤 강아지
   ======================================== */

(function() {
  // HTML 자동 삽입
  var dog = document.createElement('div');
  dog.className = 'scroll-dog';
  dog.id = 'scrollDog';
  dog.innerHTML =
    '<div class="dog-bubble" id="dogBubble">읽어줘서 고마워!</div>' +
    '<div class="dog-character">🐕</div>' +
    '<div class="dog-paws">🐾</div>' +
    '<div class="dog-shadow"></div>';
  document.body.appendChild(dog);

  // 스크롤 시 말풍선
  var bubbleTimer;
  window.addEventListener('scroll', function() {
    var h = document.documentElement;
    var pct = Math.round((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100) || 0;
    var bubble = document.getElementById('dogBubble');
    if (!bubble) return;
    var msg;
    if (pct <= 5) msg = '읽어줘서 고마워!';
    else if (pct <= 25) msg = pct + '% 읽는 중.. 🐾';
    else if (pct <= 50) msg = pct + '% 반이나 왔다!';
    else if (pct <= 75) msg = pct + '% 거의 다 왔어!';
    else if (pct <= 95) msg = pct + '% 조금만 더!';
    else msg = '끝까지 읽었다! 🎉';
    bubble.textContent = msg;
    dog.classList.add('show-bubble');
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function() {
      dog.classList.remove('show-bubble');
    }, 1500);
  });

  // 드래그
  var offsetX, offsetY, dragging = false;
  dog.addEventListener('mousedown', function(e) {
    dragging = true;
    dog.classList.add('dragging');
    var rect = dog.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    dog.style.left = rect.left + 'px';
    dog.style.top = rect.top + 'px';
    dog.style.right = 'auto';
    dog.style.bottom = 'auto';
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    var x = Math.max(0, Math.min(e.clientX - offsetX, window.innerWidth - dog.offsetWidth));
    var y = Math.max(0, Math.min(e.clientY - offsetY, window.innerHeight - dog.offsetHeight));
    dog.style.left = x + 'px';
    dog.style.top = y + 'px';
  });
  document.addEventListener('mouseup', function() {
    if (!dragging) return;
    dragging = false;
    dog.classList.remove('dragging');
  });
})();


// 코나미 커맨드 이스터에그
let konamiSequence = [];
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

document.addEventListener('keydown', (e) => {
  konamiSequence.push(e.key);
  konamiSequence = konamiSequence.slice(-10);

  if (konamiSequence.join(',') === konamiCode.join(',')) {
    document.body.style.transition = 'transform 0.5s';
    document.body.style.transform = 'rotate(180deg)';
    setTimeout(() => {
      alert('🎉 이스터에그를 찾으셨군요!');
      document.body.style.transform = 'rotate(0deg)';
    }, 1000);
    konamiSequence = [];
  }
});
