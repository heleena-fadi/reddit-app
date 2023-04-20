const username = document.querySelector("#username");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const image = document.querySelector("#image");
const create_post_btn = document.querySelector("#create_post");
const logout_btn = document.querySelector("#logout_btn");

const userData = JSON.parse(localStorage.getItem("user"));
console.log({ userData });
if (userData) {
  username.textContent = userData.username;
}

create_post_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((title.value, content.value, image.value)) {
    addPost({
      title: title.value,
      content: content.value,
      image: image.value,
      userId: userData.id,
    });
  }
});

logout_btn.addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});