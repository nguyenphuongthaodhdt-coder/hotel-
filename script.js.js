// Data: Hotel Front Desk Situational Quiz Questions
const quizData = [
    {
        category: "Check-in & Registration",
        question: "A guest approaches the front desk with luggage. How should you greet them professionally to initiate the check-in process?",
        options: [
            { text: "What do you want? Room key?", correct: false },
            { text: "Good afternoon, welcome to The Grand Hotel. How may I assist you today?", correct: true },
            { text: "Are you staying here tonight? Give me your passport.", correct: false },
            { text: "Hi there! Fill out this paper right now.", correct: false }
        ],
        explanation: "Sử dụng lời chào lịch sự kèm tên khách sạn ('Good afternoon, welcome to The Grand Hotel...') tạo ấn tượng chuyên nghiệp chuẩn 5 sao."
    },
    {
        category: "Handling Complaints",
        question: "A guest complains that the air conditioning in their room is not working properly. What is the most appropriate professional response?",
        options: [
            { text: "That's impossible, we checked it yesterday.", correct: false },
            { text: "I sincerely apologize for the inconvenience, Mr. Smith. I will send our maintenance engineer to your room immediately.", correct: true },
            { text: "You can open the window if it's too hot.", correct: false },
            { text: "Wait until tomorrow morning, maintenance is off duty.", correct: false }
        ],
        explanation: "Luôn xin lỗi vì sự bất tiện ('sincerely apologize'), dùng tên khách hàng và đưa ra giải pháp ngay lập tức ('send maintenance engineer immediately')."
    },
    {
        category: "Reservations & Modifications",
        question: "A walk-in guest asks for a deluxe room for 2 nights, but the hotel is fully booked. How should you deliver this news?",
        options: [
            { text: "We are full. Go find another hotel.", correct: false },
            { text: "We have no rooms left. Bye.", correct: false },
            { text: "I'm terribly sorry, but we are fully booked for those dates. However, I can help you check for availability at our partner hotel nearby.", correct: true },
            { text: "You should have booked earlier.", correct: false }
        ],
        explanation: "Khi khách sạn hết phòng, hãy từ chối lịch sự và thể hiện tinh thần hỗ trợ tận tâm bằng cách gợi ý khách sạn đối tác."
    },
    {
        category: "Providing Local Recommendations",
        question: "A foreign tourist asks you to recommend an authentic local restaurant within walking distance. What should you say?",
        options: [
            { text: "Just walk outside and look around yourself.", correct: false },
            { text: "I highly recommend 'Saigon Kitchen' just two blocks away. They serve amazing local dishes and it's very popular among travelers.", correct: true },
            { text: "Don't eat outside, eat at our expensive hotel restaurant.", correct: false },
            { text: "I have no idea about local food.", correct: false }
        ],
        explanation: "Cung cấp tên cụ thể, vị trí rõ ràng ('two blocks away') và lý do gợi ý thể hiện sự am hiểu địa phương và nhiệt tình."
    },
    {
        category: "Billing & Checkout",
        question: "During checkout, a guest points out an unfamiliar charge on their minibar bill. How do you handle this situation?",
        options: [
            { text: "You drank it, so you must pay for it.", correct: false },
            { text: "Let me double-check this for you right away. If there was an error, I will have it removed from your bill immediately. Please give me a moment.", correct: true },
            { text: "Ignore the complaint and charge their credit card anyway.", correct: false },
            { text: "Argue with the guest until they give up.", correct: false }
        ],
        explanation: "Không tranh cãi với khách. Hãy bình tĩnh kiểm tra lại ('double-check') và cam kết xử lý lỗi nếu có một cách chuyên nghiệp."
    },
    {
        category: "Check-in & Registration",
        question: "The guest's credit card is declined during the check-in process. What is the most polite way to address this?",
        options: [
            { text: "Your card is declined. You have no money.", correct: false },
            { text: "I'm sorry, but this card seems to be declining. Do you happen to have another card or form of payment we could try?", correct: true },
            { text: "Get out of the lobby until you can pay.", correct: false },
            { text: "Call your bank right now or leave.", correct: false }
        ],
        explanation: "Giữ thể diện cho khách bằng cách nói giảm nói tránh ('seems to be declining') và đề xuất phương thức thanh toán thay thế một cách lịch sự."
    },
    {
        category: "Handling Complaints",
        question: "A guest is furious because their wake-up call was not made, causing them to miss an important morning meeting. How do you respond?",
        options: [
            { text: "It was probably the night shift's fault, not mine.", correct: false },
            { text: "Accidents happen, don't make a big deal out of it.", correct: false },
            { text: "I am truly sorry for this unacceptable oversight on our part. Let me arrange a complimentary taxi for you right away to help you get to your meeting quickly.", correct: true },
            { text: "Sleep earlier next time.", correct: false }
        ],
        explanation: "Nhận trách nhiệm thay mặt khách sạn ('unacceptable oversight on our part') và đền bù bằng hành động thiết thực (taxi miễn phí)."
    },
    {
        category: "Providing Local Recommendations",
        question: "A business traveler asks how to get to the convention center efficiently during peak morning traffic.",
        options: [
            { text: "Walk 10 kilometers in your suit.", correct: false },
            { text: "I suggest taking the subway line 2 from the station nearby; it avoids the heavy traffic and takes only 15 minutes.", correct: true },
            { text: "Good luck with the traffic jam!", correct: false },
            { text: "Take a bicycle.", correct: false }
        ],
        explanation: "Đưa ra lời khuyên thiết thực, nhanh chóng và tiết kiệm thời gian cho khách doanh nhân ('avoids heavy traffic')."
    },
    {
        category: "Billing & Checkout",
        question: "A guest wishes to store their luggage at the front desk after checking out until their evening flight. How do you respond?",
        options: [
            { text: "No, we don't have space for your bags.", correct: false },
            { text: "Leave them outside on the sidewalk.", correct: false },
            { text: "Certainly! I'd be happy to store your luggage in our secure luggage room and give you this claim tag. You can pick it up whenever you're ready.", correct: true },
            { text: "It will cost $50 per bag.", correct: false }
        ],
        explanation: "Luôn sẵn sàng hỗ trợ dịch vụ giữ hành lý miễn phí sau checkout và cung cấp thẻ nhận đồ ('claim tag') an toàn."
    },
    {
        category: "Check-in & Registration",
        question: "The guest's room is not quite ready because they arrived 2 hours before standard check-in time. What should you offer?",
        options: [
            { text: "Sit on the floor and wait quietly.", correct: false },
            { text: "Your room isn't ready. Go away for 2 hours.", correct: false },
            { text: "While your room is being prepared, please feel free to relax in our lounge. We can also store your luggage and notify you as soon as your room is ready.", correct: true },
            { text: "Pay an extra fee or wait outside.", correct: false }
        ],
        explanation: "Biến tình thế bất lợi thành dịch vụ tốt bằng cách mời khách nghỉ ngơi tại phòng chờ ('lounge'), giữ hành lý và chủ động thông báo khi phòng sẵn sàng."
    }
];

// State variables
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let timerSeconds = 0;
let timerInterval = null;
let userAnswers = [];
let answeredCurrent = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');
const statsBar = document.getElementById('stats-bar');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const backToResultsBtn = document.getElementById('back-to-results-btn');

const questionTracker = document.getElementById('question-tracker');
const categoryBadge = document.getElementById('category-badge');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const explanationBox = document.getElementById('explanation-box');
const explanationIcon = document.getElementById('explanation-icon');
const explanationTitle = document.getElementById('explanation-title');
const explanationText = document.getElementById('explanation-text');

const scoreDisplay = document.getElementById('score-display');
const streakDisplay = document.getElementById('streak-display');
const timerDisplay = document.getElementById('timer-display');

const finalScore = document.getElementById('final-score');
const finalAccuracy = document.getElementById('final-accuracy');
const finalTime = document.getElementById('final-time');
const reviewContainer = document.getElementById('review-container');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNextQuestion);
restartBtn.addEventListener('click', resetQuiz);
reviewBtn.addEventListener('click', showReviewScreen);
backToResultsBtn.addEventListener('click', () => {
    reviewScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
});

function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    statsBar.classList.remove('hidden');
    statsBar.classList.add('flex');

    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    timerSeconds = 0;
    userAnswers = [];
    answeredCurrent = false;

    updateStats();
    startTimer();
    loadQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerSeconds++;
        const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
        const seconds = (timerSeconds % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateStats() {
    scoreDisplay.textContent = score;
    streakDisplay.textContent = streak;
}

function loadQuestion() {
    answeredCurrent = false;
    nextBtn.classList.add('hidden');
    explanationBox.classList.add('hidden');

    const currentQ = quizData[currentQuestionIndex];
    questionTracker.textContent = `Câu hỏi ${currentQuestionIndex + 1} / ${quizData.length}`;
    categoryBadge.textContent = currentQ.category;
    
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    questionText.textContent = currentQ.question;
    optionsContainer.innerHTML = '';

    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-700/60 hover:border-amber-500/50 transition-all text-slate-200 text-sm sm:text-base flex items-start gap-3 group';
        button.innerHTML = `
            <span class="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">${String.fromCharCode(65 + index)}</span>
            <span class="flex-grow pt-0.5">${option.text}</span>
        `;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    if (answeredCurrent) return;
    answeredCurrent = true;

    const currentQ = quizData[currentQuestionIndex];
    const optionButtons = optionsContainer.children;
    const isCorrect = currentQ.options[selectedIndex].correct;

    // Record user answer
    userAnswers.push({
        question: currentQ.question,
        options: currentQ.options,
        selectedIndex: selectedIndex,
        explanation: currentQ.explanation
    });

    // Disable all options and style them
    Array.from(optionButtons).forEach((btn, idx) => {
        btn.style.pointerEvents = 'none';
        if (currentQ.options[idx].correct) {
            btn.classList.remove('bg-slate-900/50', 'border-slate-700');
            btn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-emerald-200');
            btn.querySelector('span:first-child').classList.replace('bg-slate-800', 'bg-emerald-500');
            btn.querySelector('span:first-child').classList.replace('text-amber-400', 'text-slate-950');
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.remove('bg-slate-900/50', 'border-slate-700');
            btn.classList.add('bg-rose-500/20', 'border-rose-500', 'text-rose-200');
            btn.querySelector('span:first-child').classList.replace('bg-slate-800', 'bg-rose-500');
            btn.querySelector('span:first-child').classList.replace('text-amber-400', 'text-slate-950');
        } else {
            btn.style.opacity = '0.5';
        }
    });

    // Update score & streak
    if (isCorrect) {
        score += 10;
        streak += 1;
        triggerConfetti();
        explanationBox.className = "bg-emerald-950/40 border border-emerald-500/50 p-5 rounded-xl mb-6 animate-fadeIn";
        explanationIcon.className = "fa-solid fa-circle-check text-lg text-emerald-400";
        explanationTitle.className = "font-bold text-base text-emerald-300";
        explanationTitle.textContent = "Chính xác! Giao diện xử lý chuẩn mực.";
    } else {
        streak = 0;
        explanationBox.className = "bg-rose-950/40 border border-rose-500/50 p-5 rounded-xl mb-6 animate-fadeIn";
        explanationIcon.className = "fa-solid fa-circle-xmark text-lg text-rose-400";
        explanationTitle.className = "font-bold text-base text-rose-300";
        explanationTitle.textContent = "Chưa chính xác!";
    }

    updateStats();
    explanationText.textContent = currentQ.explanation;
    explanationBox.classList.remove('hidden');

    // Show Next Button
    nextBtn.classList.remove('hidden');
    if (currentQuestionIndex === quizData.length - 1) {
        document.getElementById('next-btn-text').textContent = "Xem kết quả";
    } else {
        document.getElementById('next-btn-text').textContent = "Câu tiếp theo";
    }
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    stopTimer();
    quizScreen.classList.add('hidden');
    statsBar.classList.add('hidden');
    statsBar.classList.remove('flex');
    resultsScreen.classList.remove('hidden');

    progressBar.style.width = `100%`;
    finalScore.textContent = `${score}/${quizData.length * 10}`;
    const accuracy = Math.round((score / (quizData.length * 10)) * 100);
    finalAccuracy.textContent = `${accuracy}%`;

    const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const seconds = (timerSeconds % 60).toString().padStart(2, '0');
    finalTime.textContent = `${minutes}:${seconds}`;

    triggerConfetti();
}

function showReviewScreen() {
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    reviewContainer.innerHTML = '';

    userAnswers.forEach((item, index) => {
        const userCorrect = item.options[item.selectedIndex].correct;
        const div = document.createElement('div');
        div.className = `p-5 rounded-xl border ${userCorrect ? 'bg-emerald-950/20 border-emerald-500/40' : 'bg-rose-950/20 border-rose-500/40'}`;
        
        let optionsHtml = '';
        item.options.forEach((opt, optIdx) => {
            let badgeStyle = "bg-slate-800 text-slate-300 border-slate-700";
            let textStyle = "text-slate-300";
            
            if (opt.correct) {
                badgeStyle = "bg-emerald-500 text-slate-950 font-bold";
                textStyle = "text-emerald-300 font-medium";
            } else if (optIdx === item.selectedIndex && !opt.correct) {
                badgeStyle = "bg-rose-500 text-slate-950 font-bold";
                textStyle = "text-rose-300 line-through";
            }

            optionsHtml += `
                <div class="flex items-start gap-2.5 text-sm p-2 rounded-lg bg-slate-900/40 border border-slate-800/80 mb-2">
                    <span class="w-6 h-6 rounded flex items-center justify-center text-xs ${badgeStyle}">${String.fromCharCode(65 + optIdx)}</span>
                    <span class="${textStyle}">${opt.text}</span>
                </div>
            `;
        });

        div.innerHTML = `
            <div class="flex items-start justify-between gap-4 mb-3">
                <span class="text-xs font-bold text-amber-400">Câu hỏi ${index + 1}</span>
                <span class="px-2.5 py-0.5 rounded text-xs font-semibold ${userCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'}">
                    ${userCorrect ? 'Đúng' : 'Sai'}
                </span>
            </div>
            <p class="font-medium text-slate-100 text-sm sm:text-base mb-4">${item.question}</p>
            <div class="space-y-1 mb-4">${optionsHtml}</div>
            <div class="bg-slate-900/80 p-3.5 rounded-lg border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                <strong class="text-amber-400 block mb-1"><i class="fa-solid fa-lightbulb"></i> Giải thích nghiệp vụ:</strong>
                ${item.explanation}
            </div>
        `;
        reviewContainer.appendChild(div);
    });
}

function resetQuiz() {
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}

function triggerConfetti() {
    confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
    });
}