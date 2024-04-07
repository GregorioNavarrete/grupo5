window.addEventListener("load", function () {
    let form = document.querySelector("form.formulario");

    const miDivRegister = document.getElementById("register");
    const miDiv = document.getElementById("1");
    const nombreInput = document.querySelector('input[name="nombre"]');
    const nombreDiv = document.getElementById("contNombre");
    const nombreErrorBase = document.getElementById("nombreErrorBase");

    function validateInput() {
        if (nombreInput.value.trim().length < 5 || nombreInput.value.trim() === "") {
            miDiv.classList.remove("oculto");
            if (nombreInput.value.trim() === "") {
                miDiv.textContent = "El nombre no puede estar vacío";
            } else {
                miDiv.textContent = "El nombre debe tener al menos 5 caracteres";
            }
            nombreDiv.classList.add("error");
            nombreDiv.classList.remove("input-contenedor");
            nombreInput.classList.remove("bien");
            nombreInput.classList.add("mal");
        } else {
            nombreDiv.classList.remove("input-contenedor");
            nombreInput.classList.remove("mal");
            nombreInput.classList.add("bien");
            miDiv.classList.add("oculto");
            miDiv.textContent = "";
            nombreDiv.classList.remove("error");
            nombreDiv.classList.add("input-contenedor");
            nombreErrorBase.classList.add("oculto")
            nombreErrorBase.textContent = "";
        }
    }
    
    nombreInput.addEventListener('input', validateInput);
    nombreInput.addEventListener('blur', validateInput);


    const miDiv2 = document.getElementById("2");
    const apellidoInput = document.querySelector('input[name="apellido"]');
    const apellidoDiv = document.getElementById("contApeliido");
    const apellidoErrorBase = document.getElementById("apellidoErrorBase");

    function validateApellidoInput() {
        if (apellidoInput.value.trim().length < 5 || apellidoInput.value.trim() === "") {
            miDiv2.classList.remove("oculto");
            if (apellidoInput.value.trim() === "") {
                miDiv2.textContent = "El apellido no puede estar vacío";
            } else {
                miDiv2.textContent = "El apellido debe tener al menos 5 caracteres";
            }
            apellidoDiv.classList.add("error");
            apellidoDiv.classList.remove("input-contenedor");
            apellidoInput.classList.remove("bien");
            apellidoInput.classList.add("mal");
        } else {
            apellidoDiv.classList.remove("input-contenedor");
            apellidoInput.classList.remove("mal");
            apellidoInput.classList.add("bien");
            miDiv2.classList.add("oculto");
            miDiv2.textContent = "";
            apellidoDiv.classList.remove("error");
            apellidoDiv.classList.add("input-contenedor");
            apellidoErrorBase.classList.add("oculto")
            apellidoErrorBase.textContent = "";
        }
    }
    
    apellidoInput.addEventListener('input', validateApellidoInput);
    apellidoInput.addEventListener('blur', validateApellidoInput);

    const miDiv3 = document.getElementById("3");
    const usuarioInput = document.querySelector('input[name="usuario"]');
    const usuarioDiv = document.getElementById("contUsuario");
    const usuarioErrorBase = document.getElementById("usuarioErrorBase");

    function validateUsuarioInput() {
        if (usuarioInput.value.trim().length < 4 || usuarioInput.value.trim() === "") {
            miDiv3.classList.remove("oculto");
            if (usuarioInput.value.trim() === "") {
                miDiv3.textContent = "El usuario no puede estar vacío";
            } else {
                miDiv3.textContent = "El usuario debe tener al menos 4 caracteres";
            }
            usuarioDiv.classList.add("error");
            usuarioDiv.classList.remove("input-contenedor");
            usuarioInput.classList.remove("bien");
            usuarioInput.classList.add("mal");
        } else {
            usuarioDiv.classList.remove("input-contenedor");
            usuarioInput.classList.remove("mal");
            usuarioInput.classList.add("bien");
            miDiv3.classList.add("oculto");
            miDiv3.textContent = "";
            usuarioDiv.classList.remove("error");
            usuarioDiv.classList.add("input-contenedor");
            usuarioErrorBase.classList.add("oculto")
            usuarioErrorBase.textContent = "";
        }
    }
    
    usuarioInput.addEventListener('input', validateUsuarioInput);
    usuarioInput.addEventListener('blur', validateUsuarioInput);
    


    const miDiv4 = document.getElementById("4");
    const emailInput = document.querySelector('input[name="email"]');
    const emailDiv = document.getElementById("contEmail");
    const emailErrorBase = document.getElementById("emailErrorBase");

    function validateEmailInput() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim()) || emailInput.value.trim() === "") {
            miDiv4.classList.remove("oculto");
            if (emailInput.value.trim() === "") {
                miDiv4.textContent = "El email no puede estar vacío";
            } else {
                miDiv4.textContent = "Por favor, introduce un email válido";
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
        const hasUpperCase = /[A-Z]/.test(passwordInput.value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value);
    
        if (passwordInput.value.trim().length < 8 || passwordInput.value.trim() === "" || !hasUpperCase || !hasSpecialChar) {
            passwordValue = passwordInput.value;
            miDiv5.classList.remove("oculto");
            if (passwordInput.value.trim() === "") {
                miDiv5.textContent = "La contraseña no puede estar vacía";
            } else if (!hasUpperCase) {
                miDiv5.textContent = "La contraseña debe tener al menos una letra mayúscula";
            } else if (!hasSpecialChar) {
                miDiv5.textContent = "La contraseña debe tener al menos un carácter especial";
            } else {
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
    
    
    
    const miDiv6 = document.getElementById("6");
    const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');
    const confirmPasswordDiv = document.getElementById("contConfirmPassword");
    const confirmPasswordErrorBase = document.getElementById("confirmPasswordErrorBase");
    
    function validateConfirmPasswordInput() {
        const hasUpperCase = /[A-Z]/.test(confirmPasswordInput.value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(confirmPasswordInput.value);
    
        if (confirmPasswordInput.value.trim().length < 8 || confirmPasswordInput.value.trim() === "" || confirmPasswordInput.value.trim() !== passwordInput.value.trim() || !hasUpperCase || !hasSpecialChar) {
            miDiv6.classList.remove("oculto");
            if (confirmPasswordInput.value.trim() === "") {
                miDiv6.textContent = "La confirmación de la contraseña no puede estar vacía";
            } else if (confirmPasswordInput.value.trim().length < 8) {
                miDiv6.textContent = "La confirmación de la contraseña debe tener al menos 8 caracteres";
            } else if (!hasUpperCase) {
                miDiv6.textContent = "La confirmación de la contraseña debe tener al menos una letra mayúscula";
            } else if (!hasSpecialChar) {
                miDiv6.textContent = "La confirmación de la contraseña debe tener al menos un carácter especial";
            } else {
                miDiv6.textContent = "Las contraseñas no coinciden";
            }
            confirmPasswordDiv.classList.add("error");
            confirmPasswordDiv.classList.remove("input-contenedor");
            confirmPasswordInput.classList.remove("bien");
            confirmPasswordInput.classList.add("mal");
        } else {
            confirmPasswordDiv.classList.remove("input-contenedor");
            confirmPasswordInput.classList.remove("mal");
            confirmPasswordInput.classList.add("bien");
            miDiv6.classList.add("oculto");
            miDiv6.textContent = "";
            confirmPasswordDiv.classList.remove("error");
            confirmPasswordDiv.classList.add("input-contenedor");
            confirmPasswordErrorBase.classList.add("oculto");
            confirmPasswordErrorBase.textContent = "";
        }
    }
    
    confirmPasswordInput.addEventListener('input', validateConfirmPasswordInput);
    confirmPasswordInput.addEventListener('blur', validateConfirmPasswordInput);
    






});



