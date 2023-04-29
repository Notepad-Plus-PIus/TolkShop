const sortButton = document.querySelector('#sortbrend');
const image = sortButton.querySelector('img');
let isImageOne = true;

  sortButton.addEventListener('click', () => {
    if (isImageOne) {
      image.src = "{% static 'users/img/Vector-4.svg' %}";
      isImageOne = false;
    } else {
      image.src = "{% static 'users/img/Vector-4-1.svg' %}";
      isImageOne = true;
    }
  });


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.sort-btn-brend')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function filterByBrand(brand) {
  let products = document.querySelectorAll('.tovar');
  products.forEach(function(product) {
    if (product.getAttribute('data-brand') === brand) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

let sortBtn = document.querySelector('.sort-btn-brend');
let sortButtons = document.querySelectorAll('.sort-button');
sortButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    let selectedBrand = this.textContent;
    let brand = this.getAttribute('data-brand');
    filterByBrand(brand);
    sortBtn.textContent = `${selectedBrand}`;
  });
});

const sortBtn1 = document.querySelector('.sort-btn-price');
const products = document.querySelector('.products');
const tovars = Array.from(products.querySelectorAll('.tovar'));
let isAscending = true;

sortBtn1.addEventListener('click', () => {
  tovars.sort((a, b) => {
    const aPrice = parseInt(a.dataset.price);
    const bPrice = parseInt(b.dataset.price);
    return isAscending ? aPrice - bPrice : bPrice - aPrice;
  });

  tovars.forEach((tovar) => {
    products.appendChild(tovar);
  });

  isAscending = !isAscending;
});

const sortButton1 = document.querySelector('#sortbrend1');
const image1 = sortButton1.querySelector('img');
let isImageOne1 = true;

  sortButton1.addEventListener('click', () => {
    if (isImageOne1) {
      image1.src = "{% static 'users/img/Vector-4.svg' %}";
      isImageOne1 = false;
    } else {
      image1.src = "{% static 'users/img/Vector-4-1.svg' %}";
      isImageOne1 = true;
    }
  });