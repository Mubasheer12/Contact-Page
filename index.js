function sendMail() {
  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  const serviceID = "service_4w9ln8l";
  const templateID = "template_kb6pixc";

  if (!params.name || !params.email || !params.message) {
      alert("Please fill in all the fields before sending :)");
      return;
  }

  emailjs.send(serviceID, templateID, params)
      .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message was sent successfully!");
      })
      .catch((err) => {
          console.log(err);
          alert("Failed to send the message. Please try again.");
      });
}
