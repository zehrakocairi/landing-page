const nameInput = document.querySelector(".name-input");
const commentBtn = document.querySelector(".add-btn");
const textarea = document.querySelector(".big-textarea");
const comments = document.querySelector(".comments");
const mailInput = document.querySelector(".mail-input");

commentBtn.addEventListener("click", (e) => {
  const div = createComment();
  comments.appendChild(div);
  clearInputs();
});

function createComment() {
  const name = nameInput.value;
  const comment = textarea.value;
  if (nameInput.value && textarea.value && mailInput.value) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.innerHTML = comment;
    span.innerHTML = `-${name}`;
    div.classList.add("comments-area");
    div.appendChild(p);
    div.appendChild(span);
    return div;
  } else alert("Please fill in the required fields");
}

function clearInputs() {
  nameInput.value = "";
  mailInput.value = "";
  textarea.value = "";
}
