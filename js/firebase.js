

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

  const firebaseConfig = {
    //   copy your firebase config informations

        apiKey: "AIzaSyBqN-LLRSqOboGOlVQEgLhDCr6dXKZOmpI",
        authDomain: "estate-dc787.firebaseapp.com",
        databaseURL: "https://estate-dc787-default-rtdb.firebaseio.com",
        projectId: "estate-dc787",
        storageBucket: "estate-dc787.appspot.com",
        messagingSenderId: "1003317904177",
        appId: "1:1003317904177:web:c505336c37758b51136610"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var subject = getElementVal("subject")
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid,subject, msgContent);
  
    //   enable alert
    // document.querySelector(".alert").style.display = "block";
  
    // //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      subject: subject,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


