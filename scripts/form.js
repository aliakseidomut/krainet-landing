document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document
      .querySelectorAll(".contacts__form-error")
      .forEach((error) => (error.style.display = "none"));

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("name-error").textContent =
        "Пожалуйста, введите ваше имя.";
      document.getElementById("name-error").style.display = "block";
      isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("email-error").textContent =
        "Пожалуйста, введите корректный адрес электронной почты.";
      document.getElementById("email-error").style.display = "block";
      isValid = false;
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("message-error").textContent =
        "Пожалуйста, напишите сообщение.";
      document.getElementById("message-error").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      const formData = {
        name: name,
        email: email,
        message: message,
      };

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
