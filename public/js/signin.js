
const signinBtn = document.querySelector("#signin_btn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const postSignin = (data) => {
  fetch("/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())

    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
      window.location.href = "/profile";
    })
    .catch((err) => console.log({ err }));
  return true;
};
  signinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (email && password) {
      postSignin({
        email: email.value,
        password: password.value,
      });
    }
  });
  