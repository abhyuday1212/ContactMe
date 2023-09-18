/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = () => {
  Email.send({
    SecureToken: "a39e3a7a-e0ca-44d9-acac-876bd3550a0d",
    To: "apsworks1212@gmail.com",
    From: "apsworks1212@gmail.com",
    Subject: document.getElementById("subject").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email:" +
      document.getElementById("email").value +
      "<br> Phone:" +
      document.getElementById("phone").value +
      "<br> Subject:" +
      document.getElementById("subject").value +
      "<br> Message:" +
      document.getElementById("message").value,
  }).then(
    () => {
      //show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // Clear input fields
      contactForm.reset();
    },
    () => {
      contactMessage.textContent = "Message NOT sent ❌";
    }
  );
};
