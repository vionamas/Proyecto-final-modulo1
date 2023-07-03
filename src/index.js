console.log(document)
const form = document.querySelector("form");
const activityName = document.getElementById("activityInput");
const description = document.getElementById("descriptionInput");
const url = document.getElementById("urlInput");
const grid = document.getElementById("grid");

let activities = [];


form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
   event.preventDefault(); 
const activity = {
    title: activityInput.value,
    description: descriptionInput.value,
    url: urlInput.value,
    }

activities.push(activity);
  activity.number = activities.length
  console.log(activities);
  activityInput.value = "";
  descriptionInput.value = "";
  urlInput.value = "";

const card = document.createElement("div");
card.innerHTML = `<div class="h-[600px] w-[300px]"><p class="text-6xl font-extrabold">${activity.number}</p><h4 class="font-bold text-xl text-[#2a3034]">${activity.title}</h4><p>${activity.description}</p><p class="text-italic">${activity.url}</p>`;

console.log(card)
grid.appendChild(card)

}

