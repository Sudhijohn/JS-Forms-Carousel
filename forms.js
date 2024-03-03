export function practiceForms() {
  const body = document.querySelector("body");

  const html = `
  <style>
    .forms{
      margin-top:2rem;
      container: forms/inline-size;
    }
    @container forms (width<1200px){
      form{
        display:none;
      }
    }
    label[for="username"],label[for="password"]{
      color:#fff;
    }
    // button{
    //   transition:background-color 500ms ease-in,color 1s ease-out;
      
    // }
    // button:hover{
    //   background-color:#000;
    //   color:#fff;
    //   transform: scale(1.2);
    // }
  </style>
  <div class="forms">    
      <form action="submit">
      <label for="username">User Name</label>
      <input type="text" id="username" placeholder="User Name" />
      <label for="password">Password</label>
      <input id="password" type="password" />
      <button>Login</button>
      </form>
  </div>
`;

  body.insertAdjacentHTML("beforeend", html);

  const form = document.querySelector(".forms form");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  console.log(form);

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const { value: user } = username;
    const { value: passkey } = password;
    console.log({ user, passkey });
    reset([username, password]);
  }

  function reset(elements) {
    elements.forEach((ele) => {
      ele.value = "";
    });
  }
}
