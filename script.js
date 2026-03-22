// 1. ALL QUESTIONS DATA (SOCIAL & NATURAL)
const allQuestions = [
    // --- GEOGRAPHY (50+ Questions) ---
    { cat: "Geography", q: "Which is the highest mountain in Ethiopia?", options: ["Batu", "Ras Dashen", "Guge", "Chilalo"], a: "Ras Dashen" },
    { cat: "Geography", q: "Which lake is the source of the Blue Nile?", options: ["Ziway", "Abaya", "Tana", "Chamo"], a: "Tana" },
    { cat: "Geography", q: "On a topographic map, V-shaped contour lines pointing uphill indicate a:", options: ["Valley", "Ridge", "Cliff", "Plain"], a: "Valley" },
    { cat: "Geography", q: "Which map scale is the largest?", options: ["1:500,000", "1:250,000", "1:50,000", "1:1,000,000"], a: "1:50,000" },
    { cat: "Geography", q: "The ratio between map distance and ground distance is called:", options: ["Legend", "Scale", "Grid", "Projection"], a: "Scale" },
    { cat: "Geography", q: "Which tool is used to measure irregular lines on a map?", options: ["Ruler", "Opisometer", "Protractor", "Compass"], a: "Opisometer" },
    { cat: "Geography", q: "The largest physiographic region of Ethiopia is:", options: ["The Rift Valley", "The Southeastern Highlands", "The Western Highlands", "The Lowlands"], a: "The Western Highlands" },
    { cat: "Geography", q: "Which geological era is known as the 'Age of Reptiles'?", options: ["Cenozoic", "Mesozoic", "Paleozoic", "Precambrian"], a: "Mesozoic" },
    { cat: "Geography", q: "The traditional climate zone between 1500m and 2300m is:", options: ["Kolla", "Dega", "Woina Dega", "Bereha"], a: "Woina Dega" },
    { cat: "Geography", q: "Which river is the only one that flows eastward into the Afar depression?", options: ["Abbay", "Awash", "Omo", "Genale"], a: "Awash" },
    { cat: "Geography", q: "The 'Inland Drainage System' of Ethiopia includes which river?", options: ["Tekeze", "Baro", "Omo-Gibe", "Blue Nile"], a: "Omo-Gibe" },
    { cat: "Geography", q: "Which factor most influences the climate of Ethiopia?", options: ["Latitude", "Altitude", "Cloud cover", "Ocean currents"], a: "Altitude" },
    { cat: "Geography", q: "The most densely populated part of Ethiopia is the:", options: ["North", "South-Central", "East", "West"], a: "South-Central" },
    { cat: "Geography", q: "Which crop is Ethiopia's primary export item?", options: ["Teff", "Coffee", "Wheat", "Maize"], a: "Coffee" },
    { cat: "Geography", q: "A 'Pyramid' with a wide base and narrow top indicates:", options: ["Low birth rate", "High birth rate", "Aging population", "Slow growth"], a: "High birth rate" },
    { cat: "Geography", q: "The most common type of farming in the Ethiopian highlands is:", options: ["Shift cultivation", "Mixed farming", "Plantation", "State farming"], a: "Mixed farming" },
    { cat: "Geography", q: "The clearing of forests for agriculture is called:", options: ["Afforestation", "Deforestation", "Reforestation", "Terracing"], a: "Deforestation" },
    { cat: "Geography", q: "Which soil type is also known as 'Black Cotton Soil'?", options: ["Nitosols", "Vertisols", "Fluvisols", "Lithosols"], a: "Vertisols" },
    { cat: "Geography", q: "The 'Great Rift Valley' was formed by which process?", options: ["Volcanic eruption", "Faulting", "Folding", "Erosion"], a: "Faulting" },
    { cat: "Geography", q: "Which of the following is a renewable energy source in Ethiopia?", options: ["Coal", "Natural Gas", "Hydroelectric power", "Oil"], a: "Hydroelectric power" },
    { cat: "Geography", q: "On a map, close contour lines indicate:", options: ["Flat plain", "Steep slope", "Deep lake", "Desert"], a: "Steep slope" },
    { cat: "Geography", q: "Which type of rainfall is most common in the Ethiopian highlands?", options: ["Cyclonic", "Relief/Orograhic", "Convectional", "Frontal"], a: "Relief/Orograhic" },
    { cat: "Geography", q: "The instrument used to measure the direction of wind is:", options: ["Anemometer", "Barometer", "Wind Vane", "Hygrometer"], a: "Wind Vane" },
    { cat: "Geography", q: "Which soil type is known for being red and highly acidic, common in Western Ethiopia?", options: ["Nitosols", "Vertisols", "Fluvisols", "Cambisols"], a: "Nitosols" },
    { cat: "Geography", q: "The major cause of global warming is the increase of:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: "Carbon dioxide" },
    { cat: "Geography", q: "Which sub-sector of agriculture contributes the most to Ethiopia's GDP?", options: ["Livestock", "Crop production", "Forestry", "Fishery"], a: "Crop production" },
    { cat: "Geography", q: "The point where the sun is directly overhead at the Equator is called:", options: ["Solstice", "Equinox", "Aphelion", "Perihelion"], a: "Equinox" },
    { cat: "Geography", q: "Which natural vegetation is dominant in the Ethiopian Lowlands?", options: ["Tropical Rainforest", "Savanna Grassland", "Desert Scrub", "Coniferous Forest"], a: "Savanna Grassland" },
    { cat: "Geography", q: "The 'Dega' climate zone is generally suitable for growing:", options: ["Coffee", "Barley and Wheat", "Sugarcane", "Cotton"], a: "Barley and Wheat" },
    { cat: "Geography", q: "What is the standard time zone of Ethiopia compared to GMT?", options: ["GMT+1", "GMT+2", "GMT+3", "GMT+4"], a: "GMT+3" },
    { cat: "Geography", q: "The process of moving soil and rocks by wind or water is:", options: ["Weathering", "Erosion", "Sedimentation", "Solidification"], a: "Erosion" },
    { cat: "Geography", q: "Which of the following is a major characteristic of the Cenozoic era in Ethiopia?", options: ["Formation of basement rocks", "Formation of the Rift Valley", "Denudation and peneplanation", "Marine transgression"], a: "Formation of the Rift Valley" },
    { cat: "Geography", q: "The 'Kolla' climate zone is generally found at an altitude of:", options: ["Below 500m", "500m to 1500m", "1500m to 2300m", "Above 3300m"], a: "500m to 1500m" },
    { cat: "Geography", q: "Which river basin is the largest in terms of annual water discharge in Ethiopia?", options: ["Abbay", "Baro-Akobo", "Omo-Gibe", "Wabe Shebelle"], a: "Abbay" },
    { cat: "Geography", q: "The ratio of the number of people to the total arable land is called:", options: ["Crude density", "Agricultural density", "Physiological density", "Economic density"], a: "Physiological density" },
    { cat: "Geography", q: "On a map, a line that connects points of equal temperature is known as:", options: ["Isobar", "Isotherm", "Isohyet", "Isoneph"], a: "Isotherm" },
    { cat: "Geography", q: "Which geological process is responsible for the formation of the Ethiopian Highlands?", options: ["Faulting", "Folding", "Uplifting", "Sedimentation"], a: "Uplifting" },
    { cat: "Geography", q: "The most significant source of moisture for the summer (Kiremt) rain in Ethiopia is:", options: ["Indian Ocean", "Atlantic Ocean", "Red Sea", "Mediterranean Sea"], a: "Atlantic Ocean" },
    { cat: "Geography", q: "Which of the following is a typical example of a 'Highland Lake' in Ethiopia?", options: ["Lake Shala", "Lake Tana", "Lake Abijatta", "Lake Langano"], a: "Lake Tana" },
    { cat: "Geography", q: "The main objective of 'Terracing' in the Ethiopian highlands is to:", options: ["Increase soil acidity", "Prevent soil erosion", "Increase wind speed", "Encourage deforestation"], a: "Prevent soil erosion" },
    { cat: "Geography", q: "A map with a scale of 1:25,000 is categorized as a:", options: ["Small scale map", "Medium scale map", "Large scale map", "Wall map"], a: "Large scale map" },
    { cat: "Geography", q: "Which Ethiopian river basin is shared with Somalia and flows into the Indian Ocean?", options: ["Awash", "Wabe Shebelle", "Tekeze", "Baro"], a: "Wabe Shebelle" },
    { cat: "Geography", q: "The process of 'Solar Radiation' reaching the Earth's surface is called:", options: ["Insulation", "Insolation", "Conduction", "Convection"], a: "Insolation" },
    { cat: "Geography", q: "Which region in Ethiopia is most affected by frequent droughts?", options: ["Western Highlands", "The Lowlands", "Central Highlands", "Southern Highlands"], a: "The Lowlands" },
    { cat: "Geography", q: "The 'Age of Mammals' refers to which geological era?", options: ["Pre-Cambrian", "Paleozoic", "Mesozoic", "Cenozoic"], a: "Cenozoic" },
    { cat: "Geography", q: "The point where the crust of the Earth breaks during an earthquake is the:", options: ["Epicenter", "Focus", "Fault line", "Core"], a: "Focus" },
    { cat: "Geography", q: "Which type of settlement is most common in the rural highlands of Ethiopia?", options: ["Nucleated", "Dispersed", "Linear", "Urban"], a: "Dispersed" },
    { cat: "Geography", q: "The method of representing the 3D Earth on a 2D flat paper is:", options: ["Map Projection", "Map Scale", "Generalization", "Orientation"], a: "Map Projection" },
    { cat: "Geography", q: "Which of the following is a perennial river (flows all year round) in Ethiopia?", options: ["Abbay", "Mile", "Borkena", "Angereb"], a: "Abbay" },
    { cat: "Geography", q: "The 'Greenhouse Effect' is primarily caused by which gas?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], a: "Carbon Dioxide" },
    { cat: "Geography", q: "What is the primary export destination for Ethiopian coffee?", options: ["China", "Germany", "Japan", "USA"], a: "Germany" },

    // --- HISTORY ---
    { cat: "History", q: "Who led Ethiopia at the Battle of Adwa?", options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie"], a: "Menelik II" },
    { cat: "History", q: "In which year was 'Land to the Tiller' proclaimed?", options: ["1960", "1974", "1975", "1991"], a: "1975" },
    { cat: "History", q: "The process of modern Ethiopian unification began during the reign of:", options: ["Menelik II", "Tewodros II", "Yohannes IV", "Haile Selassie I"], a: "Tewodros II" },
    { cat: "History", q: "Which battle in 1896 ensured Ethiopia's independence from Italian colonialism?", options: ["Dogali", "Adwa", "Metemma", "Gura"], a: "Adwa" },
    { cat: "History", q: "The 'Scramble for Africa' was formalized at the Berlin Conference in:", options: ["1884", "1890", "1900", "1870"], a: "1884" },

    // --- APTITUDE ---
    { cat: "Aptitude", q: "Complete the series: 5, 10, 20, 40, ...?", options: ["50", "60", "80", "100"], a: "80" },
    { cat: "Aptitude", q: "WATER is to ICE as STEAM is to: ?", options: ["Fire", "Gas", "Water", "Cloud"], a: "Water" },
    { cat: "Aptitude", q: "What is 15% of 200?", options: ["20", "25", "30", "35"], a: "30" },

    // --- ENGLISH ---
    { cat: "English", q: "I _______ my homework before my father arrived last night.", options: ["finish", "have finished", "had finished", "finishing"], a: "had finished" },
    { cat: "English", q: "If I _______ enough money, I would buy a new laptop.", options: ["have", "had", "will have", "has"], a: "had" },

    // --- MATHEMATICS ---
    { cat: "Mathematics", q: "What is the 10th term of the sequence: 2, 5, 8, 11...?", options: ["29", "30", "32", "27"], a: "29" },
    { cat: "Mathematics", q: "What is the value of 5! (5 factorial)?", options: ["20", "60", "120", "100"], a: "120" },

    // --- ECONOMICS ---
    { cat: "Economics", q: "The basic economic problem facing all societies is:", options: ["Inflation", "Scarcity", "Unemployment", "Poverty"], a: "Scarcity" },
    { cat: "Economics", q: "Which market has only one seller?", options: ["Oligopoly", "Perfect Competition", "Monopoly", "Monopolistic"], a: "Monopoly" },

    // --- NATURAL SCIENCE (New Additions) ---
    { cat: "Biology", q: "The powerhouse of the cell is:", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"], a: "Mitochondria" },
    { cat: "Biology", q: "Which blood type is the universal donor?", options: ["A", "B", "AB", "O"], a: "O" },
    { cat: "Physics", q: "What is the unit of electric current?", options: ["Volt", "Ohm", "Ampere", "Watt"], a: "Ampere" },
    { cat: "Physics", q: "Force is equal to mass times:", options: ["Velocity", "Acceleration", "Time", "Distance"], a: "Acceleration" },
    { cat: "Chemistry", q: "What is the atomic symbol for Iron?", options: ["Ir", "Fe", "In", "I"], a: "Fe" },
    { cat: "Chemistry", q: "The chemical formula for Table Salt is:", options: ["H2O", "CO2", "NaCl", "HCl"], a: "NaCl" }
];

// 2. QUIZ LOGIC
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startApp() {
    let name = document.getElementById('userNameInput').value;
    let stream = document.getElementById('streamChoice').value;
    if (name.trim() === '' || stream === '') {
        alert('Please enter name and stream!');
        return;
    }
    localStorage.setItem('currentUser', name);
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('main-title').innerText = name + "'s Hub";
    switchStream(stream);
}

function switchStream(stream) {
    document.getElementById('social-subjects').style.display = (stream === 'social' ? 'flex' : 'none');
    document.getElementById('natural-subjects').style.display = (stream === 'natural' ? 'flex' : 'none');
}

function startQuiz(subject) {
    quizQuestions = allQuestions.filter(q => q.cat === subject);
    if (quizQuestions.length === 0) {
        alert("No questions found for " + subject);
        return;
    }
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('subject-selection-container').style.display = 'none'; // Hide all cards
    document.getElementById('quiz-box').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.q;
    let btnContainer = document.getElementById('btns-container');
    btnContainer.innerHTML = '';
    q.options.forEach(opt => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = "quiz-answer-btn"; // Add your CSS class
        btn.onclick = () => checkAnswer(opt, q.a);
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.margin = "10px 0";
        btn.style.padding = "10px";
        btnContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! Correct answer is: " + correct);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        alert("Finished! Your score: " + score + "/" + quizQuestions.length);
        cancelQuiz();
    }
}

function cancelQuiz() {
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('subject-selection-container').style.display = 'flex';
}
