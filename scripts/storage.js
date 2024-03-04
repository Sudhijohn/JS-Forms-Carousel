const key = "users";

export function addUsers(user) {
  const users = getUsers();
  users.push(user);
  addStorage(users);
}

function getUsers() {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}

function addStorage(users) {
  const userStr = JSON.stringify(users);
  localStorage.setItem(key, userStr);
}

function clearStorage() {
  localStorage.clear();
}

function clearUsers() {
  localStorage.removeItem(key);
}
