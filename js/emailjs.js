function sendMail (){
    let parms= {
        name : document.getElementById("p_name").value,
        email : document.getElementById("p_email").value,
        subject : document.getElementById("p_subject").value,
        phone : document.getElementById("p_phone").value,
        message : document.getElementById("p_message").value,
    }

    emailjs.send("service_uze3jc8","template_sf67tbm",parms).then(elert("Email has been sent"))
}



const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("p_name").value,
    email: document.getElementById("p_email").value,
    subject: document.getElementById("p_subject").value,
    phone: document.getElementById("p_phone").value,
    message: document.getElementById("p_message").value,
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzxRNaIqLb3X2Luja7QmkrExfaBIt_Hduo93B0_lcv4t6GXNmlkJndkUS3giAbIRdfs_w/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form. Check console for details.");
  }
});
