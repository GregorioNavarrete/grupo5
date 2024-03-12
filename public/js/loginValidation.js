window.addEventListener("load",function(){

 let login = document.querySelector("form.formulario");

    login.email.focus();

    login.email.addEventListener('blur', () => {
       if (login.email.value.trim() == ""){
            login.email.classList.add("invalido");
             login.email.classList.remove("valido");
             displayErrorMessage(login.email, 'El email no puede estar vacío');
       } else{
     login.email.classList.add("valido");
     login.email.classList.remove("invalido");
     clearErrorMessages(login.email);

      }
    })

    login.password.addEventListener('blur', () => {
     if (login.password.value.trim() == ""){
          login.password.classList.add("invalido");
           login.password.classList.remove("valido");
           displayErrorMessage(login.password, 'La contraseña no puede estar vacia');
     } else{
   login.password.classList.add("valido");
   login.password.classList.remove("invalido");
   clearErrorMessages(login.email);
    }
  })




  function displayErrorMessage(inputElement, message) {
    // Mostrar mensaje de error debajo del elemento de entrada
    let errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    inputElement.parentNode.appendChild(errorElement);
}

function clearErrorMessages() {
    let errorMessages = document.querySelectorAll('span');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
    });
}
  

    login.onsubmit = (event) => {
             let errores = [];
     
              if (login.email.value.trim() == ""){
                  errores.push("Campo vacio")
                  login.email.classList.add("invalido");
                  login.email.classList.remove("valido");
             }
 
          }   
          
})

