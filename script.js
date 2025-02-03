// const display = document.getElementById("display");

// // Append clicked value to input field
// function appendValue(value) {
//     display.value += value;
// }

// // Calculate the expression
// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch {
//         display.value = "Error";
//     }
// }

// // Clear the display
// function clearDisplay() {
//     display.value = "";
// }

// // Remove the last character
// function backspace() {
//     display.value = display.value.slice(0, -1);
// }
const display = document.getElementById("display");
const historyList = document.getElementById("history");
const themeToggle = document.querySelector(".theme-toggle");

// 🌙 ডিফল্টভাবে ডার্ক মোড চালু করা
document.body.classList.add("dark-mode");
themeToggle.textContent = "☀️ Light Mode";

// 🔹 ইনপুটে সংখ্যা বা অপারেটর যোগ করা
function appendValue(value) {
    display.value += value;
}

// 🔹 গণনা করা
function calculate() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// 🔹 ডিসপ্লে পরিষ্কার করা
function clearDisplay() {
    display.value = "";
}

// 🔹 শেষ ডিজিট মুছে ফেলা (Backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// 🔹 হিস্টোরি যোগ করা
function addToHistory(expression) {
    let li = document.createElement("li");
    li.textContent = expression;
    historyList.appendChild(li);
}

// 🔹 কীবোর্ড শর্টকাট (Enter এবং Backspace)
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculate();
    }
    if (event.key === "Backspace") {
        backspace();
    }
});

// 🔹 ডার্ক / লাইট মোড টগল করা
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
});
