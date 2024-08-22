const loginForm = document.getElementById("loginForm");

const messageElement = document.getElementById("message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  const usersRef = database().ref("users");

  usersRef.once("value", (snapshot) => {
    let authenticated = false;

    snapshot.forEach((userSnapshot) => {
      const user = userSnapshot.val();

      if (user.username === username && user.password === password) {
        authenticated = true;
      }
    });

    if (authenticated) {
      messageElement.textContent = "Login successful!";

      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "Invalid credentials. Please try again.";

      messageElement.style.color = "red";
    }
  });
});
