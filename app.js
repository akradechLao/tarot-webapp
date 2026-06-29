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
let tarotDetailed = {};
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
    await loadTarotDetailed();
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

async function loadTarotDetailed() {
    try {
        const response = await fetch('tarot_detailed.json');
        tarotDetailed = await response.json();
    } catch (error) {
        console.error('Error loading tarot detailed:', error);
        tarotDetailed = {};
    }
}

async function loadMeanings() {
    try {
        const response = await fetch('meanings.txt');
        const text = await response.text();
        // Parse Thai tarot meanings from the text file
        const lines = text.split('\n');
        let currentCategory = '';
        
        for (const line of lines) {
            const trimmed = line.trim();
            
            // Detect category headers
            if (trimmed.includes('Major Arcana')) currentCategory = 'major';
            else if (trimmed.includes('ไพ่ถ้วย')) currentCategory = 'cups';
            else if (trimmed.includes('ไพ่เหรียญ')) currentCategory = 'pentacles';
            else if (trimmed.includes('ไพ่ดาบ')) currentCategory = 'swords';
            else if (trimmed.includes('ไพ่ไม้เท้า')) currentCategory = 'wands';
            
            // Parse card meanings
            const match = trimmed.match(/^(.+?)\s*หมายถึง\s*(.+)$/);
            if (match) {
                const cardName = match[1].trim();
                const meaning = match[2].trim();
                meaningsDB[cardName.toLowerCase()] = meaning;
            }
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

// ========== Get Context Meaning ==========
function getContextMeaning(cardIndex, topic) {
    const card = tarotDetailed[cardIndex];
    if (!card) return "";
    
    switch(topic) {
        case "ความรัก": return card.love || "";
        case "การงาน": return card.work || "";
        case "การเงิน": return card.money || "";
        case "สุขภาพ": return card.health || "";
        default: return card.love || card.work || card.money || card.health || "";
    }
}

// ========== Get Advice ==========
function getAdvice(cardIndex) {
    const card = tarotDetailed[cardIndex];
    if (!card) return "";
    return card.advice || "";
}

// ========== Get Full Meaning ==========
function getFullMeaning(cardIndex) {
    const card = tarotDetailed[cardIndex];
    if (!card) return "";
    return card.meaning_full || "";
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
        cardsData.push({ ...cardData, index: idx });

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

    // Question
    if (question) {
        html += `<div class="prediction-question">"${question}"</div>`;
    }

    // Topic badge
    if (topic !== "ทั่วไป") {
        html += `<div class="topic-badge">${getTopicIcon(topic)} ${topic}</div>`;
    }

    // Spread info
    html += `<div class="prediction-spread">รูปแบบ: ${spreadKey}</div>`;

    // Cards
    cardsData.forEach((card, i) => {
        const cardName = card.name || "Unknown";
        const cardIndex = card.index;
        const meaning = card.meaning || "";
        const meaningFull = getFullMeaning(cardIndex);
        const contextMeaning = getContextMeaning(cardIndex, topic);
        const advice = getAdvice(cardIndex);
        const specialCard = getSpecialCardMessage(cardName);

        html += `
            <div class="prediction-card">
                <div class="card-position-title">▸ ${positions[i]} (${descriptions[i]})</div>
                <div class="card-prompt">${prompts[i]} — <span class="card-name-highlight">${cardName}</span></div>
                
                <div class="meaning-section">
                    <div class="meaning-label">📖 ความหมาย:</div>
                    <div class="meaning-text">${meaningFull || meaning}</div>
                </div>
                
                ${contextMeaning ? `
                <div class="context-section">
                    <div class="context-label">💡 ความหมายในบริบท (${topic}):</div>
                    <div class="context-text">${contextMeaning}</div>
                </div>
                ` : ''}
                
                ${advice ? `
                <div class="advice-section">
                    <div class="advice-label">💫 คำแนะนำ:</div>
                    <div class="advice-text">${advice}</div>
                </div>
                ` : ''}
                
                ${specialCard ? `
                <div class="special-card">
                    <span class="special-icon">⭐</span>
                    <span class="special-text">${specialCard}</span>
                </div>
                ` : ''}
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

// ========== Get Topic Icon ==========
function getTopicIcon(topic) {
    const icons = {
        "ความรัก": "❤️",
        "การงาน": "💼",
        "การเงิน": "💰",
        "สุขภาพ": "🏥",
        "การเดินทาง": "✈️"
    };
    return icons[topic] || "🔮";
}

// ========== Get Special Card Message ==========
function getSpecialCardMessage(cardName) {
    const specialCards = {
        "The Star": "ไพ่ดวงดาวส่องแสงนำทาง ความหวังและความสุขกำลังจะมาถึง",
        "The Sun": "ไพ่ดวงอาทิตย์ส่องแสง ความสุขและความสำเร็จกำลังจะมาถึง",
        "Death": "แม้จะมีการเปลี่ยนแปลงครั้งใหญ่ แต่นั่นคือจุดเริ่มต้นของสิ่งใหม่ๆ ที่ดีกว่าเดิม",
        "The Tower": "แม้จะมีการเปลี่ยนแปลงกะทันหัน แต่นั่นคือโอกาสที่จะเริ่มต้นใหม่",
        "The Fool": "ไพ่ The Fool บอกให้ก้าวออกมาจากกรอบเดิมๆ ลองสิ่งใหม่ๆ ดูบ้าง",
        "The Lovers": "ไพ่ The Lovers บ่งบอกถึงความรักและการตัดสินใจที่สำคัญ",
        "Strength": "ไพ่ Strength บ่งบอกถึงความแข็งแกร่งภายใน คุณมีพลังพอที่จะฝ่าฟันทุกอย่าง",
        "The World": "ไพ่ The World บ่งบอกถึงความสำเร็จที่สมบูรณ์ ชีวิตเติมเต็ม",
        "Wheel of Fortune": "ไพ่ Wheel of Fortune บ่งบอกถึงโชคชะตาที่กำลังจะเปลี่ยนไปในทางที่ดี"
    };
    return specialCards[cardName] || "";
}

// ========== Generate Summary ==========
function generateSummary(cardsData, topic, question, spreadKey) {
    const names = cardsData.map(c => c.name || "");
    const indices = cardsData.map(c => c.index);

    // Count positive/negative cards per topic
    let positiveCount = 0;
    let negativeCount = 0;
    let specialCardsFound = [];

    indices.forEach((idx, i) => {
        const card = tarotDetailed[String(idx)];
        if (!card) return;

        const contextMeaning = getContextMeaning(idx, topic);
        const advice = getAdvice(idx);

        // Check for positive/negative indicators
        const positiveWords = ["สำเร็จ", "ดี", "สุข", "สมหวัง", "รัก", "มั่นคง", "มั่งมี", "ชัยชนะ", "เติบโต", "หวัง", "มั่งคั่ง", "ร่ำรวย"];
        const negativeWords = ["สูญเสีย", "เศร้า", "เครียด", "กังวล", "อุปสรรค", "เบื่อ", "เจ็บ", "เลิก", "ผิดหวัง", "ลำบาก", "ทุกข์"];

        if (positiveWords.some(w => contextMeaning.includes(w))) positiveCount++;
        if (negativeWords.some(w => contextMeaning.includes(w))) negativeCount++;

        // Find special cards
        const specialMsg = getSpecialCardMessage(names[i]);
        if (specialMsg) {
            specialCardsFound.push({ name: names[i], message: specialMsg });
        }
    });

    // Build summary
    let summary = '';

    // Topic-specific summary
    if (topic === "ความรัก") {
        summary += buildLoveSummary(positiveCount, negativeCount, cardsData);
    } else if (topic === "การงาน") {
        summary += buildWorkSummary(positiveCount, negativeCount, cardsData);
    } else if (topic === "การเงิน") {
        summary += buildMoneySummary(positiveCount, negativeCount, cardsData);
    } else if (topic === "สุขภาพ") {
        summary += buildHealthSummary(positiveCount, negativeCount, cardsData);
    } else {
        summary += buildGeneralSummary(positiveCount, negativeCount, cardsData);
    }

    // Add special cards message
    if (specialCardsFound.length > 0) {
        summary += '<div class="special-cards-section">';
        summary += '<div class="special-cards-title">⭐ ไพ่พิเศษ:</div>';
        specialCardsFound.forEach(sc => {
            summary += `<div class="special-card-item"><strong>${sc.name}:</strong> ${sc.message}</div>`;
        });
        summary += '</div>';
    }

    // Add overall advice
    summary += '<div class="overall-advice">';
    summary += '<div class="overall-advice-title">🔮 คำแนะนำโดยรวม:</div>';
    if (positiveCount > negativeCount) {
        summary += '<div class="overall-advice-text">ไพ่บ่งบอกถึงทิศทางที่ดี สิ่งดีๆ กำลังจะเข้ามาในชีวิตของคุณ จงเชื่อมั่นและเดินหน้าต่อไป</div>';
    } else if (negativeCount > positiveCount) {
        summary += '<div class="overall-advice-text">ไพ่บ่งบอกว่าช่วงนี้อาจมีความท้าทาย แต่จงจำไว้ว่าทุกปัญหามีทางออก อดทนและสู้ต่อไป</div>';
    } else {
        summary += '<div class="overall-advice-text">ไพ่แสดงให้เห็นถึงความสมดุลในชีวิต มีทั้งสิ่งที่ดีและสิ่งที่ต้องระวัง จงใช้สติในการตัดสินใจ</div>';
    }
    summary += '</div>';

    return summary;
}

// ========== Build Love Summary ==========
function buildLoveSummary(pos, neg, cardsData) {
    let summary = '<div class="summary-topic">';
    summary += '<div class="topic-title">❤️ ด้านความรัก:</div>';
    
    if (pos > neg) {
        summary += '<div class="topic-text">ความสัมพันธ์ของคุณมีแนวโน้มที่ดี มีโอกาสเติบโตในทิศทางที่ดี ความรักที่มีอยู่จะนำพาไปสู่ความสุข</div>';
    } else if (neg > pos) {
        summary += '<div class="topic-text">ความสัมพันธ์ของคุณอาจมีอุปสรรคบ้าง แต่เป็นโอกาสที่จะได้ทบทวนความรู้สึกของตัวเองและคนรอบข้าง</div>';
    } else {
        summary += '<div class="topic-text">ความสัมพันธ์ของคุณอยู่ในช่วงสมดุล มีทั้งสิ่งที่ดีและสิ่งที่ต้องระวัง จงเปิดใจคุยกัน</div>';
    }
    
    summary += '</div>';
    return summary;
}

// ========== Build Work Summary ==========
function buildWorkSummary(pos, neg, cardsData) {
    let summary = '<div class="summary-topic">';
    summary += '<div class="topic-title">💼 ด้านการงาน:</div>';
    
    if (pos > neg) {
        summary += '<div class="topic-text">การทำงานของคุณมีแนวโน้มที่ดี มีโอกาสประสบความสำเร็จสูง ควรคว้าโอกาสที่เข้ามา</div>';
    } else if (neg > pos) {
        summary += '<div class="topic-text">การทำงานของคุณอาจมีอุปสรรคบ้าง แต่ถ้าอดทนและแก้ไขปัญหา จะผ่านไปได้</div>';
    } else {
        summary += '<div class="topic-text">การทำงานของคุณอยู่ในช่วงสมดุล มีทั้งสิ่งที่ดีและสิ่งที่ต้องระวัง จงใช้สติในการทำงาน</div>';
    }
    
    summary += '</div>';
    return summary;
}

// ========== Build Money Summary ==========
function buildMoneySummary(pos, neg, cardsData) {
    let summary = '<div class="summary-topic">';
    summary += '<div class="topic-title">💰 ด้านการเงิน:</div>';
    
    if (pos > neg) {
        summary += '<div class="topic-text">การเงินของคุณมีแนวโน้มที่ดี มีโอกาสได้รับเงินก้อนโต หรือการลงทุนที่คุ้มค่า</div>';
    } else if (neg > pos) {
        summary += '<div class="topic-text">การเงินของคุณอาจมีปัญหาบ้าง แต่ถ้าจัดการดีๆ จะผ่านไปได้ ควรวางแผนการเงินให้ดี</div>';
    } else {
        summary += '<div class="topic-text">การเงินของคุณอยู่ในช่วงสมดุล มีทั้งรายรับและรายจ่ายที่สมเหตุสมผล</div>';
    }
    
    summary += '</div>';
    return summary;
}

// ========== Build Health Summary ==========
function buildHealthSummary(pos, neg, cardsData) {
    let summary = '<div class="summary-topic">';
    summary += '<div class="topic-title">🏥 ด้านสุขภาพ:</div>';
    
    if (pos > neg) {
        summary += '<div class="topic-text">สุขภาพของคุณมีแนวโน้มที่ดี ร่างกายแข็งแรง แต่ยังต้องดูแลตัวเองต่อไป</div>';
    } else if (neg > pos) {
        summary += '<div class="topic-text">สุขภาพของคุณอาจมีปัญหาบ้าง ควรพักผ่อนให้เพียงพอ และดูแลตัวเองให้ดี</div>';
    } else {
        summary += '<div class="topic-text">สุขภาพของคุณอยู่ในช่วงสมดุล แต่ยังต้องดูแลตัวเองอย่างสม่ำเสมอ</div>';
    }
    
    summary += '</div>';
    return summary;
}

// ========== Build General Summary ==========
function buildGeneralSummary(pos, neg, cardsData) {
    let summary = '<div class="summary-topic">';
    summary += '<div class="topic-title">🔮 ภาพรวม:</div>';
    
    if (pos > neg) {
        summary += '<div class="topic-text">ไพ่บ่งบอกถึงทิศทางที่ดี สิ่งดีๆ กำลังจะเข้ามาในชีวิตของคุณ จงเชื่อมั่นและเดินหน้าต่อไป</div>';
    } else if (neg > pos) {
        summary += '<div class="topic-text">ไพ่บ่งบอกว่าช่วงนี้อาจมีความท้าทาย แต่จงจำไว้ว่าทุกปัญหามีทางออก อดทนและสู้ต่อไป</div>';
    } else {
        summary += '<div class="topic-text">ไพ่แสดงให้เห็นถึงความสมดุลในชีวิต มีทั้งสิ่งที่ดีและสิ่งที่ต้องระวัง จงใช้สติในการตัดสินใจ</div>';
    }
    
    summary += '</div>';
    return summary;
}
