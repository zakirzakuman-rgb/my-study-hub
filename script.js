let currentUser = "";

function checkLogin() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // ፓስዎርዱ እዚህ ጋር ይወሰናል
    if (name.trim() !== "" && pass === "zakir123") {
        currentUser = name;
        
        // የሎጊን ገጹን ደብቅ
        document.getElementById("login-page").style.display = "none";
        
        // የጥያቄ ገጹን አሳይ
        document.getElementById("main-quiz-page").style.display = "block";
        
        // እንኳን መጣህ መልዕክት
        document.getElementById("welcome-text").innerText = "Welcome, " + currentUser + "! Ready for the challenge?";
    } else {
        alert("Incorrect Username or Password!");
    }
