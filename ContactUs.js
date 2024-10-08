// Individual Input Fields
const nameInput = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
// All labels
const labels = document.querySelectorAll("label");
// All Input fields
const inputs = document.querySelectorAll(['input']);

// Add class to move the label when input is focused or blured
inputs.forEach( (input)=>{
  input.addEventListener('focus', ()=>{
    // console.log("Input focused:",input); When input element gets focused add the moveLabel class
    input.nextElementSibling.classList.add("moveLabel");
    input.nextElementSibling.nextElementSibling.style.display="none"; // Remove error paragraph (if exists) when input element gets focus
    if(input.classList.contains("error-border")){
      input.classList.remove("error-border");
    }
  })
  input.addEventListener('blur', ()=>{
    // console.log("Input Lost focus:",input); When input element loses focus AND it is empty remoe the moveLabel class
    if(input.value===''){
      // console.log("is empty");
      input.nextElementSibling.classList.remove("moveLabel");
    }

  })
})
// Add class to move the label when textarea is focused or blured
message.addEventListener('focus',()=>{
  // console.log("Text area focused");
  message.nextElementSibling.classList.add("moveLabel");
  message.nextElementSibling.nextElementSibling.style.display="none";

})
message.addEventListener('blur',()=>{
  if(message.value===''){
    message.nextElementSibling.classList.remove("moveLabel");
  }
})
function validateForm(e){
  e.preventDefault();
  let isValid = true;

  // Full Name Check
  if(nameInput.value.trim()===""){
    isValid=false;
    document.getElementById("nameError").style.display="block";
    nameInput.classList.add("error-border")
    // nameInput.classList.add("error-border");
  }
  // else{
  //   nameInput.classList.remove("error-border");
  //   nameInput.classList.add("valid-border");

  // }
  // Phone Check
  const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number
  if (number.value.trim() === "" || !phoneRegex.test(number.value.trim())) {
    isValid = false;
    document.getElementById("phoneError").style.display="block";
    number.classList.add("error-border")
  }
  // Email Check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
    isValid = false;
    document.getElementById("emailError").style.display="block";
    email.classList.add("error-border")
  }
  // Subject Check
  if(subject.value.trim()===""){
    isValid = false;
    document.getElementById("subjectError").style.display="block";
    subject.classList.add("error-border");
  }
  // Message Check
  if(message.value.trim()==="" || message.value.length<10){
    isValid = false;
    document.getElementById("messageError").style.display="block";
    message.classList.add("error-border")
  }

  // Form Check
  if (isValid) {
    Swal.fire({
      title: "Success!",
      text: "Your form has been submitted successfully!",
      icon: "success"
    }).then( () =>{
      document.getElementById('form').submit();
      document.getElementById('form').reset();
    });
  }
}