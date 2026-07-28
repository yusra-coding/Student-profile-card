// ==========================================
// DOM Selection (Using 8+ DOM methods/properties)
// ==========================================
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const subjectInput = document.getElementById("subjectInput");
const colorInput = document.getElementById("colorInput");
const bioInput = document.getElementById("bioInput");

const btnCreate = document.querySelector("#btnCreate");
const btnTheme = document.querySelector("#btnTheme");
const btnHide = document.querySelector("#btnHide");
const btnReset = document.querySelector("#btnReset");

const profileCard = document.getElementById("profileCard");
const dispName = document.getElementById("dispName");
const dispAge = document.getElementById("dispAge");
const dispSubject = document.getElementById("dispSubject");
const dispColor = document.getElementById("dispColor");
const dispBio = document.getElementById("dispBio");
const cardHeaderName = document.getElementById("cardHeaderName");
const cardGreeting = document.getElementById("cardGreeting");
const cardDate = document.getElementById("cardDate");
const charCount = document.getElementById("charCount");
const avatarImg = document.getElementById("avatarImg");

// ==========================================
// Task 1, 2, 3 & Bonus Challenges
// ==========================================
btnCreate.addEventListener("click", function() {
    // 1. Read Values from Inputs
    const nameVal = nameInput.value.trim();
    const ageVal = ageInput.value.trim();
    const subjectVal = subjectInput.value.trim();
    const colorVal = colorInput.value.trim();
    const bioVal = bioInput.value.trim();

    // 2. Validation Check
    if (nameVal === "" || ageVal === "" || subjectVal === "" || colorVal === "") {
        alert("Please fill all student details! ✨");
        return;
    }

    // 3. Update Text Content in Card
    dispName.textContent = nameVal;
    dispAge.textContent = ageVal;
    dispSubject.textContent = subjectVal;
    dispColor.textContent = colorVal;
    dispBio.textContent = bioVal ? `"${bioVal}"` : `"Curious student! ✨"`;
    cardHeaderName.textContent = nameVal;

    // 4. Update Custom Accent Color
    profileCard.style.backgroundColor = colorVal;

    // 5. Update Avatar Dynamically Based on Name
    avatarImg.src = `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(nameVal)}`;

    // 6. Bonus: Set Date
    const today = new Date();
    cardDate.textContent = "📅 Updated: " + today.toLocaleDateString();

    // 7. Bonus: Dynamic Time Greeting
    const hours = today.getHours();
    let timeGreeting = "Good Morning";
    if (hours >= 12 && hours < 17) {
        timeGreeting = "Good Afternoon";
    } else if (hours >= 17) {
        timeGreeting = "Good Evening";
    }
    cardGreeting.textContent = `${timeGreeting}, ${nameVal}! ✨`;
});

// ==========================================
// Task 4 & 5: Toggle Hide/Show Card
// ==========================================
btnHide.addEventListener("click", function() {
    if (profileCard.style.display === "none") {
        profileCard.style.display = "block";
        btnHide.textContent = "👁️ Hide Profile";
    } else {
        profileCard.style.display = "none";
        btnHide.textContent = "👁️ Show Profile";
    }
});

// ==========================================
// Task 6: Soft Dark Mode Toggle
// ==========================================
btnTheme.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// ==========================================
// Task 7: Reset Functionality
// ==========================================
btnReset.addEventListener("click", function() {
    // Restore Default Values for Yusra's Cute Card
    nameInput.value = "Yusra";
    ageInput.value = "17";
    subjectInput.value = "Mathematics";
    colorInput.value = "Mauve";
    bioInput.value = "Curious learner & math enthusiast! 🧮✨";

    dispName.textContent = "Yusra";
    dispAge.textContent = "17";
    dispSubject.textContent = "Mathematics";
    dispColor.textContent = "Mauve";
    dispBio.textContent = `"Curious learner & math enthusiast! 🧮✨"`;
    cardHeaderName.textContent = "Yusra";
    cardGreeting.textContent = "Welcome, Yusra! ✨";
    cardDate.textContent = "📅 Updated Today";
    charCount.textContent = "Characters: 5";

    profileCard.style.backgroundColor = "Mauve";
    profileCard.style.display = "block";
    btnHide.textContent = "👁️ Hide Profile";
    avatarImg.src = "https://api.dicebear.com/7.x/adventurer/svg?seed=Yusra";
});

// ==========================================
// Bonus: Live Character Counter
// ==========================================
nameInput.addEventListener("input", function() {
    const totalChars = nameInput.value.length;
    charCount.textContent = "Characters: " + totalChars;
});