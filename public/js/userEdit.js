window.addEventListener("load", function () {

    const miDivs = document.querySelectorAll("[id='1']");
    const nombreInputs = document.querySelectorAll('input[name="nombre"]');
    const nombreErrorBases = document.querySelectorAll("[id='nombreErrorBase']");

    nombreInputs.forEach(function (nombreInput, index) {
        function validateInput() {
            const miDiv = miDivs[index];
            const nombreErrorBase = nombreErrorBases[index];

            if (nombreInput.value.trim().length < 5 || nombreInput.value.trim() === "") {
                miDiv.classList.remove("oculto");
                if (nombreInput.value.trim() === "") {
                    miDiv.textContent = "El nombre no puede estar vacío";
                } else {
                    miDiv.textContent = "El nombre debe tener al menos 5 caracteres";
                }
                nombreInput.classList.remove("bien");
                nombreInput.classList.add("mal");
            } else {
                nombreInput.classList.remove("mal");
                nombreInput.classList.add("bien");
                miDiv.classList.add("oculto");
                miDiv.textContent = "";
                nombreErrorBase.classList.add("oculto");
                nombreErrorBase.textContent = "";
            }
        }

        nombreInput.addEventListener('input', validateInput);
        nombreInput.addEventListener('blur', validateInput);
    });




    const miDivs2 = document.querySelectorAll("[id='2']");
    const apellidoInputs = document.querySelectorAll('input[name="apellido"]');
    const apellidoErrorBases = document.querySelectorAll("[id='apellidoErrorBase']");

    apellidoInputs.forEach(function (apellidoInput, index) {
        function validateApellidoInput() {
            const miDiv2 = miDivs2[index];
            const apellidoErrorBase = apellidoErrorBases[index];

            if (apellidoInput.value.trim().length < 5 || apellidoInput.value.trim() === "") {
                miDiv2.classList.remove("oculto");
                if (apellidoInput.value.trim() === "") {
                    miDiv2.textContent = "El apellido no puede estar vacío";
                } else {
                    miDiv2.textContent = "El apellido debe tener al menos 5 caracteres";
                }
                apellidoInput.classList.remove("bien");
                apellidoInput.classList.add("mal");
            } else {
                apellidoInput.classList.remove("mal");
                apellidoInput.classList.add("bien");
                miDiv2.classList.add("oculto");
                miDiv2.textContent = "";
                apellidoErrorBase.classList.add("oculto");
                apellidoErrorBase.textContent = "";
            }
        }

        apellidoInput.addEventListener('input', validateApellidoInput);
        apellidoInput.addEventListener('blur', validateApellidoInput);
    });


    const miDivs3 = document.querySelectorAll(".error-message[id='3']");
    const usuarioInputs = document.querySelectorAll('input[name="usuario"]');
    const usuarioErrorBases = document.querySelectorAll(".error-message[id='usuarioErrorBase']");

    usuarioInputs.forEach(function (usuarioInput, index) {
        function validateUsuarioInput() {
            const miDiv3 = miDivs3[index];
            const usuarioErrorBase = usuarioErrorBases[index];

            if (usuarioInput.value.trim().length < 4 || usuarioInput.value.trim() === "") {
                miDiv3.classList.remove("oculto");
                if (usuarioInput.value.trim() === "") {
                    miDiv3.textContent = "El usuario no puede estar vacío";
                } else {
                    miDiv3.textContent = "El usuario debe tener al menos 4 caracteres";
                }
                usuarioInput.classList.remove("bien");
                usuarioInput.classList.add("mal");
            } else {
                usuarioInput.classList.remove("mal");
                usuarioInput.classList.add("bien");
                miDiv3.classList.add("oculto");
                miDiv3.textContent = "";
                usuarioErrorBase.classList.add("oculto");
                usuarioErrorBase.textContent = "";
            }
        }

        usuarioInput.addEventListener('input', validateUsuarioInput);
        usuarioInput.addEventListener('blur', validateUsuarioInput);
    });




    const miDivs4 = document.querySelectorAll(".error-message[id='4']");
    const emailInputs = document.querySelectorAll('input[name="email"]');
    const emailErrorBases = document.querySelectorAll(".error-message[id='emailErrorBase']");

    emailInputs.forEach(function (emailInput, index) {
        function validateEmailInput() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const miDiv4 = miDivs4[index];
            const emailErrorBase = emailErrorBases[index];

            if (!emailRegex.test(emailInput.value.trim()) || emailInput.value.trim() === "") {
                miDiv4.classList.remove("oculto");
                if (emailInput.value.trim() === "") {
                    miDiv4.textContent = "El email no puede estar vacío";
                } else {
                    miDiv4.textContent = "Por favor, introduce un email válido";
                }
                emailInput.classList.remove("bien");
                emailInput.classList.add("mal");
            } else {
                emailInput.classList.remove("mal");
                emailInput.classList.add("bien");
                miDiv4.classList.add("oculto");
                miDiv4.textContent = "";
                emailErrorBase.classList.add("oculto");
                emailErrorBase.textContent = "";
            }
        }

        emailInput.addEventListener('input', validateEmailInput);
        emailInput.addEventListener('blur', validateEmailInput);
    });


    const miDivs5 = document.querySelectorAll(".error-message[id='5']");
    const passwordInputs = document.querySelectorAll('input[name="password"]');
    const passwordErrorBases = document.querySelectorAll(".error-message[id='passwordErrorBase']");

    passwordInputs.forEach(function (passwordInput, index) {
        function validatePasswordInput() {
            const hasUpperCase = /[A-Z]/.test(passwordInput.value);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value);
            const miDiv5 = miDivs5[index];
            const passwordErrorBase = passwordErrorBases[index];

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
                passwordInput.classList.remove("bien");
                passwordInput.classList.add("mal");
            } else {
                passwordInput.classList.remove("mal");
                passwordInput.classList.add("bien");
                miDiv5.classList.add("oculto");
                miDiv5.textContent = "";
                passwordErrorBase.classList.add("oculto");
                passwordErrorBase.textContent = "";
            }
        }

        passwordInput.addEventListener('input', validatePasswordInput);
        passwordInput.addEventListener('blur', validatePasswordInput);
    });


    const miDiv6 = document.querySelector(".error-message[id='6']");
const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');
const confirmPasswordErrorBase = document.querySelector(".error-message[id='confirmPasswordErrorBase']");

function validateConfirmPasswordInput() {
    const hasUpperCase = /[A-Z]/.test(confirmPasswordInput.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(confirmPasswordInput.value);

    miDiv6.classList.remove("oculto");
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
            confirmPasswordInput.classList.remove("bien");
            confirmPasswordInput.classList.add("mal");
        } else {
            confirmPasswordInput.classList.remove("mal");
            confirmPasswordInput.classList.add("bien");
            miDiv6.classList.add("oculto");
            miDiv6.textContent = "";
            confirmPasswordErrorBase.classList.add("oculto");
            confirmPasswordErrorBase.textContent = "";
        }
}

confirmPasswordInput.addEventListener('input', validateConfirmPasswordInput);
confirmPasswordInput.addEventListener('blur', validateConfirmPasswordInput);


    
    
    









    var editPasswords = document.querySelectorAll('.editPassword');
    var userInputDivs = document.querySelectorAll('.contraseñaActual');

    editPasswords.forEach(function (editPassword) {
        editPassword.addEventListener('click', function () {
            userInputDivs.forEach(function (userInputDiv) {
                if (userInputDiv.classList.contains('invisible')) {
                    userInputDiv.classList.remove('invisible');
                    userInputDiv.classList.add('visible');
                } else {
                    userInputDiv.classList.remove('visible');
                    userInputDiv.classList.add('invisible');
                }
            });
        });
    });


});