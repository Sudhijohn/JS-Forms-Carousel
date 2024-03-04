const isNameValid = (str) => str.length >= 6;

const isEmailValid = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const isPhoneValid = (phoneNo) =>
  typeof phoneNo === "number" && String(phoneNo).length === 10;

export function isFormValid(name, email, phone) {
  return isNameValid(name) && isEmailValid(email) && isPhoneValid(phone);
}
