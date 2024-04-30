// const API = "https://zenquotes.io/api/random";

// fetch(API)
//   .then((res) => res.json())
//   .then((data) => displayAffirmation(data));
// console.log(data);
// function displayAffirmation(data) {
//   const h1Element = document.querySelector("h1");
//   h1Element.textContent = `Affirmation of the day: ${data.q} by ${data.a}`;
// }

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("habitForm");
  const workContainer = document.getElementById("Work");
  const schoolContainer = document.getElementById("School");
  const healthContainer = document.getElementById("Health and Nutrition");
  const selfContainer = document.getElementById("Self Care");
  const fitnessContainer = document.getElementById("Fitness");

  // an event listener to capture the info, but we need to make sure we do not reload
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData();
  });

  function getData(e) {
    const habitName = form.elements["habitName"].value; // New way of capturing the input
    const category = form.elements["habitCategory"].value;
    const frequency = form.elements["Frequency"].value;

    const habitsDiv = document.createElement("div"); // We create a div with the actual habit
    const habitItem = document.createElement("span"); // Under the div, we create a span for the actual habit
    const habitFrequency = document.createElement("span");
    const edit = document.createElement("button");
    const checkmark = document.createElement("button");

    habitItem.textContent = habitName;
    habitFrequency.textContent = frequency;
    edit.textContent = "🖊️";
    checkmark.textContent = "✔";

    habitsDiv.appendChild(habitItem); // append the habits span to the upper div
    habitsDiv.appendChild(habitFrequency);
    habitsDiv.appendChild(edit);
    habitsDiv.appendChild(checkmark);
    // crearing the input fields
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
  }
});
