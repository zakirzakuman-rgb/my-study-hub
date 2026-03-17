function startSubjectQuiz(subject) {
    let score = 0;
    
    if (subject === 'History') {
        let q1 = prompt("History: What year did the Battle of Adwa occur?\nA) 1888\nB) 1896");
        if (q1 && q1.toUpperCase() === "B") score++;

        let q2 = prompt("History: Who was the founder of the Aksumite Empire?\nA) Menelik I\nB) Zoskales");
        if (q2 && q2.toUpperCase() === "B") score++;
        
        alert("🤫, your History score is: " + score + "/2");

    } else if (subject === 'Geography') {
        let g1 = prompt("Geography: Which river is the longest in the world?\nA) Nile\nB) Amazon");
        if (g1 && g1.toUpperCase() === "A") score++;

        let g2 = prompt("Geography: What is the highest mountain in Africa?\nA) Ras Dashen\nB) Kilimanjaro");
        if (g2 && g2.toUpperCase() === "B") score++;
        
        alert("🤫, your Geography score is: " + score + "/2");

    } else if (subject === 'Economics') {
        let e1 = prompt("Economics: What is the main problem in Economics?\nA) Money\nB) Scarcity");
        if (e1 && e1.toUpperCase() === "B") score++;
        
        alert("🤫, your Economics score is: " + score + "/1");
    }
}
