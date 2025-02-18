document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  if (email && password) {
    var message = document.getElementById("message");
    message.textContent = "Login successful";
    message.style.color = "#49e556";

    
    document.getElementById("loginForm").reset();
  } else {
    var message = document.getElementById("message");
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
  }
});
