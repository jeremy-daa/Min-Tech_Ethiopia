function sendEmail() {
  event.preventDefault();
  const templateId = "template_fxjfh4r";
  const serviceId = "service_5w4sagr";
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(serviceId, templateId, templateParams)
    .then(function (response) {
      if (response.status === 200) {
        // change the opacity and visibility of the div with id "modal" to 1 and visible respectively for 3 seconds
        document.getElementById("modal").style.opacity = 1;
        document.getElementById("modal").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("modal").style.opacity = 0;
          document.getElementById("modal").style.visibility = "hidden";
        }, 3000);

        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } else {
        document.getElementsByClassName(
          "confirmation-modal-content"
        )[0].style.backgroundColor = "rgb(189, 80, 80)";
        document.getElementById("modal").style.opacity = 1;
        document.getElementById("modal").style.visibility = "visible";
        document.getElementsByClassName("actual-message")[0].innerHTML =
          "Something went wrong.";
        document.getElementsByClassName(
          "actual-message-description"
        )[0].innerHTML =
          "Please try again later. or email us at the contact details below.";

        setTimeout(function () {
          document.getElementById("modal").style.opacity = 0;
          document.getElementById("modal").style.visibility = "hidden";
        }, 3000);
      }
    })
    .catch(function (error) {
      document.getElementsByClassName(
        "confirmation-modal-content"
      )[0].style.backgroundColor = "rgb(189, 80, 80)";
      document.getElementById("modal").style.opacity = 1;
      document.getElementById("modal").style.visibility = "visible";
      document.getElementsByClassName("actual-message")[0].innerHTML =
        "Something went wrong.";
      document.getElementsByClassName(
        "actual-message-description"
      )[0].innerHTML =
        "Please try again later. or email us at the contact details below.";

      setTimeout(function () {
        document.getElementById("modal").style.opacity = 0;
        document.getElementById("modal").style.visibility = "hidden";
      }, 3000);
      console.log("FAILED...", error);
    });
}
