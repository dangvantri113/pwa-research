const container = document.querySelector(".container");
const NASA_KEY = 'A69yhDJ7vAsvXio2KdkhNa0Jw5CFkOpMtV7Pw2Px';
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "e33f0d152amsha7cea4c27a92895p1eff89jsn1ea37f7b44aa"
  }
})
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
// const coffees = [
//   {
//     name: "Perspiciatis",
//     image: "images/coffee1.jpg"
//   },
//   {
//     name: "Voluptatem",
//     image: "images/coffee2.jpg"
//   },
//   {
//     name: "Explicabo",
//     image: "images/coffee3.jpg"
//   },
//   {
//     name: "Rchitecto",
//     image: "images/coffee4.jpg"
//   },
//   {
//     name: " Beatae",
//     image: "images/coffee5.jpg"
//   },
//   {
//     name: " Vitae",
//     image: "images/coffee6.jpg"
//   },
//   {
//     name: "Inventore",
//     image: "images/coffee7.jpg"
//   },
//   {
//     name: "Veritatis",
//     image: "images/coffee8.jpg"
//   },
//   {
//     name: "Accusantium",
//     image: "images/coffee9.jpg"
//   }
// ];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
