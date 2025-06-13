let burger = document.querySelector("#bars");
let nav2 = document.querySelector(".nav2");
let contact = document.querySelector(".Contact");
let exit = document.querySelector("#exit");
let navLink = document.querySelectorAll(".nav2 nav a");

burger.addEventListener('click', function () {
  nav2.classList.add('show');
});

exit.addEventListener('click', function () {
  nav2.classList.remove('show');
});
// console.log(burger);
// console.log(nav2);
// console.log(contact);'

let button = document.querySelector(".scroll-btn");

console.log(button);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 200) {
    button.classList.remove("scroll-btn-visibility");
  } else {
    button.classList.add("scroll-btn-visibility");
  }
});

button.addEventListener('click', function () {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

console.dir(navLink);

navLink.forEach(element => {
  element.addEventListener('click', function () {
    nav2.classList.remove('show');
  });
});

// navLink.addEventListener('click', function () {
//   nav2.classList.remove('show');
// });

// Object.addEventListener
