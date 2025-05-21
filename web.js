let burger = document.querySelector("#bars");
let nav2 = document.querySelector(".nav2");
let contact = document.querySelector(".Contact");
let exit = document.querySelector("#exit");

burger.addEventListener('click',function(){
  nav2.classList.add('show');
});

exit.addEventListener('click',function(){
  nav2.classList.remove('show');
});
// console.log(burger);
// console.log(nav2);
// console.log(contact);'

let button = document.querySelector(".fa-arrow-up");

console.log(button);

window.addEventListener('scroll',function(){
  console.log(window.scrollY);
  if(this.window.scrollY > 200){
      button.classList.remove("scroll-btn");
  }else{
      button.classList.add("scroll-btn");
  }
});

button.addEventListener('click',function(){
  document.documentElement.scrollTo({
      top:0,
      behavior:"smooth",
  });
});