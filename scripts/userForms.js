import { addUsers } from "./storage.js";

const form = document.querySelector("#form");
const formNameEl = document.querySelector("#name");
const formEmailEl = document.querySelector("#email");
const formPhoneEl = document.querySelector("#phone");

function handleFormSubmit(e) {
  e.preventDefault();

  const user = formActions().getUser();
  console.log(user);
  addUsers(user);
  formActions().clearForm();
}

function formActions() {
  const { value: name } = formNameEl;
  const { value: email } = formEmailEl;
  const { value: phone } = formPhoneEl;

  function getUser() {
    return { name, email, phone };
  }

  function clearForm() {
    [formNameEl, formEmailEl, formPhoneEl].forEach(
      (input) => (input.value = "")
    );
  }

  return {
    getUser,
    clearForm,
  };
}

(() => {
  formActions().clearForm();
})();

form.addEventListener("submit", handleFormSubmit);
