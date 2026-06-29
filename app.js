// ========== Spread Definitions ==========
const SPREADS = {
    "จั่ว 1 ใบ (ถาม-ตอบ)": {
        count: 1,
        positions: ["ไพ่"],
        descriptions: ["คำตอบจากไพ่"],
        prompts: ["ไพ่ใบเดียวตอบคำถามของคุณว่า"]
    },
    "จั่ว 3 ใบ (อดีต/ปัจจุบัน/อนาคต)": {
        count: 3,
        positions: ["อดีต", "ปัจจุบัน", "อนาคต"],
        descriptions: ["สิ่งที่ผ่านมา", "สถานการณ์ตอนนี้", "สิ่งที่จะเกิดขึ้น"],
        prompts: [
            "ย้อนกลับไปในอดีต สิ่งที่เคยเกิดขึ้นคือ",
            "ตอนนี้สถานการณ์คือ",
            "ในอนาคต สิ่งที่จะเกิดขึ้นคือ"
        ]
    },
    "จั่ว 3 ใบ (สถานการณ์/อุปสรรค์/คำแนะนำ)": {
        count: 3,
        positions: ["สถานการณ์", "อุปสรรค์", "คำแนะนำ"],
        descriptions: ["สถานการณ์ปัจจุบัน", "สิ่งที่เป็นอุปสรรค์", "สิ่งที่ไพ่แนะนำ"],
        prompts: [
            "สถานการณ์ปัจจุบันของคุณคือ",
            "อุปสรรค์ที่ต้องเผชิญคือ",
            "คำแนะนำจากไพ่คือ"
        ]
    },
    "จั่ว 3 ใบ (คุณ/คู่/ความสัมพันธ์)": {
        count: 3,
        positions: ["คุณ", "คู่ของคุณ", "ความสัมพันธ์"],
        descriptions: ["ความรู้สึกของคุณ", "ความรู้สึกของอีกฝ่าย", "ทิศทางความสัมพันธ์"],
        prompts: [
            "ตัวคุณกำลังรู้สึกว่า",
            "อีกฝ่ายกำลังรู้สึกว่า",
            "ความสัมพันธ์ของคุณกำลังไปในทิศทาง"
        ]
    },
    "จั่ว 5 ใบ (Cross)": {
        count: 5,
        positions: ["อดีต", "ปัจจุบัน", "อนาคต", "สิ่งที่ควรรู้", "ผลลัพธ์"],
        descriptions: ["อดีตที่ผ่านมา", "สถานการณ์ตอนนี้", "อนาคตที่กำลังจะมาถึง", "สิ่งที่ไพ่ต้องการจะบอก", "ผลลัพธ์สุดท้าย"],
        prompts: [
            "อดีตที่ผ่านมาบ่งบอกว่า",
            "ตอนนี้สถานการณ์คือ",
            "อนาคตที่กำลังจะมาถึงคือ",
            "สิ่งสำคัญที่ควรรู้คือ",
            "ผลลัพธ์สุดท้ายจะเป็น"
        ]
    },
    "จั่ว 7 ใบ (Horseshoe)": {
        count: 7,
        positions: ["อดีต", "ปัจจุบัน", "อนาคตใกล้", "อนาคตไกล", "อุปสรรค์", "ความช่วยเหลือ", "ผลลัพธ์"],
        descriptions: ["อดีตที่มีผลต่อปัจจุบัน", "สถานการณ์ปัจจุบัน", "อนาคตอันใกล้", "อนาคตไกล", "อุปสรรค์ที่ต้องฝ่าฟัน", "สิ่งที่จะช่วยเหลือ", "ผลลัพธ์สุดท้าย"],
        prompts: [
            "อดีตที่ผ่านมามีผลว่า",
            "สถานการณ์ปัจจุบันคือ",
            "อนาคตอันใกล้จะเป็น",
            "อนาคตไกลจะเป็น",
            "อุปสรรค์ที่ต้องเผชิญคือ",
            "ความช่วยเหลือที่จะได้รับคือ",
            "ผลลัพธ์สุดท้ายจะเป็น"
        ]
    },
    "จั่ว 10 ใบ (Celtic Cross)": {
        count: 10,
        positions: ["สถานการณ์ปัจจุบัน", "อุปสรรค์/ความท้าทาย", "จิตใจที่ซ่อนอยู่", "อดีตที่ผ่านมา", "สิ่งที่กำลังจะเกิด", "อนาคตใกล้", "ทัศนคติของคุณ", "สภาพแวดล้อม", "ความหวัง/ความกลัว", "ผลลัพธ์สุดท้าย"],
        descriptions: ["สถานการณ์หลัก", "สิ่งที่ขวางกั้น", "สิ่งที่ซ่อนอยู่ในใจ", "อดีตที่มีผล", "สิ่งที่กำลังจะมา", "อนาคตอันใกล้", "วิธีมองปัญหา", "คนรอบข้าง", "สิ่งที่หวัง/กลัว", "ผลลัพธ์ปลายทาง"],
        prompts: [
            "สถานการณ์หลักของคุณคือ",
            "อุปสรรค์และความท้าทายคือ",
            "สิ่งที่ซ่อนอยู่ในใจคือ",
            "อดีตที่ผ่านมามีผลว่า",
            "สิ่งที่กำลังจะเกิดขึ้นคือ",
            "อนาคตอันใกล้จะเป็น",
            "วิธีที่คุณมองปัญหาคือ",
            "สภาพแวดล้อมและคนรอบข้าง",
            "ความหวังและความกลัวของคุณคือ",
            "ผลลัพธ์สุดท้ายจะเป็น"
        ]
    },
    "จั่ว 3 ใบ (ความรัก)": {
        count: 3,
        positions: ["ความรู้สึกคุณ", "ความรู้สึกอีกฝ่าย", "อนาคตความสัมพันธ์"],
        descriptions: ["สิ่งที่คุณรู้สึกอยู่ลึกๆ", "สิ่งที่อีกฝ่ายรู้สึก", "ความสัมพันธ์จะไปในทิศทางใด"],
        prompts: [
            "ลึกๆ แล้วคุณรู้สึกว่า",
            "อีกฝ่ายกำลังรู้สึกว่า",
            "ความสัมพันธ์ของคุณทั้งคู่จะไปในทิศทาง"
        ]
    },
    "จั่ว 4 ใบ (การงาน)": {
        count: 4,
        positions: ["สถานการณ์งาน", "ปัญหา", "โอกาส", "ผลลัพธ์"],
        descriptions: ["สถานการณ์การทำงานตอนนี้", "ปัญหาที่ต้องแก้ไข", "โอกาสที่มีอยู่", "ผลลัพธ์ที่จะได้รับ"],
        prompts: [
            "สถานการณ์การทำงานตอนนี้คือ",
            "ปัญหาหลักที่ต้องแก้ไขคือ",
            "โอกาสที่มีอยู่คือ",
            "ผลลัพธ์ที่จะได้รับคือ"
        ]
    }
};

const TOPIC_KEYWORDS = {
    "ความรัก": ["รัก", "แฟน", "คนรัก", "คู่รัก", "ชอบ", "หลงรัก", "แต่งงาน", "ความสัมพันธ์", "รู้สึก", "อกหัก", "เลิกกัน", "คิดถึง"],
    "การงาน": ["งาน", "ทำงาน", "เงินเดือน", "เลื่อนตำแหน่ง", "ลาออก", "สัมภาษณ์", "ธุรกิจ", "เปิดร้าน", "เจ้านาย", "เพื่อนร่วมงาน"],
    "การเงิน": ["เงิน", "รวย", "หนี้", "ลงทุน", "ซื้อ", "ขาย", "หวย", "โชคลาภ", "เก็บเงิน", "ใช้เงิน"],
    "สุขภาพ": ["ป่วย", "เจ็บ", "หมอ", "โรงพยาบาล", "สุขภาพ", "ออกกำลังกาย", "นอนไม่หลับ", "เครียด"],
    "การเดินทาง": ["เดินทาง", "ท่องเที่ยว", "ต่างประเทศ", "ย้ายที่อยู่", "ย้ายบ้าน", "ย้ายงาน"]
};

// ========== State ==========
let tarotData = {};
let meaningsDB = {};

// ========== DOM Elements ==========
const spreadSelect = document.getElementById('spread-select');
const cardCountLabel = document.getElementById('card-count');
const questionInput = document.getElementById('question-input');
const drawBtn = document.getElementById('draw-btn');
const cardsContainer = document.getElementById('cards-container');
const predictionContent = document.getElementById('prediction-content');

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', async () => {
    await loadTarotData();
    await loadMeanings();
    updateCardCount();
    spreadSelect.addEventListener('change', updateCardCount);
    drawBtn.addEventListener('click', drawCards);
});

// ========== Load Data ==========
async function loadTarotData() {
    try {
        const response = await fetch('tarot_data.json');
        tarotData = await response.json();
    } catch (error) {
        console.error('Error loading tarot data:', error);
        tarotData = {};
    }
}

async function loadMeanings() {
    try {
        const response = await fetch('meanings.txt');
        const text = await response.text();
        const pattern = /((?:The |Ace of |Queen of |King of |Knight of |Page of |มหาดเล็ก|อัศวิน|ราชินี|ราชา)?[^\n]{2,40}?)\s*หมายถึง\s*([^\n]+)/g;
        let match;
        while ((match = pattern.exec(text)) !== null) {
            const name = match[0].split('หมายถึง')[0].trim().replace(/\s+$/, '');
            const meaning = match[2].trim();
            meaningsDB[name.toLowerCase()] = meaning;
        }
    } catch (error) {
        console.error('Error loading meanings:', error);
        meaningsDB = {};
    }
}

// ========== Update Card Count ==========
function updateCardCount() {
    const spreadKey = spreadSelect.value;
    const spread = SPREADS[spreadKey];
    cardCountLabel.textContent = `${spread.count} ใบ`;
}

// ========== Detect Topic ==========
function detectTopic(question) {
    const q = question.toLowerCase();
    for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
        for (const kw of keywords) {
            if (q.includes(kw)) {
                return topic;
            }
        }
    }
    return "ทั่วไป";
}

// ========== Lookup Extended Meaning ==========
function lookupExtendedMeaning(cardName) {
    const nameLower = cardName.toLowerCase();
    if (meaningsDB[nameLower]) {
        return meaningsDB[nameLower];
    }
    for (const [key, val] of Object.entries(meaningsDB)) {
        if (nameLower.includes(key) || key.includes(nameLower)) {
            return val;
        }
    }
    return "";
}

// ========== Draw Cards ==========
function drawCards() {
    const spreadKey = spreadSelect.value;
    const spread = SPREADS[spreadKey];
    const cardCount = spread.count;

    // Clear previous cards
    cardsContainer.innerHTML = '';

    // Random indices (no duplicates)
    const indices = [];
    while (indices.length < cardCount) {
        const idx = Math.floor(Math.random() * 78);
        if (!indices.includes(idx)) {
            indices.push(idx);
        }
    }

    // Create card elements
    const cardsData = [];
    indices.forEach((idx, i) => {
        const cardData = tarotData[String(idx)] || { name: "Unknown", meaning: "ไม่มีข้อมูล" };
        cardsData.push(cardData);

        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';
        cardItem.style.animationDelay = `${i * 0.1}s`;

        const positionLabel = spread.positions[i] || '';

        cardItem.innerHTML = `
            <img src="images/${idx}.jpg" alt="${cardData.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22150%22><rect fill=%22%232D1B4E%22 width=%22100%22 height=%22150%22/><text fill=%22%23C9A84C%22 x=%2250%22 y=%2275%22 text-anchor=%22middle%22 dy=%22.3em%22>?</text></svg>'">
            <span class="card-position">${positionLabel}</span>
            <span class="card-name">${cardData.name}</span>
        `;

        cardsContainer.appendChild(cardItem);
    });

    // Build prediction
    const question = questionInput.value.trim();
    const topic = question ? detectTopic(question) : "ทั่วไป";
    const prediction = buildPrediction(cardsData, spreadKey, question, topic);
    predictionContent.innerHTML = prediction;
}

// ========== Build Prediction ==========
function buildPrediction(cardsData, spreadKey, question, topic) {
    const spread = SPREADS[spreadKey];
    const positions = spread.positions;
    const descriptions = spread.descriptions;
    const prompts = spread.prompts;

    let html = '';

    if (question) {
        html += `<div class="prediction-question">"${question}"</div>`;
    }

    html += `<div class="prediction-spread">รูปแบบ: ${spreadKey}</div>`;

    cardsData.forEach((card, i) => {
        const cardName = card.name || "Unknown";
        const cardMeaning = card.meaning || "";
        const extended = lookupExtendedMeaning(cardName);

        html += `
            <div class="prediction-card">
                <div class="card-position-title">▸ ${positions[i]} (${descriptions[i]})</div>
                <div class="card-prompt">${prompts[i]} — <span class="card-name-highlight">${cardName}</span></div>
                <div class="card-meaning">ความหมาย: ${cardMeaning}</div>
                ${extended ? `<div class="card-extended">"${extended}"</div>` : ''}
            </div>
        `;
    });

    // Summary
    const summary = generateSummary(cardsData, topic, question, spreadKey);
    html += `
        <div class="prediction-summary">
            <div class="summary-title">✦ สรุปจากไพ่</div>
            <div class="summary-text">${summary}</div>
        </div>
    `;

    return html;
}

// ========== Generate Summary ==========
function generateSummary(cardsData, topic, question, spreadKey) {
    const meanings = cardsData.map(c => c.meaning || "");
    const names = cardsData.map(c => c.name || "");

    const positiveWords = ["สำเร็จ", "ดี", "สุข", "สมหวัง", "รัก", "มั่นคง", "มั่งมี", "ชัยชนะ", "เติบโต", "หวัง"];
    const negativeWords = ["สูญเสีย", "เศร้า", "เครียด", "กังวล", "อุปสรรค", "เบื่อ", "เจ็บ", "เลิก", "ผิดหวัง"];

    let posCount = 0;
    let negCount = 0;

    meanings.forEach(m => {
        if (positiveWords.some(w => m.includes(w))) posCount++;
        if (negativeWords.some(w => m.includes(w))) negCount++;
    });

    const narratives = [];

    if (spreadKey === "จั่ว 1 ใบ (ถาม-ตอบ)") {
        if (posCount > 0) {
            narratives.push("ไพ่ใบเดียวบ่งบอกว่าคำตอบคือ 'ใช่' สิ่งดีๆ กำลังจะเข้ามา");
        } else {
            narratives.push("ไพ่ใบเดียวบ่งบอกว่าควรระวัง ยังไม่ใช่เวลาที่เหมาะสม");
        }
    } else if (spreadKey === "จั่ว 3 ใบ (ความรัก)") {
        narratives.push("ไพ่ความรักบ่งบอกถึงความรู้สึกที่ลึกซึ้งของทั้งสองฝ่าย");
        if (posCount >= 2) {
            narratives.push("ความสัมพันธ์มีโอกาสเติบโตในทิศทางที่ดี");
        } else if (negCount >= 2) {
            narratives.push("ควรเปิดใจคุยกันเพื่อเข้าใจความรู้สึกที่แท้จริง");
        }
    } else if (spreadKey === "จั่ว 4 ใบ (การงาน)") {
        narratives.push("ไพ่การงานบ่งบอกถึงทิศทางการทำงานของคุณ");
        if (posCount >= 2) {
            narratives.push("มีโอกาสประสบความสำเร็จสูง ควรคว้าไว้");
        } else if (negCount >= 2) {
            narratives.push("มีอุปสรรค์ที่ต้องฝ่าฟัน แต่จะผ่านไปได้");
        }
    } else {
        if (posCount >= 2) {
            narratives.push("ไพ่บ่งบอกถึงทิศทางที่ดี สิ่งดีๆ กำลังจะเข้ามาในชีวิตของคุณ");
        } else if (negCount >= 2) {
            narratives.push("ไพ่บ่งบอกว่าช่วงนี้อาจมีความท้าทาย แต่จงจำไว้ว่าทุกปัญหามีทางออก");
        } else {
            narratives.push("ไพ่แสดงให้เห็นถึงความสมดุลในชีวิต มีทั้งสิ่งที่ดีและสิ่งที่ต้องระวัง");
        }
    }

    // Special cards
    if (names.includes("The Star") || names.includes("The Sun")) {
        narratives.push("ไพ่ดวงดาวและดวงอาทิตย์ส่องแสงนำทาง ความหวังและความสุขกำลังจะมาถึง");
    } else if (names.includes("Death") || names.includes("The Tower")) {
        narratives.push("แม้จะมีการเปลี่ยนแปลงครั้งใหญ่ แต่นั่นคือจุดเริ่มต้นของสิ่งใหม่ๆ ที่ดีกว่าเดิม");
    } else if (names.includes("The Fool")) {
        narratives.push("ไพ่ The Fool บอกให้ก้าวออกมาจากกรอบเดิมๆ ลองสิ่งใหม่ๆ ดูบ้าง");
    } else if (names.includes("The Lovers")) {
        narratives.push("ไพ่ The Lovers บ่งบอกถึงความรักและการตัดสินใจที่สำคัญ");
    } else if (names.includes("Strength")) {
        narratives.push("ไพ่ Strength บ่งบอกถึงความแข็งแกร่งภายใน คุณมีพลังพอที่จะฝ่าฟันทุกอย่าง");
    }

    return narratives.join(" ");
}
