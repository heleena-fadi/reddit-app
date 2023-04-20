const signupBtn = document.querySelector("#signup_btn");
const signinBtn = document.querySelector("#signin_btn");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const postSignup = (data) => {
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())

    .then(() => {
      window.location.href = "/signin";
    })
    .catch((err) => console.log({ err }));
  return true;
};

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

if (signupBtn) {
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (email && username && password) {
      console.log({postSignup})
      postSignup({
        email: email.value,
        username: username.value,
        password: password.value,
      });
    }
  });
}

if (signinBtn) {
  signinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ddddddasddsds");
    if (email && password) {
      console.log({postSignin})

      postSignin({
        email: email.value,
        password: password.value,
      });
    }
  });
}