/**
 * CLRS 스타일 의사코드 (Pseudocode) — Prism 언어 정의
 * Introduction to Algorithms 형식 + 한글 키워드 지원
 *
 * 사용법: <code class="language-pseudo">
 *
 * 영문: if, then, else, for, to, while, return, and, or, not ...
 * 한글: 만약, 이면, 아니면, 반복, 동안, 반환, 그리고, 또는 ...
 * 함수: INSERTION-SORT(A, n) 또는 삽입정렬(A, n)
 */
(function () {
  Prism.languages.pseudo = {
    'comment': {
      pattern: /\/\/.*/,
      greedy: true
    },
    'string': {
      pattern: /"(?:[^"\\]|\\.)*"/,
      greedy: true
    },
    'keyword': /\b(?:if|then|else|elseif|for|to|downto|by|do|while|repeat|until|return|and|or|not|true|false|nil|NIL|error|ERROR|print|swap|end|begin|procedure|function|call|output|input|new|let|in|each|break|continue|만약|이면|아니면|반복|부터|까지|동안|반환|그리고|또는|아닌|참|거짓|출력|입력|교환|종료|시작|끝|함수|절차|호출|각|새|중단)\b/,
    'function': {
      pattern: /(?:[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*|[가-힣][가-힣0-9]*(?:-[가-힣0-9]+)*)(?=\s*[\(（])/
    },
    'number': /\b\d+(?:\.\d+)?\b/,
    'operator': /[←→≤≥≠≦≧]|:=|<-|->|[=<>+\-*\/%^]/,
    'punctuation': /[[\](){},:;.]/
  };
})();
