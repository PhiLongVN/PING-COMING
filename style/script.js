const form = document.querySelector(".h-search");
const email = document.querySelector(".email");

form.onsubmit = (e) => {
  emailValue = email.value;
  checkerror(emailValue);

  removeError(email);

  if (checkerror(emailValue) > 0) {
    e.preventDefault();
  }
};

checkerror = (value) => {
  let dem = 0;
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const a = document.querySelector(".h-search span:nth-of-type(2)");
  const b = document.querySelector(".h-search span:nth-of-type(1)");

  if (value == "" || value == null) {
    b.style.opacity = "0";
    a.style.opacity = "1";
    email.setAttribute("style", "border: 1px solid rgba(235, 4, 4, 0.918);");
    email.parentNode.classList.add("active");
    dem++;
  } else if (!value.match(re)) {
    a.style.opacity = "0";
    b.style.opacity = "1";
    email.setAttribute("style", "border: 1px solid rgba(235, 4, 4, 0.918);");
    email.parentNode.classList.add("active");
    dem++;
  }

  return dem;
};

removeError = (field) => {
  const a = document.querySelector(".h-search span:nth-of-type(2)");
  const b = document.querySelector(".h-search span:nth-of-type(1)");

  field.onclick = () => {
    field.style.border = " 1px solid hsl(0, 0%, 59%, 0.5)";
    a.style.opacity = "0";
    b.style.opacity = "0";
    field.parentNode.classList.remove("active");
  };
};
