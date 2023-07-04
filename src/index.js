console.log(document);
const form = document.querySelector("form");
const activityName = document.getElementById("activityInput");
const description = document.getElementById("descriptionInput");
const url = document.getElementById("urlInput");
const grid = document.getElementById("grid");

let activities = [];

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const activity = {
    title: activityInput.value,
    description: descriptionInput.value,
    url: urlInput.value,
  };

  activities.push(activity);
  activity.number = activities.length;
  console.log(activities);
  activityInput.value = "";
  descriptionInput.value = "";
  urlInput.value = "";

  const card = document.createElement("div");
  card.innerHTML = `<div class="card w-[250px] h-[250px] ">
<p class="number">${activity.number}</p>
<h4 class="title font-bold text-xl text-[#010102]">${activity.title}</h4>
<div class="scrollDiv max-h-28 overflow-scroll"><p class="description">${activity.description}</p></div>
<button class="linkButton mt-4 h-14 w-14 px-2 text-white bg-yellow-800 rounded-full  hover:bg-stone-800 text-center mb-32">
<a href="${activity.url} target="_blank">Visita!</a></button>
</div>`;

  if (activity.number === 1) {
    card.style.backgroundImage = 'url("img/fons1.png")';
  } else if (activity.number === 2) {
    card.style.backgroundImage = 'url("img/fons-5.png")';
  } else if (activity.number === 3) {
    card.style.backgroundImage = 'url("img/fons3.png")';
  } else if (activity.number === 4) {
    card.style.backgroundImage = 'url("img/fons2.png")';
  } else if (activity.number === 5) {
    card.style.backgroundImage = 'url("img/fons1.png")';
  } else if (activity.number === 6) {
    card.style.backgroundImage = 'url("img/fons-5.png")';
  } else if (activity.number === 7) {
    card.style.backgroundImage = 'url("img/fons3.png")';
  } else if (activity.number === 8) {
    card.style.backgroundImage = 'url("img/fons2.png")';
  } else if (activity.number === 9) {
    card.style.backgroundImage = 'url("img/fons1.png")';
  } else {
    card.style.backgroundImage = 'url("img/fons4.png")';
  }

  console.log(card);
  grid.appendChild(card);
}
