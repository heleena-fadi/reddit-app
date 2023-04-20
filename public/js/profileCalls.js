const addPost = ({ title, content, image, userId }) => {
    // send data to the back
    fetch("/create-post", {
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
    return true;
  };
  
  const logout = () => {
    fetch("/logout")
      .then((res) => res.json())
  
      .then((res) => {
        console.log({ res });
        localStorage.removeItem("user");
        window.location.href = "/";
      })
      .catch((err) => console.log({ err }));
    return true;
  };