/*
  Technical Mock Exams - Single Page App
  - Loads data from `tech_exams_js.js`
  - Renders 5 exams
  - 30-minute countdown per attempt with autosubmit
*/

// ----------------------------- DOM Elements ------------------------------
const views = {
  home: document.getElementById('homeView'),
  exam: document.getElementById('examView'),
  result: document.getElementById('resultView'),
};

const elements = {
  examList: document.getElementById('examList'),
  loadError: document.getElementById('loadError'),
  btnHome: document.getElementById('btnHome'),
  btnBackHome: document.getElementById('btnBackHome'),
  btnRetake: document.getElementById('btnRetake'),
  btnSubmit: document.getElementById('btnSubmit'),
  timer: document.getElementById('timer'),
  progressBar: document.getElementById('progressBar'),
  questionDots: document.getElementById('questionDots'),
  questionContainer: document.getElementById('questionContainer'),
  btnNext: document.getElementById('btnNext'),
  btnPrev: document.getElementById('btnPrev'),
  resultSummary: document.getElementById('resultSummary'),
  reviewContainer: document.getElementById('reviewContainer'),
  examTitle: document.getElementById('examTitle'),
};

// ------------------------------- State -----------------------------------
/**
 * @typedef {{text: string, options: Array<{key: string, text: string}>, answerKey: string}} ParsedQuestion
 * @typedef {{title: string, questions: ParsedQuestion[]}} Exam
 */

const state = {
  exams: /** @type {Exam[]} */ ([]),
  currentExamIndex: -1,
  currentQuestionIndex: 0,
  answers: /** @type {Record<number, string>} */ ({}),
  timerId: /** @type {number|undefined} */ (undefined),
  remainingSeconds: 30 * 60,
  submitted: false,
};

// ------------------------------ Utilities --------------------------------
function setView(view) {
  Object.values(views).forEach(v => v.classList.remove('active'));
  view.classList.add('active');
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// ------------------------------ Load Exam Data ----------------------------
async function loadExamData() {
  // Check if technicalExams object is available from tech_exams_js.js
  if (typeof technicalExams === 'undefined') {
    elements.loadError.classList.remove('hidden');
    elements.loadError.textContent = 'Failed to load exam data from tech_exams_js.js';
    throw new Error('technicalExams object not found');
  }
}

function parseExams() {
  /** @type {Exam[]} */
  const exams = [];

  // Convert technicalExams object to our exam format
  Object.keys(technicalExams).forEach((examKey, index) => {
    const examData = technicalExams[examKey];
    const title = examData.title;
    
    /** @type {ParsedQuestion[]} */
    const questions = [];

    examData.questions.forEach((q, qIndex) => {
      const options = [
        { key: 'a', text: q.options.a },
        { key: 'b', text: q.options.b },
        { key: 'c', text: q.options.c },
        { key: 'd', text: q.options.d }
      ];

      questions.push({
        text: q.question,
        options: options,
        answerKey: q.correct
      });
    });

    if (questions.length) {
      exams.push({ title, questions });
    }
  });

  return exams;
}

// ------------------------------ Render Home ------------------------------
function renderHome() {
  elements.examList.innerHTML = '';
  state.exams.forEach((exam, idx) => {
    const card = document.createElement('article');
    card.className = 'exam-card';
    card.innerHTML = `
      <h3>${exam.title}</h3>
      <p>35 questions • 30 minutes</p>
      <div style="display:flex; gap:.5rem; margin-top:.6rem">
        <button class="btn btn-primary">Start</button>
        <button class="btn btn-ghost">Preview</button>
      </div>
    `;
    const [btnStart, btnPreview] = card.querySelectorAll('button');
    btnStart.addEventListener('click', () => startExam(idx));
    btnPreview.addEventListener('click', () => previewExam(idx));
    elements.examList.appendChild(card);
  });
}

function previewExam(index) {
  startExam(index, { preview: true });
}

// ------------------------------ Exam Flow --------------------------------
function startExam(index, opts = { preview: false }) {
  state.currentExamIndex = index;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.submitted = false;
  state.remainingSeconds = 30 * 60;
  elements.examTitle.textContent = `${state.exams[index].title}${opts.preview ? ' (Preview)' : ''}`;

  // Build navigator dots
  renderNavigator();
  renderQuestion();
  updateProgress();

  setView(views.exam);

  // Timer
  clearInterval(state.timerId);
  elements.timer.textContent = formatTime(state.remainingSeconds);
  if (!opts.preview) {
    state.timerId = setInterval(() => {
      state.remainingSeconds -= 1;
      if (state.remainingSeconds <= 0) {
        state.remainingSeconds = 0;
        elements.timer.textContent = formatTime(0);
        clearInterval(state.timerId);
        if (!state.submitted) submitExam();
      } else {
        elements.timer.textContent = formatTime(state.remainingSeconds);
        if (state.remainingSeconds <= 60) {
          elements.timer.style.background = '#2a1620';
          elements.timer.style.borderColor = '#5b253a';
          elements.timer.style.color = '#ffd7e0';
        }
      }
    }, 1000);
  } else {
    elements.timer.textContent = 'Preview';
  }
}

function renderNavigator() {
  const exam = state.exams[state.currentExamIndex];
  elements.questionDots.innerHTML = '';
  exam.questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'dot';
    btn.type = 'button';
    btn.textContent = String(i + 1);
    if (i === state.currentQuestionIndex) btn.classList.add('active');
    if (state.answers[i] != null) btn.classList.add('answered');
    btn.addEventListener('click', () => {
      state.currentQuestionIndex = i;
      renderQuestion();
      renderNavigator();
      updateProgress();
    });
    elements.questionDots.appendChild(btn);
  });
}

function renderQuestion() {
  const exam = state.exams[state.currentExamIndex];
  const q = exam.questions[state.currentQuestionIndex];

  // Convert inline fenced code in stem back to markdown code block
  const stemHtml = q.text
    .replace(/```([\s\S]*?)```/g, (m, code) => {
      return `<pre><code>${escapeHtml(code)}</code></pre>`;
    })
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br/>');

  const saved = state.answers[state.currentQuestionIndex];

  elements.questionContainer.innerHTML = `
    <h3>Q${state.currentQuestionIndex + 1}</h3>
    <div class="stem">${stemHtml}</div>
    <div class="choices">
      ${q.options
        .map(
          (opt) => `
        <label class="choice" data-key="${opt.key}">
          <input type="radio" name="q${state.currentQuestionIndex}" value="${opt.key}" ${saved === opt.key ? 'checked' : ''} />
          <span><strong>${opt.key})</strong> ${escapeHtml(opt.text)}</span>
        </label>`
        )
        .join('')}
    </div>
  `;

  elements.questionContainer.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', (e) => {
      const value = e.target.value;
      state.answers[state.currentQuestionIndex] = value;
      renderNavigator();
      updateProgress();
    });
  });
}

function updateProgress() {
  const exam = state.exams[state.currentExamIndex];
  const answeredCount = Object.keys(state.answers).length;
  const pct = (answeredCount / exam.questions.length) * 100;
  elements.progressBar.style.width = `${pct}%`;
}

function submitExam() {
  const exam = state.exams[state.currentExamIndex];
  state.submitted = true;
  clearInterval(state.timerId);

  let correct = 0;
  const results = exam.questions.map((q, idx) => {
    const selected = state.answers[idx] || null;
    const isCorrect = selected != null && selected === q.answerKey;
    if (isCorrect) correct += 1;
    return { selected, correctKey: q.answerKey, isCorrect, question: q };
  });

  // Show results
  const total = exam.questions.length;
  elements.resultSummary.innerHTML = `Score: <strong>${correct}/${total}</strong> • ${(correct / total * 100).toFixed(0)}%`;

  // Build review UI
  elements.reviewContainer.innerHTML = '';
  results.forEach((r, idx) => {
    const item = document.createElement('div');
    item.className = 'review-item';
    const stemHtml = r.question.text
      .replace(/```([\s\S]*?)```/g, (m, code) => `<pre><code>${escapeHtml(code)}</code></pre>`)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br/>');

    const optionsHtml = r.question.options
      .map((opt) => {
        const cls = opt.key === r.correctKey ? 'correct' : (opt.key === r.selected ? 'incorrect' : '');
        return `<div class="choice ${cls}"><span><strong>${opt.key})</strong> ${escapeHtml(opt.text)}</span></div>`;
      })
      .join('');

    item.innerHTML = `
      <h4>Q${idx + 1}</h4>
      <div class="stem">${stemHtml}</div>
      <div class="choices" style="margin-top:.5rem">${optionsHtml}</div>
      <div style="margin-top:.5rem; display:flex; gap:.5rem">
        <span class="answer-pill ${r.isCorrect ? 'correct' : 'wrong'}">Your answer: ${r.selected ?? '—'}</span>
        <span class="answer-pill correct">Correct: ${r.correctKey}</span>
      </div>
    `;
    elements.reviewContainer.appendChild(item);
  });

  setView(views.result);
}

// ------------------------------ Events -----------------------------------
elements.btnHome.addEventListener('click', () => setView(views.home));
elements.btnBackHome.addEventListener('click', () => {
  setView(views.home);
});
elements.btnRetake.addEventListener('click', () => {
  if (state.currentExamIndex >= 0) startExam(state.currentExamIndex);
});
elements.btnSubmit.addEventListener('click', () => {
  if (!state.submitted) submitExam();
});

elements.btnNext.addEventListener('click', () => {
  const exam = state.exams[state.currentExamIndex];
  state.currentQuestionIndex = clamp(state.currentQuestionIndex + 1, 0, exam.questions.length - 1);
  renderQuestion();
  renderNavigator();
});
elements.btnPrev.addEventListener('click', () => {
  const exam = state.exams[state.currentExamIndex];
  state.currentQuestionIndex = clamp(state.currentQuestionIndex - 1, 0, exam.questions.length - 1);
  renderQuestion();
  renderNavigator();
});

// ------------------------------ Helpers ----------------------------------
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ------------------------------ Init -------------------------------------
(async function init() {
  await loadExamData();
  state.exams = parseExams();
  if (!state.exams.length) {
    elements.loadError.classList.remove('hidden');
    elements.loadError.textContent = 'No exams loaded. Check the tech_exams_js.js file.';
  }
  renderHome();
})();


