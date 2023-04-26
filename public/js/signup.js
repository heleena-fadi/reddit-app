
const signupBtn = document.querySelector("#signup_btn");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const user_image = document.querySelector("#user_image");
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


const female_image = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'  
const male_image = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'


signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
var gender = document.querySelector("input[type='radio'][name='gender']:checked");
    if (email.value && username.value && password.value) {
    postSignup({
        email: email.value,
        username: username.value,
        password: password.value,
        gender: gender ? gender.value : 'Female',
        user_image: user_image.value || gender?.value === 'Female' ? female_image : male_image
    });
    }
});