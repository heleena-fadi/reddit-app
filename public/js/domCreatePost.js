const createPostModal = document.querySelector('#createPost-btn');
const createModal = document.querySelector('#create_post_modal');
const closeModalBtn = document.querySelector('#close_modal_button');


createPostModal.addEventListener('click', () => {
    createModal.classList.remove('hidden')
})

closeModalBtn.addEventListener('click', () => {
    createModal.classList.add('hidden')
})


const shareBtn = document.querySelector('#share-post-btn');
const title = document.querySelector("#modal_title");
const content = document.querySelector("#modal_content");
const image = document.querySelector("#modal_image");
const modal_error_message =  document.querySelector("#modal_error_message"); 

const addPost = ({ title, content, image, userId }) => {
    // send data to the back
    return fetch("/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, image, userId }),
    })
      .then((res) => res.json())
  
      .then((res) => {
        console.log({ res });
        // localStorage.setItem("user", JSON.stringify(res));
        // window.location.href = "/profile";
      })
      .catch((err) => console.log({ err }));
  };
  

shareBtn.addEventListener('click', (e) => {
e.preventDefault()
const userData = JSON.parse(localStorage.getItem("user"));
if(userData && userData.id){
    if ((title.value, content.value, image.value)) {
        addPost({
          title: title.value,
          content: content.value,
          image: image.value,
          userId: userData.id,
        }).then(() => {
            window.location.reload();
    
        });
    modal_error_message.textContent = '';

      }else {
    modal_error_message.textContent = 'please fill all inputs!';

      }
}else {
    modal_error_message.textContent = 'please sign in'
}
if ((title.value, content.value, image.value)) {
    addPost({
      title: title.value,
      content: content.value,
      image: image.value,
      userId: userData.id,
    }).then(() => {
        window.location.reload();

    });
  }
})
