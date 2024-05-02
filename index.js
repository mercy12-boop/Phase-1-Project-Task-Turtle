const API = "https://type.fit/api/quotes";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // Log the data here
    displayAffirmation(data);
  });

function displayAffirmation(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomQuote = data[randomIndex];
  const affirmation = document.getElementById("affirmation");
  affirmation.textContent = `Affirmation of the day: ${randomQuote.text} by ${randomQuote.author}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("habitForm");
  const workContainer = document.getElementById("Work");
  const schoolContainer = document.getElementById("School");
  const healthContainer = document.getElementById("Health and Nutrition");
  const selfContainer = document.getElementById("Self Care");
  const fitnessContainer = document.getElementById("Fitness");

  const completionCountsMap = new Map(); // Map to store completion counts
  const habitsArray = []; // Array to store habit elements

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData();
  });

  function getData(e) {
    const habitName = form.elements["habitName"].value;
    const category = form.elements["habitCategory"].value;
    const frequency = form.elements["Frequency"].value;

    const habitsDiv = document.createElement("div");
    habitsDiv.classList.add("habitsD");

    const habitItem = document.createElement("span");
    const habitFrequency = document.createElement("span");
    const edit = document.createElement("button");
    const checkmark = document.createElement("button");

    habitItem.textContent = habitName;
    habitFrequency.textContent = frequency;
    edit.textContent = "🖊️";
    checkmark.textContent = "✔";

    habitsDiv.appendChild(habitItem);
    habitsDiv.appendChild(habitFrequency);
    habitsDiv.appendChild(edit);
    habitsDiv.appendChild(checkmark);

    form.elements["habitName"].value = "";
    form.elements["habitCategory"].value = "";
    form.elements["Frequency"].value = "";

    if (category === "Work") {
      workContainer.appendChild(habitsDiv);
    } else if (category === "School") {
      schoolContainer.appendChild(habitsDiv);
    } else if (category === "Health and Nutrition") {
      healthContainer.appendChild(habitsDiv);
    } else if (category === "Self Care") {
      selfContainer.appendChild(habitsDiv);
    } else if (category === "Fitness") {
      fitnessContainer.appendChild(habitsDiv);
    }

    // Push the habit div to the habits array
    habitsArray.push(habitsDiv);
    // Initialize completion count to 0 in the completion counts map
    completionCountsMap.set(habitsDiv, 0);

    edit.addEventListener("click", () => {
      const newHabitName = prompt("Enter the new habit name:");
      const newFrequency = prompt("Enter the new frequency:");

      if (newHabitName !== null && newFrequency !== null) {
        habitItem.textContent = newHabitName;
        habitFrequency.textContent = newFrequency;
      }
    });

    checkmark.addEventListener("click", () => {
      const completionCount = completionCountsMap.get(habitsDiv);
      const confirmation = confirm(
        "Good job! That's one more day down. Keep going!"
      );

      if (confirmation) {
        const newCompletionCount = completionCount + 1;
        completionCountsMap.set(habitsDiv, newCompletionCount);
        habitsDiv.classList.add("completed"); // Add completed class
        alert(
          `Woohoooo! You have completed : ${newCompletionCount} days of the ${habitName} habit`
        );
      }
    });
  }
});
