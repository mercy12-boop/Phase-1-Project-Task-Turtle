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
  affirmation.classList.add("affirmation");
  affirmation.textContent = `Affirmation of the day: 🚀 ${randomQuote.text} by ${randomQuote.author} 🚀`;
}

document.addEventListener("DOMContentLoaded", function () {
  const workContainer = document.getElementById("Work");
  const schoolContainer = document.getElementById("School");
  const healthContainer = document.getElementById("HealthandNutrition");
  const selfContainer = document.getElementById("SelfCare");
  const fitnessContainer = document.getElementById("Fitness");

  const dailys = document.getElementById("Daily");
  const weeklys = document.getElementById("Weeklys");
  const monthlys = document.getElementById("Monthlys");

  const completionCountsMap = new Map(); // Map to store completion counts
  const habitsArray = []; // Array to store habit elements

  function updateProgress(habitDiv, frequency) {
    const completionCount = completionCountsMap.get(habitDiv);
    const frequencyLimit =
      frequency === "Daily" ? 30 : frequency === "Weekly" ? 4 : 1;
    const completionRate = completionCount / frequencyLimit;
    const progressButton = document.createElement("button");
    progressButton.textContent = `${
      habitDiv.querySelector("span").textContent
    } - ${completionRate}`;

    if (frequency === "Daily") {
      dailys.appendChild(progressButton);
    } else if (frequency === "Weekly") {
      weeklys.appendChild(progressButton);
    } else if (frequency === "Monthly") {
      monthlys.appendChild(progressButton);
    }

    progressButton.addEventListener("click", () => {
      alert(`You have completed ${completionCount} times.`);
    });
  }

  function getData() {
    const form = document.getElementById("habitForm");
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

    // Get the category container element based on the category name
    let categoryContainer;
    if (category === "Work") {
      categoryContainer = workContainer;
    } else if (category === "School") {
      categoryContainer = schoolContainer;
    } else if (category === "Health and Nutrition") {
      categoryContainer = healthContainer;
    } else if (category === "Self Care") {
      categoryContainer = selfContainer;
    } else if (category === "Fitness") {
      categoryContainer = fitnessContainer;
    }

    // Append habit to corresponding category container
    categoryContainer.appendChild(habitsDiv);

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

        // Update progress bar
        updateProgress(habitsDiv, frequency);
      }
    });
  }

  const form = document.getElementById("habitForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData();
  });
});
