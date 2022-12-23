window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// --------------------------------------------------------------

const loginForm = `<div class="jsmain"> <div class="main"><a class="mainlink" href="index.html  ">Home</a></div> <div class="container">
      <form class="formJs" action="#" method="post">
        <input id="fname" type="email" placeholder="Email" required />
        <input id="lname" type="password" placeholder="Password" required />
        <button type="submit">Log In!</button
        ><button class="two" type="submit">Sign Up!</button>
      </form>
    </div>
    </div>`;

const registrationDiv = document.querySelector(".registration");

registrationDiv.addEventListener("click", function () {
  document.body.innerHTML = loginForm;
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.height = "100vh";
  document.body.style.backgroundColor = "#bde4a8";
});

// ------------------------------------------------------------------

// const loginForm = `
//       <form class="formJs" action="#" method="post">
//         <h1>about appartment</h1>
//         <input id="fname" type="text" placeholder="" required />
//         <h1>zip code</h1>
//         <input id="lname" type="text" placeholder="" required />
//       </form>`;

// const registrationDiv = document.querySelector(".registration");
// registrationDiv.addEventListener("click", function () {
//   document.body.innerHTML = loginForm;
// });
