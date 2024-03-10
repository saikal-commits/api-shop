const users = document.querySelector(".users");
const price = document.querySelector(".price");

let all = null;
function getProduct() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      all = data;
      //   console.log(all);
      product(data);
    });
}
getProduct();

function product(main) {
  users.innerHTML = "";
  main.map((el, idx) => {
    users.innerHTML += `
          <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${el.image}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${el.title}</h5>
      <p class="card-text">${el.description}</p>
      <h5 class="card-title">${el.category}</h5>
      <a href="#" class="btn btn-primary">${el.price}$</a>
      </div>
      </div>        
          `;
  });
}

price.addEventListener("change", (e) => {
  let tar = e.target.value;
  if (tar === "expensive") {
    all = all.sort((a, b) => {
      return a.price - b.price;
    });
    product(all);
  }
  if (tar === "cheap") {
    all = all.sort((a, b) => {
      return b.price - a.price;
    });
    product(all);
  }
});
