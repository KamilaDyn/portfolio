 let form = document.querySelector('#myForm'),
   fields = form.querySelectorAll("[data-error]");

 let inputs = document.querySelectorAll('.input');

 function isNotEmpty(field) {
   return field.value !== "";
 }

 function isAtLeast(field, min) {
   return field.value.length >= min;
 }

 function isEmail(field) {
   return field.value.indexOf("@") !== -1;
 }

 function displayErrors(errors) {

   let ul = document.querySelector("ul.errors");

   if (!ul) {
     ul = document.createElement("ul");
     ul.classList.add("errors");
   }
   ul.innerHTML = "";
   console.log(errors)
   errors.forEach(function (error) {
     let li = document.createElement("li");
     li.textContent = error;
     ul.appendChild(li);
   })
   form.parentNode.insertBefore(ul, form)
 }

 submitBtn = document.querySelector(".submit-btn");

 submitBtn.addEventListener("click", (e) => {

   e.preventDefault();
   const name = document.querySelector("#name"),
     email = document.querySelector("#email"),
     message = document.querySelector("#message"),
     subject = document.querySelector("#subject"),
     status = document.querySelector(".form-status"),
     sentMsg = document.querySelector("h3.response"),
     errorsMsg = document.querySelector(".errors");

   let errors = [];

   for (let i = 0; i < fields.length; i++) {

     let field = fields[i];
     isValid = false;

     if (field.type === "text") {
       isValid = isNotEmpty(field);
     } else if (field.type === "email") {
       isValid = isEmail(field)
     } else if (field.type === "textarea") {
       isValid = isAtLeast(field, 5);
     } else if (field.type === "select-one") {
       isValid = isNotEmpty(field)
     }

     if (!isValid) {
       errors.push(field.dataset.error);
       field.classList.add("error");
     } else {
       field.classList.remove("error");
     }
   }


   /// ajax
   if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(message) && isNotEmpty(subject)) {
     status.innerHTML = "sending....";

     const formdata = new FormData();
     formdata.append("name", name.value);
     formdata.append("email", email.value);
     formdata.append("message", message.value);
     formdata.append('subject', subject.value);

     const ajax = new XMLHttpRequest;

 
     ajax.onreadystatechange = () => {
       if (ajax.readyState === 4 && ajax.status === 200) {
         if (ajax.responseText === "success") {
           status.innerHTML = ajax.responseText;

         } else {
           status.innerHTML = ajax.responseText;
           sentMsg.innerHTML = `Thank you for your message ${name.value}. Have a good day &#128521;`;
           form.reset();
           errorsMsg.parentNode.removeChild(errorsMsg);
         }
       } else if (ajax.readyState === 0 || ajax.status === 404) {
         sentMsg.innerHTML = `I am sorry ${name.value} but could not send your message! Try again or send me email kamila.dynysiuk@gmail.com. Thank you!`

       }
     }
     ajax.open("POST", "php/sendEmail.php", true);
     ajax.send(formdata);


   } else {
     console.log("we have problem")
     displayErrors(errors);

   };

 }, false);