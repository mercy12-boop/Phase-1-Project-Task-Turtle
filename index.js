const API = "https://zenquotes.io/api/random";

fetch(API)
  .then((res) => res.json())
  .then((data) => displayAffirmation(data));
console.log(data);
function displayAffirmation(data) {
  const h1Element = document.querySelector("h1");
  h1Element.textContent = `Affirmation of the day: ${data.q} by ${data.a}`;
}


// document.addEventListener("DOMContentLoaded", function () {
//   const habitForm = document.getElementById("addHabitForm");
//   const habitList = document.getElementById("habitList");

//   habitForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const habitName = document.getElementById("habitName").value;
//     const habitCategory = document.getElementById("habitCategory").value;
//     const habitFrequency = document.getElementById("habitFrequency").value;

//     const habitItem = document.createElement("div");
//     habitItem.classList.add("habit-item");
//     habitItem.innerHTML = `
//             <span>${habitName} - ${habitFrequency}</span>
//             <button class="complete-btn">Complete</button>
//         `;

//     habitItem
//       .querySelector(".complete-btn")
//       .addEventListener("click", function () {
//         habitItem.remove();
//       });

//     let categoryDiv = habitList.querySelector(`#${habitCategory}`);
//     if (!categoryDiv) {
//       categoryDiv = document.createElement("div");
//       categoryDiv.id = habitCategory;
//       categoryDiv.classList.add("habit-category");
//       categoryDiv.innerHTML = `<h3>${habitCategory}</h3>`;
//       habitList.appendChild(categoryDiv);
//     }
//     categoryDiv.appendChild(habitItem);

//     habitForm.reset();
//   });
// });
