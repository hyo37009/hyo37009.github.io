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

// 코드 블록 — 줄바꿈 시 hanging indent (soft-wrap된 줄만 들여쓰기)
(function() {
  // Prism.js 하이라이팅 태그를 보존하면서 줄 분리
  function splitPreservingTags(html) {
    var lines = [];
    var currentLine = '';
    var openTags = [];
    var i = 0;

    while (i < html.length) {
      if (html[i] === '\n') {
        for (var j = openTags.length - 1; j >= 0; j--) {
          currentLine += '</span>';
        }
        lines.push(currentLine);
        currentLine = openTags.join('');
        i++;
      } else if (html[i] === '<') {
        var tagEnd = html.indexOf('>', i);
        if (tagEnd === -1) { currentLine += html[i]; i++; continue; }
        var tag = html.substring(i, tagEnd + 1);

        if (tag.indexOf('</') === 0) {
          openTags.pop();
        } else if (tag.indexOf('<span') === 0 && tag.indexOf('/>') === -1) {
          openTags.push(tag);
        }
        currentLine += tag;
        i = tagEnd + 1;
      } else {
        currentLine += html[i];
        i++;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  function wrapLines(codeElement) {
    if (codeElement.querySelector('.code-line')) return;
    var html = codeElement.innerHTML;
    if (!html.trim()) return;

    var lines = splitPreservingTags(html);

    // 마지막 빈 줄 제거
    while (lines.length > 0 && !lines[lines.length - 1].replace(/<[^>]*>/g, '').trim()) {
      lines.pop();
    }

    codeElement.innerHTML = lines.map(function(line) {
      return '<span class="code-line">' + line + '</span>';
    }).join('\n');
  }

  // Prism.js 하이라이팅 완료 후 줄 감싸기
  if (typeof Prism !== 'undefined') {
    Prism.hooks.add('complete', function(env) {
      wrapLines(env.element);
    });
  }

  // Prism 없는 코드 블록 처리
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.post-content pre code').forEach(function(code) {
      if (!code.querySelector('.token')) {
        wrapLines(code);
      }
    });
  });
})();

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
      '<div class="neo-hostname">nbh</div>' +
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
      '<div class="neo-cmd">tree ~/nbuntu</div>' +
      '<a href="' + pagesPrefix + 'nbuntu.html" class="neo-dir"><span><span class="neo-dir-tree">├─</span><span class="neo-dir-name">Spring/</span></span> <span class="neo-dir-count">19</span></a>' +
      '<a href="' + pagesPrefix + 'nbuntu.html" class="neo-dir"><span><span class="neo-dir-tree">├─</span><span class="neo-dir-name">Java/</span></span> <span class="neo-dir-count">3</span></a>' +
      '<a href="' + pagesPrefix + 'nbuntu.html" class="neo-dir"><span><span class="neo-dir-tree">├─</span><span class="neo-dir-name">AWS/</span></span> <span class="neo-dir-count">1</span></a>' +
      '<a href="' + pagesPrefix + 'nbuntu.html" class="neo-dir"><span><span class="neo-dir-tree">├─</span><span class="neo-dir-name">JWT/</span></span> <span class="neo-dir-count">2</span></a>' +
      '<a href="' + pagesPrefix + 'nbuntu.html" class="neo-dir"><span><span class="neo-dir-tree">├─</span><span class="neo-dir-name">도구/</span></span> <span class="neo-dir-count">2</span></a>' +
      '<a href="' + pagesPrefix + 'nbuntu.html" class="neo-dir"><span><span class="neo-dir-tree">├─</span><span class="neo-dir-name">코딩테스트/</span></span> <span class="neo-dir-count">3</span></a>' +
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

  // 드래그 공통 로직
  var offsetX, offsetY, dragging = false;

  function startDrag(clientX, clientY) {
    dragging = true;
    dog.classList.add('dragging');
    var rect = dog.getBoundingClientRect();
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
    dog.style.left = rect.left + 'px';
    dog.style.top = rect.top + 'px';
    dog.style.right = 'auto';
    dog.style.bottom = 'auto';
  }

  function moveDrag(clientX, clientY) {
    if (!dragging) return;
    var x = Math.max(0, Math.min(clientX - offsetX, window.innerWidth - dog.offsetWidth));
    var y = Math.max(0, Math.min(clientY - offsetY, window.innerHeight - dog.offsetHeight));
    dog.style.left = x + 'px';
    dog.style.top = y + 'px';
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    dog.classList.remove('dragging');
  }

  // 마우스 드래그
  dog.addEventListener('mousedown', function(e) {
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    moveDrag(e.clientX, e.clientY);
  });
  document.addEventListener('mouseup', endDrag);

  // 터치 드래그
  dog.addEventListener('touchstart', function(e) {
    var t = e.touches[0];
    startDrag(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    var t = e.touches[0];
    moveDrag(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchend', endDrag);
})();


/* ========================================
   모바일 사이드바 토글
   ======================================== */

(function() {
  var sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // 토글 버튼 생성 (nav 안에 삽입)
  var toggle = document.createElement('button');
  toggle.className = 'sidebar-toggle';
  toggle.setAttribute('aria-label', '사이드바 열기');
  toggle.innerHTML = '&#9776;'; // ☰

  var nav = document.querySelector('.nav');
  if (nav) {
    nav.insertBefore(toggle, nav.firstChild);
  }

  // 오버레이 생성
  var overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
    document.body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  }

  toggle.addEventListener('click', function() {
    if (sidebar.classList.contains('mobile-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener('click', closeSidebar);

  // ESC 키로 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
      closeSidebar();
    }
  });
})();


/* ========================================
   카테고리 폴더 트리 (nbuntu)
   ======================================== */

(function() {
  // 폴더 접기/펼치기
  document.querySelectorAll('.cat-folder-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var folderId = 'folder-' + header.dataset.folder;
      var body = document.getElementById(folderId);
      if (!body) return;
      header.classList.toggle('collapsed');
      body.classList.toggle('collapsed');
    });
  });

  // 시리즈 접기/펼치기
  document.querySelectorAll('.cat-series-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var seriesId = 'series-' + header.dataset.series;
      var list = document.getElementById(seriesId);
      if (!list) return;
      header.classList.toggle('collapsed');
      list.classList.toggle('collapsed');
    });
  });
})();


/* ========================================
   Mermaid 다이어그램 Pan/Zoom 뷰어
   ======================================== */

(function() {
  function initPanZoom(el) {
    if (el.closest('.mermaid-frame')) return;
    var svg = el.querySelector('svg');
    if (!svg) return;

    // ── 1. 원본 크기 파악 ──
    // viewBox를 사용하되, height가 너무 작으면(=아직 레이아웃 미완료) getBoundingClientRect 사용
    var vb = svg.viewBox.baseVal;
    var origW, origH;
    if (vb && vb.width > 0 && vb.height > 50) {
      origW = vb.width;
      origH = vb.height;
    } else {
      var r = svg.getBoundingClientRect();
      origW = r.width  || 600;
      origH = r.height || 300;
    }
    console.log('[mermaid-viewer] origW=' + origW + ' origH=' + origH);

    // ── 2. SVG inline style 정리 후 크기 고정 ──
    svg.removeAttribute('style');   // mermaid의 max-width 제거
    svg.style.display  = 'block';
    svg.style.width    = origW + 'px';
    svg.style.height   = origH + 'px';

    // ── 3. DOM 구성 ──
    var frame    = document.createElement('div');  frame.className    = 'mermaid-frame';
    var titlebar = document.createElement('div');  titlebar.className = 'mermaid-titlebar';
    var viewport = document.createElement('div');  viewport.className = 'mermaid-viewport';
    var canvas   = document.createElement('div');  canvas.className   = 'mermaid-canvas';
    var zoomLabel = document.createElement('div'); zoomLabel.className = 'mermaid-zoom-label';
    var hint      = document.createElement('div'); hint.className      = 'mermaid-hint';

    titlebar.innerHTML =
      '<div class="mermaid-titlebar-dots">' +
        '<div class="mermaid-dot"></div><div class="mermaid-dot"></div><div class="mermaid-dot"></div>' +
      '</div>' +
      '<span class="mermaid-titlebar-name">📊 diagram.svg</span>' +
      '<div class="mermaid-controls">' +
        '<button class="mermaid-btn btn-fit" title="화면 맞춤">⤢</button>' +
        '<button class="mermaid-btn btn-out" title="축소">−</button>' +
        '<button class="mermaid-btn btn-in"  title="확대">+</button>' +
        '<button class="mermaid-btn btn-reset" title="리셋">↺</button>' +
      '</div>';
    zoomLabel.textContent = '100%';
    hint.textContent = '휠: 줌  드래그: 이동';

    canvas.style.transformOrigin = '0 0';

    // ── 4. DOM 조립 ──
    el.parentNode.insertBefore(frame, el);
    canvas.appendChild(el);
    viewport.appendChild(canvas);
    viewport.appendChild(zoomLabel);
    viewport.appendChild(hint);
    frame.appendChild(titlebar);
    frame.appendChild(viewport);

    // ── 5. 상태 ──
    var scale = 1, panX = 0, panY = 0;
    var MIN = 0.05, MAX = 8;

    function apply() {
      canvas.style.transform = 'translate(' + panX + 'px, ' + panY + 'px) scale(' + scale + ')';
      zoomLabel.textContent = Math.round(scale * 100) + '%';
    }

    function zoomAt(mx, my, ns) {
      ns = Math.min(Math.max(ns, MIN), MAX);
      var cx = (mx - panX) / scale;
      var cy = (my - panY) / scale;
      panX = mx - cx * ns;
      panY = my - cy * ns;
      scale = ns;
      apply();
    }

    // ── 6. initView: 뷰포트 너비·최대높이 기준 fit ──
    function initView() {
      var PAD = 40;
      // viewport가 DOM에 붙은 후 clientWidth를 읽어야 정확함
      var vw = viewport.clientWidth || frame.offsetWidth || 700;
      var maxH = Math.min(window.innerHeight * 0.72, 680);

      var scaleByW = (vw  - PAD) / origW;
      var scaleByH = (maxH - PAD) / origH;
      scale = Math.min(scaleByW, scaleByH, 1);
      scale = Math.max(scale, MIN);

      var vpH = Math.max(Math.round(origH * scale) + PAD, 150);
      viewport.style.height = vpH + 'px';

      panX = (vw - origW * scale) / 2;
      panY = (vpH - origH * scale) / 2;  // 수직 중앙 정렬

      apply();
      console.log('[mermaid-viewer] initView scale=' + Math.round(scale*100) + '% vw=' + vw + ' vph=' + vpH);
    }

    function fit() {
      var PAD = 40;
      var vw = viewport.clientWidth;
      var maxH = Math.min(window.innerHeight * 0.72, 680);
      var s = Math.min((vw - PAD) / origW, (maxH - PAD) / origH, 1);
      scale = Math.max(MIN, s);
      var vpH = Math.max(Math.round(origH * scale) + PAD, 150);
      viewport.style.height = vpH + 'px';
      panX = (vw - origW * scale) / 2;
      panY = (vpH - origH * scale) / 2;
      apply();
    }

    function reset() { scale = 1; panX = 0; panY = 0; apply(); }

    // initView는 레이아웃이 확정된 후 실행 (requestAnimationFrame)
    requestAnimationFrame(function() {
      requestAnimationFrame(initView); // 2프레임 기다려서 레이아웃 완료 보장
    });

    // 버튼: 뷰포트 중앙 기준 줌
    titlebar.querySelector('.btn-fit').addEventListener('click', fit);
    titlebar.querySelector('.btn-reset').addEventListener('click', reset);
    titlebar.querySelector('.btn-in').addEventListener('click', function() {
      zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, scale * 1.5);
    });
    titlebar.querySelector('.btn-out').addEventListener('click', function() {
      zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, scale / 1.5);
    });

    // 휠: 항상 줌 (커서 위치 기준)
    viewport.addEventListener('wheel', function(e) {
      e.preventDefault();
      var rect = viewport.getBoundingClientRect();
      var mx = e.clientX - rect.left;
      var my = e.clientY - rect.top;
      // deltaY 기준, deltaX는 무시 (트랙패드 대각선 방지)
      var factor = e.deltaY > 0 ? 0.85 : 1.15;
      zoomAt(mx, my, scale * factor);
    }, { passive: false });

    // 마우스 드래그 패닝
    var dragging = false, sx, sy, spx, spy;
    viewport.addEventListener('mousedown', function(e) {
      if (e.button !== 0) return;
      dragging = true; sx = e.clientX; sy = e.clientY; spx = panX; spy = panY;
      viewport.classList.add('panning'); e.preventDefault();
    });
    document.addEventListener('mousemove', function(e) {
      if (!dragging) return;
      panX = spx + (e.clientX - sx);
      panY = spy + (e.clientY - sy);
      apply();
    });
    document.addEventListener('mouseup', function() {
      if (dragging) { dragging = false; viewport.classList.remove('panning'); }
    });

    // 터치: 패닝 + 핀치 줌
    var lDist = null, tsx, tsy, tspx, tspy;
    viewport.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1) {
        tsx = e.touches[0].clientX; tsy = e.touches[0].clientY;
        tspx = panX; tspy = panY; lDist = null;
      } else if (e.touches.length === 2) {
        lDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY);
      }
      e.preventDefault();
    }, { passive: false });
    viewport.addEventListener('touchmove', function(e) {
      if (e.touches.length === 1 && lDist === null) {
        panX = tspx + (e.touches[0].clientX - tsx);
        panY = tspy + (e.touches[0].clientY - tsy);
        apply();
      } else if (e.touches.length === 2 && lDist) {
        var d = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY);
        var cx = (viewport.clientWidth  / 2 - panX) / scale;
        var cy = (viewport.clientHeight / 2 - panY) / scale;
        scale = Math.min(Math.max(scale * (d / lDist), MIN), MAX);
        panX = viewport.clientWidth  / 2 - cx * scale;
        panY = viewport.clientHeight / 2 - cy * scale;
        lDist = d; apply();
      }
      e.preventDefault();
    }, { passive: false });
    viewport.addEventListener('touchend', function() { lDist = null; });
  }

  // mermaid 렌더링 완료 판단:
  // data-processed="true" + SVG + viewBox.height > 50 모두 만족해야 함
  function isReady(el) {
    if (el.getAttribute('data-processed') !== 'true') return false;
    var svg = el.querySelector('svg');
    if (!svg) return false;
    var vb = svg.viewBox.baseVal;
    return vb && vb.width > 0 && vb.height > 50;
  }

  function watchAndInit(el) {
    if (isReady(el)) {
      initPanZoom(el);
      return;
    }
    // data-processed 변경 + childList 변경 모두 감지
    var obs = new MutationObserver(function() {
      if (isReady(el)) {
        obs.disconnect();
        // rAF 1번: 브라우저가 SVG 내부 레이아웃까지 마친 후 실행
        requestAnimationFrame(function() { initPanZoom(el); });
      }
    });
    obs.observe(el, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-processed']
    });
  }

  function initAll() {
    document.querySelectorAll('.mermaid').forEach(watchAndInit);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
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
