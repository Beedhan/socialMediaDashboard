const button = document.querySelector(".toogleBtn");
const pageBody = document.body;
const backGround = document.querySelector(".background");
const toggleCircle = document.querySelector(".circleButton");
const Dark = document.querySelector("#Dark");
const values = document.querySelectorAll("strong");
const titles = document.querySelectorAll("h2");
const properties = document.querySelectorAll(".Properties");
const socialMedia = document.querySelectorAll(".socialMedia");
const Followers = document.querySelectorAll(".Followers");

button.addEventListener("click", () => {
  if (!button.classList.contains("active")) {
    button.classList.add("active");
    pageBody.style.backgroundColor = "#1D2029";
    backGround.style.backgroundColor = "#1D2029";
    toggleCircle.style.backgroundColor = "#323854"
    Dark.style.color = "#ffff"
    for (let index = 0; index < values.length; index++) {
      values[index].style.color = "#fff";
    }
    for (let index = 0; index < titles.length; index++) {
      titles[index].style.color = "#fff";
    }
    for (let index = 0; index < properties.length; index++) {
      properties[index].style.backgroundColor = "#252B43";
    }
    for (let index = 0; index < Followers.length; index++) {
      Followers[index].style.color = "#ffff";
    }
    for (let index = 0; index < socialMedia.length; index++) {
      socialMedia[index].style.backgroundColor = "#252B43";
    }
  } else {
    button.classList.remove("active");
    pageBody.style.backgroundColor = "#ffff";
    backGround.style.backgroundColor = "#fff";
    toggleCircle.style.backgroundColor = "#fff"
    Dark.style.color = "#000"

    for (let index = 0; index < values.length; index++) {
      values[index].style.color = "#000";
    }
    for (let index = 0; index < titles.length; index++) {
      titles[index].style.color = "#000";
    }
    for (let index = 0; index < properties.length; index++) {
      properties[index].style.backgroundColor = "#F0F3FA";
    }
    for (let index = 0; index < Followers.length; index++) {
        Followers[index].style.color = "#000";
      }
    for (let index = 0; index < socialMedia.length; index++) {
      socialMedia[index].style.backgroundColor = "#F0F3FA";
    }
    // #252B43
  }
});
