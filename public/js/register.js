window.addEventListener("load", function() {
    let form = document.querySelector("form.formulario");

    function displayErrorMessage(inputElement, message) {
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

    // Para el campo "nombre"
    let nombreInput = form.querySelector('input[name="nombre"]');
    let nombreDiv = nombreInput.parentElement;
    let nombreErrorMessage = document.querySelector('.error-message.errorNombre'); // selecciona el div de mensaje de error correcto
    nombreInput.addEventListener('blur', () => {
        if (nombreInput.value.trim().length < 2){
            nombreDiv.classList.add("error");
            nombreDiv.classList.remove("input-contenedor");
            // establece el mensaje de error personalizado
            nombreErrorMessage.textContent = "El nombre debe tener al menos 2 caracteres";
        } else { 
            nombreDiv.classList.add("input-contenedor");
            nombreDiv.classList.remove("error");
            nombreErrorMessage.textContent = ""; // borra el mensaje de error
        } 
    })

    // Para el campo "apellido"
    let apellidoInput = form.querySelector('input[name="apellido"]');
    let apellidoDiv = apellidoInput.parentElement;
    let apellidoErrorMessage = apellidoInput.nextElementSibling; // selecciona el div de mensaje de error correcto
    apellidoInput.addEventListener('blur', () => {
        if (apellidoInput.value.trim().length < 2){
            apellidoDiv.classList.add("error");
            apellidoDiv.classList.remove("input-contenedor");
            // establece el mensaje de error personalizado
            apellidoErrorMessage.textContent = "El apellido debe tener al menos 2 caracteres";
        } else { 
            apellidoDiv.classList.add("input-contenedor");
            apellidoDiv.classList.remove("error");
            apellidoErrorMessage.textContent = ""; // borra el mensaje de error
        } 
    })

    // Para el campo "password"
    let passwordInput = form.querySelector('input[name="password"]');
    let passwordDiv = passwordInput.parentElement;
    let passwordErrorMessage = passwordInput.nextElementSibling; // selecciona el div de mensaje de error correcto
    passwordInput.addEventListener('blur', () => {
        if (passwordInput.value.trim().length < 8){
            passwordDiv.classList.add("error");
            passwordDiv.classList.remove("input-contenedor");
            // establece el mensaje de error personalizado
            passwordErrorMessage.textContent = "La contraseña debe tener al menos 8 caracteres";
        } else { 
            passwordDiv.classList.add("input-contenedor");
            passwordDiv.classList.remove("error");
            passwordErrorMessage.textContent = ""; // borra el mensaje de error
        } 
    })

    let CpasswordInput = form.querySelector('input[name="confirmPassword"]');
    let CpasswordDiv = CpasswordInput.parentElement;
    let CpasswordErrorMessage = CpasswordInput.nextElementSibling; // selecciona el div de mensaje de error correcto
    CpasswordInput.addEventListener('blur', () => {
        if (CpasswordInput.value.trim().length < 8){
            CpasswordDiv.classList.add("error");
            CpasswordDiv.classList.remove("input-contenedor");
            // establece el mensaje de error personalizado
            CpasswordErrorMessage.textContent = "La contraseña debe tener al menos 8 caracteres";
        } else { 
            CpasswordDiv.classList.add("input-contenedor");
            CpasswordDiv.classList.remove("error");
            CpasswordErrorMessage.textContent = ""; // borra el mensaje de error
        } 
    })

    form.onsubmit = (event) => {
        let errores = [];

         if (nombreInput.value.trim() == ""){
             errores.push("Campo vacio")
             nombreInput.classList.add("error");
             nombreInput.classList.remove("input-contenedor");
        }

        if (apellidoInput.value.trim() == ""){
         errores.push("Campo vacio")
         apellidoInput.classList.add("error");
         apellidoInput.classList.remove("input-contenedor");
    }

    if (passwordInput.value.trim() == ""){
        errores.push("Campo vacio")
        passwordInput.classList.add("error");
        passwordInput.classList.remove("input-contenedor");
   }

   if (login.password.value.trim() == ""){
    errores.push("Campo vacio")
    CpasswordInput.classList.add("error");
    CpasswordInput.classList.remove("input-contenedor");
}

     }


})