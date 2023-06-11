/*CAROUSEL 1*/ 

const carousel1 = document.querySelector("#carousel1"); 
firstImg = carousel1.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll("#wrapper1 i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
 icon.addEventListener("click", () => {
    carousel1.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel1.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  carousel1.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel1.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
  carousel1.classList.remove("dragging");
}

carousel1.addEventListener("mousedown", dragStart);
carousel1.addEventListener("mousemove", dragging);
carousel1.addEventListener("mouseup", dragStop);

/*CAROUSEL 2*/

const carousel2 = document.querySelector("#carousel2"); 
firstImg2 = carousel2.querySelectorAll("img")[0];
arrowIcons2 = document.querySelectorAll("#wrapper2 i");

let firstImgWidth2 = firstImg2.clientWidth + 14;

arrowIcons2.forEach(icon => {
  icon.addEventListener("click", () => {
     carousel2.scrollLeft += icon.id == "left" ? -firstImgWidth2 : firstImgWidth2;
   });
 });

 const dragStart2 = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel2.scrollLeft;
}

const dragging2 = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  carousel2.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel2.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop2 = () => {
  isDragStart = false;
  carousel2.classList.remove("dragging");
}

carousel2.addEventListener("mousedown", dragStart);
carousel2.addEventListener("mousemove", dragging);
carousel2.addEventListener("mouseup", dragStop);

/*CAROUSEL 3*/ 

const carousel3 = document.querySelector("#carousel3"); 
firstImg3 = carousel3.querySelectorAll("img")[0];
arrowIcons3 = document.querySelectorAll("#wrapper3 i");

let firstImgWidth3 = firstImg3.clientWidth + 14;

arrowIcons3.forEach(icon => {
  icon.addEventListener("click", () => {
     carousel3.scrollLeft += icon.id == "left" ? -firstImgWidth3 : firstImgWidth3;
   });
 });

 const dragStart3 = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel3.scrollLeft;
}

const dragging3 = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  carousel3.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel3.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop3 = () => {
  isDragStart = false;
  carousel3.classList.remove("dragging");
}

carousel3.addEventListener("mousedown", dragStart);
carousel3.addEventListener("mousemove", dragging);
carousel3.addEventListener("mouseup", dragStop);

/*FORM*/

const form = document.querySelector(".contact-form");
const fullName = document.querySelector("#fullname");
const nameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSuccess = document.querySelector(".message-success")

function validateForm() {
  event.preventDefault();

  //VALIDATE NAME
  if(checkLength(fullName.value, 5) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  //VALIDATE EMAIL
  if(validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  //VALIDATE SUBJECT
  if(checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  //VALIDATE MESSAGE
  if(checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

if((checkLength(fullName.value, 5) === true) & (validateEmail(email.value) === true) & (checkLength(subject.value, 15) === true) & (checkLength(message.value, 25) === true)) {
  messageSuccess.style.display = "block";
} else {
  messageSuccess.style.display = "none";
}
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if(value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}


function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}