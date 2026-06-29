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
    const spread = SPREADS[spreadKey];
    const positions = spread.positions;
    const descriptions = spread.descriptions;
    
    // Collect card data
    const cardInfos = cardsData.map((card, i) => ({
        name: card.name || "Unknown",
        index: card.index,
        position: positions[i] || "",
        description: descriptions[i] || "",
        meaning: getFullMeaning(card.index) || card.meaning || "",
        contextMeaning: getContextMeaning(card.index, topic) || "",
        advice: getAdvice(card.index) || "",
        specialMessage: getSpecialCardMessage(card.name) || ""
    }));

    // Start summary
    let summary = '';
    
    // Header
    summary += `<div class="summary-intro">`;
    summary += `<div class="summary-header">จากไพ่ ${cardsData.length} ใบ ที่จั่วได้ในรูปแบบ ${spreadKey} บ่งบอกเรื่องราวว่า:</div>`;
    summary += `</div>`;

    // Card-by-card story
    summary += `<div class="summary-cards-story">`;
    cardInfos.forEach((card, i) => {
        summary += `<div class="card-story-item">`;
        summary += `<div class="card-story-title">▸ ${card.position} (ไพ่ ${card.name}):</div>`;
        
        // Generate context-aware sentence
        const storySentence = generateCardStory(card, topic, i, cardInfos.length);
        summary += `<div class="card-story-text">${storySentence}</div>`;
        
        summary += `</div>`;
    });
    summary += `</div>`;

    // Divider
    summary += `<div class="summary-divider">━━━━━━━━━━━━━━━━━━━━━━━</div>`;

    // Main story
    summary += `<div class="summary-main-story">`;
    summary += `<div class="main-story-title">🔮 บทสรุปเรื่องราว:</div>`;
    summary += generateMainStory(cardInfos, topic, spreadKey);
    summary += `</div>`;

    // Overall advice
    summary += `<div class="summary-advice-section">`;
    summary += `<div class="advice-title">💫 คำแนะนำจากไพ่:</div>`;
    summary += generateOverallAdvice(cardInfos, topic);
    summary += `</div>`;

    // Special cards
    const specialCards = cardInfos.filter(c => c.specialMessage);
    if (specialCards.length > 0) {
        summary += `<div class="special-cards-section">`;
        summary += `<div class="special-cards-title">⭐ ไพ่สำคัญ:</div>`;
        specialCards.forEach(sc => {
            summary += `<div class="special-card-item"><strong>${sc.name}:</strong> ${sc.specialMessage}</div>`;
        });
        summary += `</div>`;
    }

    return summary;
}

// ========== Generate Card Story ==========
function generateCardStory(card, topic, index, totalCards) {
    const name = card.name;
    const meaning = card.meaning;
    const contextMeaning = card.contextMeaning;
    const position = card.position;
    
    // Position-specific sentence starters
    const starters = {
        "อดีต": "ในอดีต ไพ่ใบนี้บ่งบอกว่า",
        "ปัจจุบัน": "ณ ตอนนี้ ไพ่ใบนี้กำลังบอกว่า",
        "อนาคต": "ในอนาคตอันใกล้ ไพ่ใบนี้บ่งบอกว่า",
        "สถานการณ์": "สถานการณ์ปัจจุบันของคุณคือ",
        "อุปสรรค์": "อุปสรรค์ที่ต้องเผชิญคือ",
        "คำแนะนำ": "ไพ่แนะนำว่า",
        "คุณ": "ตัวคุณเองกำลังรู้สึกว่า",
        "คู่ของคุณ": "อีกฝ่ายกำลังรู้สึกว่า",
        "ความสัมพันธ์": "ความสัมพันธ์ของคุณกำลังดำเนินไปในทิศทาง",
        "ผลลัพธ์": "ผลลัพธ์สุดท้ายจะเป็น",
        "ปัญหา": "ปัญหาหลักที่ต้องแก้ไขคือ",
        "โอกาส": "โอกาสที่มีอยู่คือ",
        "ความรู้สึกคุณ": "ลึกๆ แล้วคุณรู้สึกว่า",
        "ความรู้สึกอีกฝ่าย": "อีกฝ่ายกำลังรู้สึกว่า",
        "อนาคตความสัมพันธ์": "ความสัมพันธ์จะไปในทิศทาง",
        "สถานการณ์งาน": "สถานการณ์การทำงานตอนนี้คือ",
        "สิ่งที่ควรรู้": "สิ่งสำคัญที่ควรรู้คือ",
        "อุปสรรค์/ความท้าทาย": "อุปสรรค์และความท้าทายคือ",
        "จิตใจที่ซ่อนอยู่": "สิ่งที่ซ่อนอยู่ในใจคือ",
        "สิ่งที่กำลังจะเกิด": "สิ่งที่กำลังจะเกิดขึ้นคือ",
        "อนาคตใกล้": "อนาคตอันใกล้จะเป็น",
        "อนาคตไกล": "อนาคตไกลจะเป็น",
        "ทัศนคติของคุณ": "วิธีที่คุณมองปัญหาคือ",
        "สภาพแวดล้อม": "สภาพแวดล้อมและคนรอบข้าง",
        "ความหวัง/ความกลัว": "ความหวังและความกลัวของคุณคือ",
        "ผลลัพธ์สุดท้าย": "ผลลัพธ์สุดท้ายจะเป็น"
    };
    
    // Find matching starter
    let starter = "";
    for (const [key, value] of Object.entries(starters)) {
        if (position.includes(key)) {
            starter = value;
            break;
        }
    }
    
    // Default starter if no match
    if (!starter) {
        starter = "ไพ่ใบนี้บ่งบอกว่า";
    }
    
    // Use context meaning if available, otherwise use general meaning
    const mainMeaning = contextMeaning || meaning;
    
    // Generate full sentence
    if (topic === "ทั่วไป") {
        return `${starter} ${mainMeaning}`;
    } else {
        return `${starter} ${mainMeaning}`;
    }
}

// ========== Generate Main Story ==========
function generateMainStory(cardInfos, topic, spreadKey) {
    let story = '<div class="main-story-text">';
    
    // Topic-specific opening
    const topicOpenings = {
        "ความรัก": "เรื่องราวความรักของคุณ ",
        "การงาน": "เส้นทางการทำงานของคุณ ",
        "การเงิน": "สถานะการเงินของคุณ ",
        "สุขภาพ": "สุขภาพของคุณ ",
        "การเดินทาง": "การเดินทางของคุณ ",
        "ทั่วไป": "ชีวิตของคุณ "
    };
    
    story += topicOpenings[topic] || "ชีวิตของคุณ ";
    
    // Generate story based on positions
    if (spreadKey.includes("อดีต/ปัจจุบัน/อนาคต")) {
        // Past/Present/Future spread
        const past = cardInfos[0];
        const present = cardInfos[1];
        const future = cardInfos[2];
        
        story += `เริ่มต้นจาก${past.position} ไพ่ ${past.name} บ่งบอกว่า${past.contextMeaning || past.meaning} `;
        story += `มาสู่${present.position} ไพ่ ${present.name} กำลังบอกว่า${present.contextMeaning || present.meaning} `;
        story += `และจะนำไปสู่${future.position} ไพ่ ${future.name} บ่งบอกว่า${future.contextMeaning || future.meaning}`;
    } else if (spreadKey.includes("ความรัก")) {
        // Love spread
        const self = cardInfos[0];
        const partner = cardInfos[1];
        const future = cardInfos[2];
        
        story += `เริ่มจากตัวคุณเอง ไพ่ ${self.name} บ่งบอกว่า${self.contextMeaning || self.meaning} `;
        story += `ส่วนอีกฝ่าย ไพ่ ${partner.name} กำลังรู้สึกว่า${partner.contextMeaning || partner.meaning} `;
        story += `และในอนาคต ไพ่ ${future.name} บ่งบอกว่า${future.contextMeaning || future.meaning}`;
    } else if (spreadKey.includes("การงาน")) {
        // Work spread
        const situation = cardInfos[0];
        const problem = cardInfos[1];
        const opportunity = cardInfos[2];
        const result = cardInfos[3];
        
        story += `เริ่มจากสถานการณ์ ไพ่ ${situation.name} บ่งบอกว่า${situation.contextMeaning || situation.meaning} `;
        story += `ปัญหาที่ต้องแก้ไขคือ ไพ่ ${problem.name} บ่งบอกว่า${problem.contextMeaning || problem.meaning} `;
        story += `โอกาสที่มีอยู่คือ ไพ่ ${opportunity.name} บ่งบอกว่า${opportunity.contextMeaning || opportunity.meaning} `;
        story += `และผลลัพธ์จะเป็น ไพ่ ${result.name} บ่งบอกว่า${result.contextMeaning || result.meaning}`;
    } else {
        // General - connect all cards
        cardInfos.forEach((card, i) => {
            if (i === 0) {
                story += `เริ่มจาก${card.position} ไพ่ ${card.name} บ่งบอกว่า${card.contextMeaning || card.meaning} `;
            } else if (i === cardInfos.length - 1) {
                story += `และสุดท้าย${card.position} ไพ่ ${card.name} บ่งบอกว่า${card.contextMeaning || card.meaning}`;
            } else {
                story += `มาสู่${card.position} ไพ่ ${card.name} กำลังบอกว่า${card.contextMeaning || card.meaning} `;
            }
        });
    }
    
    // Add overall interpretation
    story += `<br><br>`;
    
    // Count positive/negative
    const positiveWords = ["สำเร็จ", "ดี", "สุข", "สมหวัง", "รัก", "มั่นคง", "มั่งมี", "ชัยชนะ", "เติบโต", "หวัง", "มั่งคั่ง", "ร่ำรวย", "สดใส"];
    const negativeWords = ["สูญเสีย", "เศร้า", "เครียด", "กังวล", "อุปสรรค", "เบื่อ", "เจ็บ", "เลิก", "ผิดหวัง", "ลำบาก", "ทุกข์", "ยากลำบาก"];
    
    let positiveCount = 0;
    let negativeCount = 0;
    
    cardInfos.forEach(card => {
        const meaning = card.contextMeaning || card.meaning;
        if (positiveWords.some(w => meaning.includes(w))) positiveCount++;
        if (negativeWords.some(w => meaning.includes(w))) negativeCount++;
    });
    
    // Overall interpretation
    story += `<strong>โดยภาพรวม:</strong> `;
    
    if (positiveCount > negativeCount) {
        story += `ไพ่ทั้งหมดบ่งบอกว่าเส้นทางของคุณมีแนวโน้มที่ดี สิ่งที่คุณกำลังเผชิญอยู่จะนำไปสู่ผลลัพธ์ที่น่าพอใจ จงเชื่อมั่นในเส้นทางที่เลือกและเดินหน้าต่อไป`;
    } else if (negativeCount > positiveCount) {
        story += `ไพ่ทั้งหมดบ่งบอกว่าช่วงนี้อาจมีความท้าทายและอุปสรรคบ้าง แต่จงจำไว้ว่าทุกปัญหามีทางออก อดทนและสู้ต่อไป แล้วจะผ่านไปได้`;
    } else {
        story += `ไพ่ทั้งหมดบ่งบอกถึงความสมดุล มีทั้งสิ่งที่ดีและสิ่งที่ต้องระวัง จงใช้สติในการตัดสินใจและไม่ประมาท`;
    }
    
    story += '</div>';
    return story;
}

// ========== Generate Overall Advice ==========
function generateOverallAdvice(cardInfos, topic) {
    let advice = '<div class="overall-advice-text">';
    
    // Collect all advices
    const advices = cardInfos.map(c => c.advice).filter(a => a);
    
    // Topic-specific advice intro
    const topicIntros = {
        "ความรัก": "จากไพ่ทั้งหมด คำแนะนำในเรื่องความรักคือ",
        "การงาน": "จากไพ่ทั้งหมด คำแนะนำในเรื่องการงานคือ",
        "การเงิน": "จากไพ่ทั้งหมด คำแนะนำในเรื่องการเงินคือ",
        "สุขภาพ": "จากไพ่ทั้งหมด คำแนะนำในเรื่องสุขภาพคือ",
        "การเดินทาง": "จากไพ่ทั้งหมด คำแนะนำในการเดินทางคือ",
        "ทั่วไป": "จากไพ่ทั้งหมด คำแนะนำคือ"
    };
    
    advice += topicIntros[topic] || "จากไพ่ทั้งหมด คำแนะนำคือ ";
    advice += '<br><br>';
    
    // Main advice - pick the most relevant one
    if (advices.length > 0) {
        // Find the most common advice theme
        const mainAdvice = advices[0];
        advice += `<em>"${mainAdvice}"</em>`;
    }
    
    // Add supporting advice
    if (advices.length > 1) {
        advice += '<br><br>';
        advice += 'นอกจากนี้ ไพ่ยังเสริมว่า ';
        const supportingAdvice = advices.slice(1, 3).join(' และ ');
        advice += supportingAdvice;
    }
    
    // Add topic-specific conclusion
    advice += '<br><br>';
    
    const topicConclusions = {
        "ความรัก": "จงเชื่อมั่นในความรัก เปิดใจรับความรักที่เข้ามา และดูแลความสัมพันธ์นี้ให้ดี เพราะไพ่บ่งบอกว่าคุณกำลังอยู่บนเส้นทางที่ถูกต้อง",
        "การงาน": "จงมุ่งมั่นในการทำงาน ใช้ความสามารถของตัวเองให้เต็มที่ และอย่ากลัวการเปลี่ยนแปลง เพราะไพ่บ่งบอกว่าความสำเร็จรออยู่ข้างหน้า",
        "การเงิน": "จงบริหารจัดการการเงินอย่างรอบคอบ อย่ารีบร้อนตัดสินใจ และวางแผนการเงินให้ดี เพราะไพ่บ่งบอกว่าความมั่นคงจะมาถึง",
        "สุขภาพ": "จงดูแลสุขภาพของตัวเอง อย่าละเลยสัญญาณเตือน และพักผ่อนให้เพียงพอ เพราะไพ่บ่งบอกว่าสุขภาพที่ดีจะนำพาไปสู่ชีวิตที่มีความสุข",
        "การเดินทาง": "จงเปิดใจรับการเดินทาง อย่ากลัวสิ่งใหม่ๆ และเตรียมตัวให้ดี เพราะไพ่บ่งบอกว่าการเดินทางจะนำพาไปสู่ประสบการณ์ที่มีค่า",
        "ทั่วไป": "จงเชื่อมั่นในตัวเอง ใช้สติในการตัดสินใจ และไม่กลัวการเปลี่ยนแปลง เพราะไพ่บ่งบอกว่าทุกอย่างจะดีขึ้น"
    };
    
    advice += topicConclusions[topic] || topicConclusions["ทั่วไป"];
    
    advice += '</div>';
    return advice;
}
