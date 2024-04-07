window.addEventListener("load", function () {
    let form = document.querySelector("form.formulario");

    const miDiv4 = document.getElementById("4");
    const emailInput = document.querySelector('input[name="email"]');
    const emailDiv = document.getElementById("contEmail");
    const emailErrorBase = document.getElementById("emailErrorBase");

    function validateEmailInput() {
        if (emailInput.value.trim() === "") {
            miDiv4.classList.remove("oculto");
            if (emailInput.value.trim() === "") {
                miDiv4.textContent = "El email no puede estar vacío";
            }
            emailDiv.classList.add("error");
            emailDiv.classList.remove("input-contenedor");
            emailInput.classList.remove("bien");
            emailInput.classList.add("mal");
        } else {
            emailDiv.classList.remove("input-contenedor");
            emailInput.classList.remove("mal");
            emailInput.classList.add("bien");
            miDiv4.classList.add("oculto");
            miDiv4.textContent = "";
            emailDiv.classList.remove("error");
            emailDiv.classList.add("input-contenedor");
            emailErrorBase.classList.add("oculto")
            emailErrorBase.textContent = "";
        }
    }
    
    emailInput.addEventListener('input', validateEmailInput);
    emailInput.addEventListener('blur', validateEmailInput);


    const miDiv5 = document.getElementById("5");
    const passwordInput = document.querySelector('input[name="password"]');
    const passwordDiv = document.getElementById("contPassword");
    const passwordErrorBase = this.document.getElementById("passwordErrorBase");
    
    function validatePasswordInput() {
        if (passwordInput.value.trim().length < 8 || passwordInput.value.trim() === "") {
            miDiv5.classList.remove("oculto");
            if (passwordInput.value.trim() === "") {
                miDiv5.textContent = "La contraseña no puede estar vacía";
            }else{
                miDiv5.textContent = "La contraseña debe tener al menos 8 caracteres";
            }
            passwordDiv.classList.add("error");
            passwordDiv.classList.remove("input-contenedor");
            passwordInput.classList.remove("bien");
            passwordInput.classList.add("mal");
        } else {
            passwordDiv.classList.remove("input-contenedor");
            passwordInput.classList.remove("mal");
            passwordInput.classList.add("bien");
            miDiv5.classList.add("oculto");
            miDiv5.textContent = "";
            passwordDiv.classList.remove("error");
            passwordDiv.classList.add("input-contenedor");
            passwordErrorBase.classList.add("oculto")
            passwordErrorBase.textContent = "";
        }
    }
    
    passwordInput.addEventListener('input', validatePasswordInput);
    passwordInput.addEventListener('blur', validatePasswordInput);

});

