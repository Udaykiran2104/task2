document.getElementById("contactForm").addEventListener("submit", function(e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  let valid = true;

  if (name.value.trim() === "") {
    alert("Name is required.");
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    alert("Enter a valid email address.");
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // Stop form submission
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = ""; // clear input
}