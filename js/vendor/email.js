function SendEmail() {
  const from_name = document.getElementById("name").value;
  const email_id = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  emailjs
    .send("service_7peixpm", "template_zvynfuo", {
      from_name: from_name,
      email_id: email_id,
      message: message,
    })
    .then(function (response) {
      alert("Your message has been sent successfully", response.status);
    })
    .catch(function (error) {
      alert("Your message has not been sent", error.status);
    });
}
