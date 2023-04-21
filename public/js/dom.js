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
      postSignin({
        email: email.value,
        password: password.value,
      });
    }
  });
}

// cards section
const cardsContainer = document.querySelector(".cards-container");

const getCards = () => {
  fetch("/posts")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      renderCards(data);
    })
    .catch(() => {
      alert("server error");
    });
};

const renderCards = (cards = []) => {
  cardsContainer.textContent = "";
  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const card__header = document.createElement("div");
    card__header.classList.add("card__header");
    const image = document.createElement("img");
    image.classList.add("card__image");
    image.setAttribute("alt", "card__image");
    image.src = card.image;

    card__header.appendChild(image);
    cardDiv.appendChild(card__header);

    const card__body = document.createElement("div");
    card__body.classList.add("card__body");

    const card__title = document.createElement("h4");
    const card__content = document.createElement("p");

    card__title.textContent = card.title;
    card__content.textContent = card.content;
    card__body.appendChild(card__title);
    card__body.appendChild(card__content);
    cardDiv.appendChild(card__body);

    const card__footer = document.createElement("div");
    card__footer.classList.add("card__footer");

    const user_div = document.createElement("div");
    user_div.classList.add("user");

    const user_img = document.createElement("img");

    user_img.src = "https://i.pravatar.cc/40?img=1";
    image.setAttribute("alt", "user__image");
    user_img.classList.add("user__image");

    const user__info = document.createElement("div");
    user__info.classList.add("user__info");
    const user__name = document.createElement("h5");
    user__name.textContent = "test";

    const comment_input = document.createElement("input");
    comment_input.setAttribute("type", "text");
    comment_input.setAttribute("placeholder", "write your comment here ....");
    comment_input.classList.add("comment-area");

    const comment_btn = document.createElement("button");
    comment_btn.setAttribute("id", "comment-btn");
    comment_btn.textContent = "submit";

    user__info.appendChild(user__name);
    user__info.appendChild(comment_input);
    user__info.appendChild(comment_btn);
    user_div.appendChild(user_img);
    user_div.appendChild(user__info);
    card__footer.appendChild(user_div);
    cardDiv.appendChild(card__footer);

    cardsContainer.appendChild(cardDiv);
  });
};

if(cardsContainer){getCards();}

// end cards