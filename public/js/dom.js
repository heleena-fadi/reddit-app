
// cards section
const cardsContainer = document.querySelector(".cards-container");
const userData = JSON.parse(localStorage.getItem("user"));

const getCards = () => {
  fetch("/posts")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      renderCards(data);
    })
    .catch(() => {
     console.log("server error");
    });
};

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}/${month}/${day}`;
}

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

    const card_header_content = document.createElement("div");
    card_header_content.classList.add("card_header_content");


    const card_header_user_image = document.createElement("div");
    card_header_user_image.classList.add("card_header_user_image");
    card_header_user_image.style.backgroundImage = `url('${card.user.image}')`

    const card_header_user_data = document.createElement("div");
    card_header_user_data.classList.add("card_header_user_data");

    const card_header_username = document.createElement("h5");
    card_header_username.textContent = `Created by:  ${card.user.username}`;
    card_header_user_data.appendChild(card_header_username);


    const card_header_createdAt = document.createElement("p");
    card_header_createdAt.textContent = `Created at ${formatDate(card.created_at)}`
    card_header_user_data.appendChild(card_header_createdAt);

    card__header.appendChild(image);
    card_header_content.appendChild(card_header_user_image);
    card_header_content.appendChild(card_header_user_data);
    card__header.appendChild(card_header_content);
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
    
    const card__comments = document.createElement("div");
    card__comments.classList.add("card__comments");

    if(card.comments.length === 0) {
      card__comments.textContent = 'no comments yet! be the first...';
    }else {
      card.comments.forEach(comment => {
        const comment_wrapper =  document.createElement("div");
        comment_wrapper.classList.add("comment_wrapper");
        const comment_image =  document.createElement("div");
        comment_image.classList.add("comment_image");
        comment_image.style.backgroundImage = `url('${comment.user.image}')`
        const comment_content =  document.createElement("div");
        comment_content.classList.add("comment_content");

        const comment_content_name =  document.createElement("p");
        comment_content_name.classList.add("comment_content_name");
        comment_content_name.textContent = comment.user.username;
        
        
        const comment_content_text =  document.createElement("p");
        comment_content_text.classList.add("comment_content_text");
        comment_content_text.textContent = comment.content
        

                
        const comment_content_date =  document.createElement("p");
        comment_content_date.classList.add("comment_content_date");
        comment_content_date.textContent = 'commented at ' + ' ' +formatDate(comment.created_at)

        comment_content.appendChild(comment_content_name);
        comment_content.appendChild(comment_content_text);
        comment_content.appendChild(comment_content_date);
        
        
        comment_wrapper.appendChild(comment_image);
        comment_wrapper.appendChild(comment_content);
        card__comments.appendChild(comment_wrapper);
      })
    }
 
    const card__footer = document.createElement("div");

    card__footer.classList.add("card__footer");

    const user_div = document.createElement("div");
    user_div.classList.add("user");

    const user_img = document.createElement("img");

    user_img.src = (userData && userData.user_image) || "https://i.pravatar.cc/40?img=1";
    image.setAttribute("alt", "user__image");
    user_img.classList.add("user__image");

    const user__info = document.createElement("div");
    user__info.classList.add("user__info");

    const comment_input = document.createElement("input");
    comment_input.setAttribute("type", "text");
    comment_input.setAttribute("placeholder", "write your comment here ....");
    comment_input.classList.add("comment-area");

    const comment_btn = document.createElement("button");
    comment_btn.setAttribute("id", "comment-btn");
    comment_btn.textContent = "submit";
comment_btn.addEventListener('click', (e) => {
  e.preventDefault();
  if(userData){
    if(comment_input.value){
      addComment({
        postId: card.id,
        userId: userData.id,
        content: comment_input.value
      })
}
  }else {
    window.location.href = '/signin';
  }
})
    user__info.appendChild(comment_input);
    user__info.appendChild(comment_btn);
    user_div.appendChild(user_img);
    user_div.appendChild(user__info);
    card__footer.appendChild(user_div);
    cardDiv.appendChild(card__comments);
    cardDiv.appendChild(card__footer);

    cardsContainer.appendChild(cardDiv);
  });
};

if(cardsContainer){getCards();}

// end cards

// check user 
const signin_btn = document.querySelector("#signin_btn");
const signup_btn = document.querySelector("#signup_btn");
const logout_btn = document.querySelector("#logout_btn");


const addComment = (data) => {
  return fetch("/add-comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())

    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log({ err }));
} 

const logout = () => {
  fetch("/logout")
    .then((res) => res.json())

    .then(() => {
      localStorage.removeItem("user");
      window.location.href = "/";
    })
    .catch((err) => console.log({ err }));
  return true;
};

window.addEventListener('DOMContentLoaded', () => {
  if(window.location.pathname === '/'){
    if(userData && userData.id) {
      signin_btn.classList.add('hidden')
      signup_btn.classList.add('hidden')
    }else {
      logout_btn.classList.add('hidden')
    
    }
  }

} )

  logout_btn.addEventListener('click', () => {
    logout()
  })