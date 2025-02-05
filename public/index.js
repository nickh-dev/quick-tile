const registerBtn = document.getElementById("registerBtn");
const registrationForm = document.getElementById("registrationForm");

const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");

registerBtn.addEventListener("click", () => {
  // Если форма регистрации скрыта – открываем её и закрываем форму логина, если она открыта
  if (registrationForm.classList.contains("max-h-0")) {
    if (!loginForm.classList.contains("max-h-0")) {
      loginForm.classList.remove("max-h-[500px]", "opacity-100");
      loginForm.classList.add("max-h-0", "opacity-0");
    }
    registrationForm.classList.remove("max-h-0", "opacity-0");
    registrationForm.classList.add("max-h-[500px]", "opacity-100");
  } else {
    registrationForm.classList.remove("max-h-[500px]", "opacity-100");
    registrationForm.classList.add("max-h-0", "opacity-0");
  }
});

loginBtn.addEventListener("click", () => {
  // Если форма логина скрыта – открываем её и закрываем форму регистрации, если она открыта
  if (loginForm.classList.contains("max-h-0")) {
    if (!registrationForm.classList.contains("max-h-0")) {
      registrationForm.classList.remove("max-h-[500px]", "opacity-100");
      registrationForm.classList.add("max-h-0", "opacity-0");
    }
    loginForm.classList.remove("max-h-0", "opacity-0");
    loginForm.classList.add("max-h-[500px]", "opacity-100");
  } else {
    loginForm.classList.remove("max-h-[500px]", "opacity-100");
    loginForm.classList.add("max-h-0", "opacity-0");
  }
});
