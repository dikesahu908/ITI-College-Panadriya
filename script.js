const scriptURL = "https://script.google.com/macros/s/AKfycbxMlXoLB-RMVzoDpU7aNQ-6ttE2j7oylr3Unwe84bHgbz4Bo3H9xLMXevfJyDyBxoVaBQ/exec";

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const signatureFile = document.getElementById("signature").files[0];
  const photoFile = document.getElementById("photo").files[0];

  Promise.all([getBase64(signatureFile), getBase64(photoFile)])
  .then(([signatureBase64, photoBase64]) => {

    const data = {
      name: document.getElementById("name").value,
      fatherName: document.getElementById("fatherName").value,
      motherName: document.getElementById("motherName").value,
      dob: document.getElementById("dob").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      mobile: document.getElementById("mobile").value,
      gender: document.getElementById("gender").value,
      trade: document.getElementById("trade").value,
      category: document.getElementById("category").value,
      percentage10: document.getElementById("percentage10").value,
      percentage12: document.getElementById("percentage12").value,
      signature: signatureBase64,
      signatureType: signatureFile.type,
      photo: photoBase64,
      photoType: photoFile.type
    };

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      if(response.status === "success"){
        document.getElementById("msg").innerHTML = "Registration Successful!";
        document.getElementById("studentForm").reset();
      } else {
        document.getElementById("msg").innerHTML = "Error submitting form.";
      }
    })
    .catch(error => {
      document.getElementById("msg").innerHTML = "Submission failed!";
    });

  });
});
