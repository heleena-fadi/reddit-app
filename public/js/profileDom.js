const username = document.querySelector("#username");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const image = document.querySelector("#image");
const create_post_btn = document.querySelector("#share-post-btn");
const logout_btn = document.querySelector("#logout_btn");

const userData = JSON.parse(localStorage.getItem("user"));
if (userData) {
  username.textContent = userData.username;
}

// cards section
const cardsContainer = document.querySelector(".cards-container");

const getCards = ({ userId }) => {
  fetch(`/posts/${userId}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log({ data });
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

getCards({ userId: userData.id });

// end cards

create_post_btn.addEventListener("click", (e) => {
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