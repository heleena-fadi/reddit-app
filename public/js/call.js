// const postSignup = (data) => {
//   fetch("/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())

//     .then(() => {
//       window.location.href = "/signin";
//     })
//     .catch((err) => console.log({ err }));
//   return true;
// };

// const postSignin = (data) => {
//   fetch("/signin", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())

//     .then((res) => {
//       localStorage.setItem("user", JSON.stringify(res));
//       window.location.href = "/profile";
//     })
//     .catch((err) => console.log({ err }));
//   return true;
// };