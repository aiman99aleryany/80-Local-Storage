// Starting from the previous exercise, write a method that recovers the data saved in localStorage and prints them in the console.

const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveLocaly = (userData, key) =>
  localStorage.setItem(key, JSON.stringify(userData));

const getLocalInfo = (key) => JSON.parse(localStorage.getItem(key));

saveLocaly(user, "user");
console.log(getLocalInfo("user"));
