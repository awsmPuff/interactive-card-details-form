const fullName = document.getElementById("full-name");
const showName = document.querySelector(".name");
const cardNum = document.getElementById("card-num");
const showNum = document.querySelector(".num");
const month = document.getElementById("month");
const year = document.getElementById("year");
const showMonth = document.querySelector(".show-month");
const showYear = document.querySelector(".show-year");
const cvc = document.getElementById("cvc");
const showCVC = document.querySelector(".code");
const form = document.querySelector(".form")
// complete
const confirm = document.getElementById("confirm");
const complete = document.querySelector(".complete");
const back = document.getElementById("continue");
// wrong info
const nameError = document.querySelector(".name-error");
const numError = document.querySelector(".num-error");
const dateError = document.querySelector(".date-error");
const cvcError = document.querySelector(".cvc-error");


fullName.addEventListener("input", (e)=>{
  showName.innerHTML = e.target.value;
  if(e.target.value.match(/^[A-Za-z ]*$/)) {
    fullName.classList.remove("error");
    nameError.innerHTML = "";
  }
});
cardNum.addEventListener("input", (e) => {
    showNum.innerHTML = e.target.value
    .replace(/(.{4})/g, "$1 ")
    .trim();
    if(e.target.value.match(/^[0-9]*$/)) {
        cardNum.classList.remove("error");
        numError.innerHTML = "";
      }
});
month.addEventListener("input", (e) => {
    showMonth.innerHTML =  e.target.value;
    if(e.target.value.match(/^(0?[1-9]|1[012])$/)) {
        month.classList.remove("error");
        dateError.innerHTML = "";
      }
})
year.addEventListener("input", (e) => {
    showYear.innerHTML =  e.target.value;
    if(e.target.value.match(/^[0-9]*$/)) {
        year.classList.remove("error");
        dateError.innerHTML = "";
      }
})
cvc.addEventListener("input", (e) => {
    showCVC.innerHTML =  e.target.value;
    if(e.target.value.match(/^[0-9]*$/)) {
        cvc.classList.remove("error");
        cvcError.innerHTML = "";
      }
})

// complete
form.addEventListener("submit", (e) => {


    if(!fullName.value) {
        e.preventDefault();
        nameError.innerHTML = "Please input your name";
        fullName.classList.add("error");
    } else {
        if(!fullName.value.match(/^[A-Za-z ]*$/)) {
            e.preventDefault();
            nameError.innerHTML = "Wrong format, letters only";
            fullName.classList.add("error");
        } else {
            fullName.classList.remove("error");
        }
    }

    if(!cardNum.value) {
        e.preventDefault();
        numError.innerHTML = "Please input your card number";
        cardNum.classList.add("error");
    } else {
        if(!cardNum.value.match(/^[0-9]*$/)) {
            numError.innerHTML = "Wrong format, numbers only";
            cardNum.classList.add("error");
        } else {
            cardNum.classList.remove("error");
        }
    }

    if(!month.value) {
        e.preventDefault();
        dateError.innerHTML = "Can't be blank";
        month.classList.add("error");
    } else {
        if(!month.value.match(/^(0?[1-9]|1[012])$/)) {
            dateError.innerHTML = "It should only between 1 and 12";
            month.classList.add("error");
        } else {
            month.classList.remove("error");
        }
    }

    if(!year.value) {
        e.preventDefault();
        dateError.innerHTML = "Can't be blank";
        year.classList.add("error");
    } else {
        if(!year.value.match(/^[0-9]*$/)) {
            dateError.innerHTML = "Wrong format, numbers only";
            year.classList.add("error");
        } else {
            year.classList.remove("error");
        }
    }

    if(!cvc.value) {
        e.preventDefault();
        cvcError.innerHTML = "Can't be blank";
        cvc.classList.add("error");
    } else {
        if(!cvc.value.match(/^[0-9]*$/)) {
            cvcError.innerHTML = "Wrong format, numbers only";
            cvc.classList.add("error");
        } else {
            cvc.classList.remove("error");
        }
    }
 
    if (fullName.value.match(/^[A-Za-z ]*$/) && 
        cardNum.value.match(/^[0-9]*$/) && 
        month.value.match(/^(0?[1-9]|1[012])$/) &&
        year.value.match(/^[0-9]*$/) &&
        cvc.value.match(/^[0-9]*$/) &&
        fullName.value && 
        cardNum.value &&
        month.value &&
        year.value &&
        cvc.value) {
            e.preventDefault();
            complete.style.display = "block";
            form.style.display = "none";
    } else {
        complete.style.display = "none";
        form.style.display = "block";
    }
});

back.addEventListener("click", () => {
    location.reload();
    complete.style.display = "none";
    back.style.width = "100%";
    form.style.display = "block";
});
