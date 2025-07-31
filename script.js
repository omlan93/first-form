const form = document.querySelector(".speaker-form")
console.log(form);

const submitButton = document.querySelector("button")

const email = document.querySelector("#email")
console.log(email);

const errorMessage = document.querySelector(".errorBox")

email.addEventListener("input", (event) => {
    console.log(email.validity.valid);
    if (!email.validity.valid) {
        errorMessage.classList.add("active")
        errorMessage.textContent = "I expect an Email, Darling!"
    }

    else {
        errorMessage.textContent = "";
        errorMessage.classList.remove("active");
    }
})

form.addEventListener("submit", (event) => {
    console.log(email.validitationMessage);
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }

})


function showError(event) {
    if (email.validity.valueMissing) {
        errorMessage.textContent = "Email field is required, MotherFucker!";
        errorMessage.classList.add("active");
    }

    else if (email.validity.typeMismatch) {
        errorMessage.textContent = "You entered a shit, not an email!"
    }


}





