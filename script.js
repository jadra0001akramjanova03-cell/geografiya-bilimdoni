// ==========================================
// GEOGRAFIYA BILIMDONI
// Loyiha muallifi: Akramjonova Jadra Maratovna
// ==========================================

const questions = [

    // =============== OSON ===============

    {
        id: "e1", level: "easy", category: "MAMLAKATLAR",
        question: "O‘zbekistonning poytaxti qaysi shahar?",
        answers: ["Samarqand", "Toshkent", "Buxoro", "Andijon"],
        correct: "Toshkent",
        explanation: "Toshkent — O‘zbekiston Respublikasining poytaxti va eng yirik shahri."
    },
    {
        id: "e2", level: "easy", category: "QIT'ALAR",
        question: "Dunyodagi eng katta qit’a qaysi?",
        answers: ["Afrika", "Yevropa", "Osiyo", "Avstraliya"],
        correct: "Osiyo",
        explanation: "Osiyo maydoni bo‘yicha dunyodagi eng katta qit’a hisoblanadi."
    },
    {
        id: "e3", level: "easy", category: "OKEANLAR",
        question: "Dunyodagi eng katta okean qaysi?",
        answers: ["Atlantika", "Hind", "Shimoliy Muz", "Tinch"],
        correct: "Tinch",
        explanation: "Tinch okeani dunyodagi eng katta va eng chuqur okeandir."
    },
    {
        id: "e4", level: "easy", category: "MAMLAKATLAR",
        question: "Fransiyaning poytaxti qaysi shahar?",
        answers: ["Rim", "Parij", "Madrid", "Berlin"],
        correct: "Parij",
        explanation: "Parij — Fransiyaning poytaxti. U Sena daryosi bo‘yida joylashgan."
    },
    {
        id: "e5", level: "easy", category: "TABIIY GEOGRAFIYA",
        question: "Yer yuzidagi eng baland tog‘ cho‘qqisi qaysi?",
        answers: ["K2", "Elbrus", "Everest", "Mont-Blan"],
        correct: "Everest",
        explanation: "Everest cho‘qqisi dengiz sathidan taxminan 8 849 metr baland."
    },
    {
        id: "e6", level: "easy", category: "MAMLAKATLAR",
        question: "Yaponiya qaysi okeanda joylashgan?",
        answers: ["Tinch okeani", "Atlantika okeani", "Hind okeani", "Shimoliy Muz okeani"],
        correct: "Tinch okeani",
        explanation: "Yaponiya Tinch okeanining g‘arbiy qismidagi orollarda joylashgan."
    },
    {
        id: "e7", level: "easy", category: "DARYOLAR",
        question: "Nil daryosi qaysi qit’ada joylashgan?",
        answers: ["Osiyo", "Afrika", "Yevropa", "Janubiy Amerika"],
        correct: "Afrika",
        explanation: "Nil — Afrikadagi eng mashhur va dunyoning eng uzun daryolaridan biri."
    },
    {
        id: "e8", level: "easy", category: "MAMLAKATLAR",
        question: "Turkiyaning poytaxti qaysi shahar?",
        answers: ["Istanbul", "Antaliya", "Anqara", "Izmir"],
        correct: "Anqara",
        explanation: "Turkiyaning poytaxti Anqara. Istanbul esa mamlakatning eng yirik shahri."
    },
    {
        id: "e9", level: "easy", category: "QIT'ALAR",
        question: "Sahroi Kabir cho‘li qaysi qit’ada joylashgan?",
        answers: ["Afrika", "Osiyo", "Avstraliya", "Yevropa"],
        correct: "Afrika",
        explanation: "Sahroi Kabir Shimoliy Afrikada joylashgan dunyodagi eng katta issiq cho‘ldir."
    },
    {
        id: "e10", level: "easy", category: "MAMLAKATLAR",
        question: "Misrning poytaxti qaysi shahar?",
        answers: ["Iskandariya", "Qohira", "Rabat", "Tunis"],
        correct: "Qohira",
        explanation: "Qohira — Misrning poytaxti va Afrikaning yirik shaharlaridan biri."
    },
    {
        id: "e11", level: "easy", category: "SUV HAVZALARI",
        question: "Dunyodagi eng katta ko‘l qaysi?",
        answers: ["Baykal", "Viktoriya", "Kaspiy dengizi", "Orol dengizi"],
        correct: "Kaspiy dengizi",
        explanation: "Kaspiy dengizi nomida dengiz so‘zi bo‘lsa-da, u maydoni bo‘yicha dunyodagi eng katta berk suv havzasidir."
    },
    {
        id: "e12", level: "easy", category: "MAMLAKATLAR",
        question: "Germaniyaning poytaxti qaysi shahar?",
        answers: ["Myunxen", "Gamburg", "Berlin", "Frankfurt"],
        correct: "Berlin",
        explanation: "Berlin — Germaniya Federativ Respublikasining poytaxti."
    },
    {
        id: "e13", level: "easy", category: "QIT'ALAR",
        question: "Pingvinlar tabiiy holda asosan qaysi qit’ada yashaydi?",
        answers: ["Afrika", "Antarktida", "Yevropa", "Osiyo"],
        correct: "Antarktida",
        explanation: "Pingvinlarning ko‘plab turlari Janubiy yarimsharda yashaydi. Imperator pingvinlari Antarktidada uchraydi."
    },
    {
        id: "e14", level: "easy", category: "MAMLAKATLAR",
        question: "Italiyaning poytaxti qaysi shahar?",
        answers: ["Venetsiya", "Milan", "Rim", "Neapol"],
        correct: "Rim",
        explanation: "Rim — Italiyaning poytaxti. Shahar qadimiy tarixi bilan mashhur."
    },
    {
        id: "e15", level: "easy", category: "GEOGRAFIK OBYEKTLAR",
        question: "Yer sharining modeliga nima deyiladi?",
        answers: ["Xarita", "Globus", "Kompas", "Atlas"],
        correct: "Globus",
        explanation: "Globus — Yer sharining kichraytirilgan hajmiy modeli."
    },

    // =============== O‘RTA ===============

    {
        id: "m1", level: "medium", category: "MAMLAKATLAR",
        question: "Maydoni bo‘yicha dunyodagi eng katta davlat qaysi?",
        answers: ["Kanada", "Xitoy", "AQSH", "Rossiya"],
        correct: "Rossiya",
        explanation: "Rossiya hududi taxminan 17,1 million kvadrat kilometrni tashkil etadi."
    },
    {
        id: "m2", level: "medium", category: "DARYOLAR",
        question: "Amazonka daryosi qaysi okeanga quyiladi?",
        answers: ["Tinch okeani", "Atlantika okeani", "Hind okeani", "Shimoliy Muz okeani"],
        correct: "Atlantika okeani",
        explanation: "Amazonka Janubiy Amerikadan oqib o‘tib, Atlantika okeaniga quyiladi."
    },
    {
        id: "m3", level: "medium", category: "MAMLAKATLAR",
        question: "Qaysi davlat ikki qit’ada — Yevropa va Osiyoda joylashgan?",
        answers: ["Portugaliya", "Turkiya", "Misr", "Yaponiya"],
        correct: "Turkiya",
        explanation: "Turkiyaning bir qismi Yevropada, asosiy hududi esa Osiyoda joylashgan."
    },
    {
        id: "m4", level: "medium", category: "TOG‘LAR",
        question: "Himolay tog‘lari qaysi qit’ada joylashgan?",
        answers: ["Afrika", "Janubiy Amerika", "Osiyo", "Yevropa"],
        correct: "Osiyo",
        explanation: "Himolay tog‘ tizmasi Osiyoda joylashgan va Everestni ham o‘z ichiga oladi."
    },
    {
        id: "m5", level: "medium", category: "MAMLAKATLAR",
        question: "Qaysi davlatning poytaxti Ottava?",
        answers: ["Avstraliya", "Kanada", "AQSH", "Yangi Zelandiya"],
        correct: "Kanada",
        explanation: "Ottava — Kanadaning poytaxti. Toronto esa mamlakatning eng yirik shaharlaridan biridir."
    },
    {
        id: "m6", level: "medium", category: "SUV HAVZALARI",
        question: "Baykal ko‘li qaysi davlat hududida joylashgan?",
        answers: ["Mo‘g‘uliston", "Qozog‘iston", "Rossiya", "Xitoy"],
        correct: "Rossiya",
        explanation: "Baykal ko‘li Rossiyaning Sibir hududida joylashgan. U dunyodagi eng chuqur chuchuk suv ko‘lidir."
    },
    {
        id: "m7", level: "medium", category: "MAMLAKATLAR",
        question: "Qaysi davlatni ko‘pincha 'Quyosh chiqish mamlakati' deb atashadi?",
        answers: ["Xitoy", "Janubiy Koreya", "Yaponiya", "Tailand"],
        correct: "Yaponiya",
        explanation: "Yaponiyaning an’anaviy ramzlaridan biri quyosh bo‘lib, bu nom uning sharqiy joylashuvi bilan ham bog‘liq."
    },
    {
        id: "m8", level: "medium", category: "GEOGRAFIK OBYEKTLAR",
        question: "Gibraltar bo‘g‘ozi qaysi ikki hududni ajratib turadi?",
        answers: ["Yevropa va Afrika", "Osiyo va Afrika", "Yevropa va Osiyo", "Shimoliy va Janubiy Amerika"],
        correct: "Yevropa va Afrika",
        explanation: "Gibraltar bo‘g‘ozi Yevropadagi Ispaniya va Afrikadagi Marokash oralig‘ida joylashgan."
    },
    {
        id: "m9", level: "medium", category: "MAMLAKATLAR",
        question: "Braziliyaning rasmiy tili qaysi?",
        answers: ["Ispan tili", "Portugal tili", "Ingliz tili", "Fransuz tili"],
        correct: "Portugal tili",
        explanation: "Braziliya Janubiy Amerikada joylashgan va uning rasmiy tili portugal tilidir."
    },
    {
        id: "m10", level: "medium", category: "IQLIM",
        question: "Ekvator Yer sharini qaysi ikki yarimsharga ajratadi?",
        answers: ["Sharqiy va G‘arbiy", "Shimoliy va Janubiy", "Issiq va Sovuq", "Quruqlik va Suv"],
        correct: "Shimoliy va Janubiy",
        explanation: "Ekvator Yer sharini Shimoliy va Janubiy yarimsharlarga ajratadi."
    },
    {
        id: "m11", level: "medium", category: "MAMLAKATLAR",
        question: "Qaysi davlat poytaxti Kanberra hisoblanadi?",
        answers: ["Yangi Zelandiya", "Avstraliya", "Fiji", "Indoneziya"],
        correct: "Avstraliya",
        explanation: "Kanberra — Avstraliyaning poytaxti. Sidney mamlakatning eng yirik shaharlaridan biri."
    },
    {
        id: "m12", level: "medium", category: "TOG‘LAR",
        question: "And tog‘lari qaysi materik bo‘ylab cho‘zilgan?",
        answers: ["Shimoliy Amerika", "Afrika", "Janubiy Amerika", "Osiyo"],
        correct: "Janubiy Amerika",
        explanation: "And tog‘lari Janubiy Amerikaning g‘arbiy chekkasi bo‘ylab uzoq masofaga cho‘zilgan."
    },
    {
        id: "m13", level: "medium", category: "MAMLAKATLAR",
        question: "Dunyodagi eng ko‘p aholiga ega davlat qaysi?",
        answers: ["Xitoy", "Hindiston", "AQSH", "Indoneziya"],
        correct: "Hindiston",
        explanation: "Hindiston 2023-yilda Xitoydan o‘zib, dunyodagi eng ko‘p aholiga ega davlatga aylandi."
    },
    {
        id: "m14", level: "medium", category: "SUV HAVZALARI",
        question: "Orol dengizi qaysi ikki davlat hududlari orasida joylashgan?",
        answers: ["O‘zbekiston va Qozog‘iston", "O‘zbekiston va Tojikiston", "Qozog‘iston va Rossiya", "Turkmaniston va Eron"],
        correct: "O‘zbekiston va Qozog‘iston",
        explanation: "Orol dengizi O‘zbekiston va Qozog‘iston chegaradosh hududlarida joylashgan."
    },
    {
        id: "m15", level: "medium", category: "GEOGRAFIK OBYEKTLAR",
        question: "Dunyodagi eng katta orol qaysi?",
        answers: ["Madagaskar", "Borneo", "Grenlandiya", "Yangi Gvineya"],
        correct: "Grenlandiya",
        explanation: "Grenlandiya — dunyodagi eng katta orol. Avstraliya esa odatda materik sifatida tasniflanadi."
    },

    // =============== QIYIN ===============

    {
        id: "h1", level: "hard", category: "GEOGRAFIK KOORDINATALAR",
        question: "Bosh meridian qaysi joydan o‘tadi?",
        answers: ["Parij", "Grinvich", "Rim", "Madrid"],
        correct: "Grinvich",
        explanation: "Nol darajali meridian Buyuk Britaniyaning Grinvich hududidagi tarixiy rasadxona orqali o‘tadi."
    },
    {
        id: "h2", level: "hard", category: "SUV HAVZALARI",
        question: "Dunyodagi eng chuqur ko‘l qaysi?",
        answers: ["Kaspiy dengizi", "Baykal", "Tanganika", "Viktoriya"],
        correct: "Baykal",
        explanation: "Baykal ko‘lining eng chuqur nuqtasi taxminan 1 642 metr."
    },
    {
        id: "h3", level: "hard", category: "IQLIM",
        question: "Atakama cho‘li qaysi davlat hududida joylashgan?",
        answers: ["Peru", "Chili", "Argentina", "Boliviya"],
        correct: "Chili",
        explanation: "Atakama cho‘li asosan Chilining shimolida joylashgan. U Yerning eng qurg‘oqchil hududlaridan biridir."
    },
    {
        id: "h4", level: "hard", category: "GEOGRAFIK OBYEKTLAR",
        question: "Qaysi bo‘g‘oz Osiyo va Shimoliy Amerikani ajratib turadi?",
        answers: ["Gibraltar", "Bosfor", "Bering", "Malakka"],
        correct: "Bering",
        explanation: "Bering bo‘g‘ozi Rossiya va AQSHning Alyaska hududi oralig‘ida joylashgan."
    },
    {
        id: "h5", level: "hard", category: "TOG‘LAR",
        question: "Kilimanjaro tog‘i qaysi davlatda joylashgan?",
        answers: ["Keniya", "Tanzaniya", "Uganda", "Efiopiya"],
        correct: "Tanzaniya",
        explanation: "Kilimanjaro Tanzaniyada joylashgan. U Afrikaning eng baland tog‘idir."
    },
    {
        id: "h6", level: "hard", category: "MAMLAKATLAR",
        question: "Lesoto davlati qaysi mamlakat hududi bilan to‘liq o‘ralgan?",
        answers: ["Namibiya", "Botsvana", "Janubiy Afrika Respublikasi", "Zimbabve"],
        correct: "Janubiy Afrika Respublikasi",
        explanation: "Lesoto Janubiy Afrika Respublikasi hududi bilan to‘liq o‘ralgan mustaqil davlatdir."
    },
    {
        id: "h7", level: "hard", category: "DARYOLAR",
        question: "Dunay daryosi qaysi dengizga quyiladi?",
        answers: ["O‘rta Yer dengizi", "Qora dengiz", "Boltiq dengizi", "Kaspiy dengizi"],
        correct: "Qora dengiz",
        explanation: "Dunay daryosi Markaziy va Sharqiy Yevropadan oqib, Qora dengizga quyiladi."
    },
    {
        id: "h8", level: "hard", category: "MAMLAKATLAR",
        question: "Dunyodagi eng kichik mustaqil davlat qaysi?",
        answers: ["Monako", "San-Marino", "Vatikan", "Lixtenshteyn"],
        correct: "Vatikan",
        explanation: "Vatikan maydoni taxminan 0,49 kvadrat kilometr bo‘lgan dunyodagi eng kichik mustaqil davlatdir."
    },
    {
        id: "h9", level: "hard", category: "GEOGRAFIK OBYEKTLAR",
        question: "Panama kanali qaysi ikki okeanni bog‘laydi?",
        answers: ["Hind va Tinch", "Atlantika va Tinch", "Atlantika va Hind", "Shimoliy Muz va Tinch"],
        correct: "Atlantika va Tinch",
        explanation: "Panama kanali Atlantika okeani havzasini Tinch okeani bilan bog‘laydi."
    },
    {
        id: "h10", level: "hard", category: "IQLIM",
        question: "Musson shamollarining asosiy xususiyati nima?",
        answers: [
            "Doim bir yo‘nalishda esishi",
            "Fasllarga qarab yo‘nalishini o‘zgartirishi",
            "Faqat tog‘larda esishi",
            "Faqat qishda esishi"
        ],
        correct: "Fasllarga qarab yo‘nalishini o‘zgartirishi",
        explanation: "Musson shamollari fasllar almashishi bilan yo‘nalishini o‘zgartiradi."
    },
    {
        id: "h11", level: "hard", category: "MAMLAKATLAR",
        question: "Qaysi davlatning poytaxti Ulan-Bator?",
        answers: ["Qirg‘iziston", "Mo‘g‘uliston", "Qozog‘iston", "Nepal"],
        correct: "Mo‘g‘uliston",
        explanation: "Ulan-Bator — Mo‘g‘ulistonning poytaxti va eng yirik shahri."
    },
    {
        id: "h12", level: "hard", category: "GEOGRAFIK KOORDINATALAR",
        question: "Tropiklar taxminan necha daraja kenglikda joylashgan?",
        answers: ["23,5°", "45°", "66,5°", "90°"],
        correct: "23,5°",
        explanation: "Shimoliy va Janubiy tropiklar ekvatordan taxminan 23,5 daraja uzoqlikda joylashgan."
    },
    {
        id: "h13", level: "hard", category: "MAMLAKATLAR",
        question: "Qaysi davlat dunyodagi eng ko‘p vaqt mintaqasiga ega?",
        answers: ["AQSH", "Rossiya", "Fransiya", "Xitoy"],
        correct: "Fransiya",
        explanation: "Fransiyaning dengizorti hududlari hisobga olinganda, u eng ko‘p vaqt mintaqalariga ega davlatlardan biri bo‘lib, odatda birinchi o‘rinda qayd etiladi."
    },
    {
        id: "h14", level: "hard", category: "GEOGRAFIK OBYEKTLAR",
        question: "Sunda bo‘g‘ozi qaysi ikki orol orasida joylashgan?",
        answers: ["Yava va Sumatra", "Bali va Lombok", "Borneo va Sulavesi", "Yangi Gvineya va Avstraliya"],
        correct: "Yava va Sumatra",
        explanation: "Sunda bo‘g‘ozi Indoneziyadagi Yava va Sumatra orollarini ajratib turadi."
    },
    {
        id: "h15", level: "hard", category: "DARYOLAR",
        question: "Reyn daryosi qaysi dengizga quyiladi?",
        answers: ["O‘rta Yer dengizi", "Shimoliy dengiz", "Qora dengiz", "Boltiq dengizi"],
        correct: "Shimoliy dengiz",
        explanation: "Reyn daryosi Yevropadan oqib o‘tib, Niderlandiya hududida Shimoliy dengizga quyiladi."
    }
];


// ==========================================
// O‘YIN O‘ZGARUVCHILARI
// ==========================================

let player = "";
let currentLevel = "easy";
let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 20;
let timerInterval = null;
let answered = false;
let questionCount = 0;

const levelNames = {
    easy: "OSON DARAJA",
    medium: "O‘RTA DARAJA",
    hard: "QIYIN DARAJA"
};


// ==========================================
// EKRANLARNI ALMASHTIRISH
// ==========================================

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

function goHome() {
    stopTimer();
    showScreen("homeScreen");
}

function showLevels() {
    const input = document.getElementById("playerName");

    if (!player) {
        player = input.value.trim();
    }

    if (!player) {
        alert("Iltimos, avval ismingizni kiriting!");
        input.focus();
        return;
    }

    document.getElementById("welcomeText").textContent =
        `Xush kelibsiz, ${player}! Qaysi darajada bellashamiz?`;

    showScreen("levelScreen");
}


// ==========================================
// SAVOLLARNI TAKRORLAMASLIK TIZIMI
// ==========================================

function getSeenQuestions() {
    try {
        return JSON.parse(localStorage.getItem("geoSeenQuestions")) || {
            easy: [],
            medium: [],
            hard: []
        };
    } catch {
        return {
            easy: [],
            medium: [],
            hard: []
        };
    }
}

function saveSeenQuestions(data) {
    localStorage.setItem("geoSeenQuestions", JSON.stringify(data));
}

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function getNewQuestions(level) {
    const pool = questions.filter(q => q.level === level);
    const seen = getSeenQuestions();

    if (!seen[level]) {
        seen[level] = [];
    }

    let available = pool.filter(q => !seen[level].includes(q.id));

    // Barcha savollar ishlatilgan bo‘lsa, shu daraja bazasini yangidan boshlaymiz.
    if (available.length === 0) {
        seen[level] = [];
        available = [...pool];
    }

    // Qolgan takrorlanmagan savollar sonicha savol beriladi.
    const selected = shuffleArray(available).slice(0, 10);

    selected.forEach(q => {
        seen[level].push(q.id);
    });

    saveSeenQuestions(seen);

    return selected;
}


// ==========================================
// O‘YINNI BOSHLASH
// ==========================================

function startGame(level) {
    currentLevel = level;
    gameQuestions = getNewQuestions(level);

    currentIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    questionCount = gameQuestions.length;

    document.getElementById("levelLabel").textContent = levelNames[level];

    showScreen("gameScreen");
    loadQuestion();
}


// ==========================================
// SAVOLNI YUKLASH
// ==========================================

function loadQuestion() {
    stopTimer();

    answered = false;
    timeLeft = 20;

    const q = gameQuestions[currentIndex];

    document.getElementById("questionNumber").textContent =
        `${currentIndex + 1}/${questionCount}`;

    document.getElementById("score").textContent = score;
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("timerBox").classList.remove("warning");

    document.getElementById("progressFill").style.width =
        `${(currentIndex / questionCount) * 100}%`;

    document.getElementById("questionCategory").textContent = q.category;
    document.getElementById("questionText").textContent = q.question;

    const answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    const shuffledAnswers = shuffleArray(q.answers);

    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

        button.onclick = () => checkAnswer(answer, button);

        answersBox.appendChild(button);
    });

    const feedback = document.getElementById("feedback");
    feedback.className = "feedback";
    feedback.textContent = "";

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.classList.remove("show");
    nextBtn.textContent = currentIndex === questionCount - 1
        ? "NATIJANI KO‘RISH 🏆"
        : "KEYINGI SAVOL ➜";

    startTimer();
}


// ==========================================
// VAQT HISOBLAGICHI
// ==========================================

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 5) {
            document.getElementById("timerBox").classList.add("warning");
        }

        if (timeLeft <= 0) {
            stopTimer();
            timeExpired();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function timeExpired() {
    if (answered) return;

    answered = true;
    wrongAnswers++;

    const q = gameQuestions[currentIndex];

    document.querySelectorAll(".answer-btn").forEach(button => {
        button.disabled = true;

        const answerText = button.textContent.substring(3);

        if (answerText === q.correct) {
            button.classList.add("correct");
        }
    });

    showFeedback(
        "⏰ Vaqt tugadi! To‘g‘ri javob: " + q.correct +
        ".<br><br>" + q.explanation
    );
}


// ==========================================
// JAVOBNI TEKSHIRISH
// ==========================================

function checkAnswer(selected, selectedButton) {
    if (answered) return;

    answered = true;
    stopTimer();

    const q = gameQuestions[currentIndex];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;

        const answerText = button.textContent.substring(3);

        if (answerText === q.correct) {
            button.classList.add("correct");
        }
    });

    if (selected === q.correct) {
        correctAnswers++;

        // Tez javob berilganida ko‘proq ball.
        const earnedPoints = 10 + Math.ceil(timeLeft / 2);
        score += earnedPoints;

        document.getElementById("score").textContent = score;

        showFeedback(
            `✅ To‘g‘ri javob! +${earnedPoints} ball.<br><br>${q.explanation}`
        );

    } else {
        wrongAnswers++;
        selectedButton.classList.add("wrong");

        showFeedback(
            `❌ Noto‘g‘ri javob!<br>
            To‘g‘ri javob: <b>${q.correct}</b>.<br><br>
            ${q.explanation}`
        );
    }
}


// ==========================================
// JAVOBDAN KEYINGI IZOH
// ==========================================

function showFeedback(message) {
    const feedback = document.getElementById("feedback");

    feedback.innerHTML = message;
    feedback.classList.add("show");

    document.getElementById("nextBtn").classList.add("show");
}


// ==========================================
// KEYINGI SAVOL
// ==========================================

function nextQuestion() {
    if (!answered) return;

    currentIndex++;

    if (currentIndex >= questionCount) {
        finishGame();
    } else {
        loadQuestion();
    }
}


// ==========================================
// O‘YIN YAKUNI
// ==========================================

function finishGame() {
    stopTimer();

    const percentage = Math.round((correctAnswers / questionCount) * 100);

    let title = "";
    let icon = "";

    if (percentage >= 90) {
        title = "GEOGRAFIYA USTASI!";
        icon = "🏆";
    } else if (percentage >= 70) {
        title = "JUDA YAXSHI NATIJA!";
        icon = "🥇";
    } else if (percentage >= 50) {
        title = "YAXSHI HARAKAT!";
        icon = "🌟";
    } else {
        title = "BILIMINGIZNI OSHIRING!";
        icon = "🌍";
    }

    document.getElementById("resultIcon").textContent = icon;
    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultName").textContent =
        `${player}, sizning sayohatingiz yakunlandi!`;

    document.getElementById("finalScore").textContent = score;
    document.getElementById("correctCount").textContent = correctAnswers;
    document.getElementById("wrongCount").textContent = wrongAnswers;
    document.getElementById("percent").textContent = percentage + "%";

    saveResult();

    showScreen("resultScreen");
}


// ==========================================
// REYTINGNI SAQLASH
// ==========================================

function getRanking() {
    try {
        return JSON.parse(localStorage.getItem("geoRanking")) || [];
    } catch {
        return [];
    }
}

function saveResult() {
    const ranking = getRanking();

    ranking.push({
        name: player,
        score: score,
        level: levelNames[currentLevel],
        correct: correctAnswers,
        date: new Date().toLocaleDateString("uz-UZ")
    });

    ranking.sort((a, b) => b.score - a.score);

    localStorage.setItem("geoRanking", JSON.stringify(ranking.slice(0, 50)));
}


// ==========================================
// REYTING JADVALI
// ==========================================

function showRanking() {
    const ranking = getRanking();
    const list = document.getElementById("rankingList");

    list.innerHTML = "";

    if (ranking.length === 0) {
        list.innerHTML = `
            <div class="empty-ranking">
                🏆 Hozircha natijalar mavjud emas.
                <br><br>
                Birinchi bo‘lib o‘yinni boshlang!
            </div>
        `;
    } else {
        ranking.forEach((item, index) => {
            const row = document.createElement("div");
            row.className = "rank-item";

            const left = document.createElement("div");
            left.className = "rank-left";

            const number = document.createElement("div");
            number.className = "rank-number";
            number.textContent = index + 1 + ".";

            const info = document.createElement("div");

            const name = document.createElement("div");
            name.className = "rank-name";
            name.textContent = item.name;

            const level = document.createElement("div");
            level.className = "rank-level";
            level.textContent = `${item.level} • ${item.date}`;

            info.appendChild(name);
            info.appendChild(level);

            left.appendChild(number);
            left.appendChild(info);

            const points = document.createElement("div");
            points.className = "rank-score";
            points.textContent = item.score + " ball";

            row.appendChild(left);
            row.appendChild(points);

            list.appendChild(row);
        });
    }

    showScreen("rankingScreen");
}


// ==========================================
// REYTINGNI TOZALASH
// ==========================================

function clearRanking() {
    const confirmation = confirm(
        "Barcha reyting natijalarini o‘chirishni xohlaysizmi?"
    );

    if (confirmation) {
        localStorage.removeItem("geoRanking");
        showRanking();
    }
}


// ==========================================
// O‘YINDAN CHIQISH
// ==========================================

function confirmExit() {
    const confirmation = confirm(
        "O‘yindan chiqmoqchimisiz? Joriy natija saqlanmaydi."
    );

    if (confirmation) {
        stopTimer();
        showLevels();
    }
}