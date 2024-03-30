window.addEventListener("load", function () {
    let form = document.querySelector("form.formulario");


    const miDiv = document.getElementById("1");
    const nombreInput = document.querySelector('input[name="nombre"]');
    const nombreDiv = document.getElementById("contNombre");
    const nombreErrorBase = document.getElementById("nombreErrorBase");

    nombreInput.addEventListener('blur', () => {
        if (nombreInput.value.trim().length < 2 || nombreInput.value.trim() === "") {
            miDiv.classList.remove("oculto");
            if (nombreInput.value.trim() === "") {
                miDiv.textContent = "El nombre no puede estar vacío";
            } else {
                miDiv.textContent = "El nombre debe tener al menos 2 caracteres";
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
    });



    const miDiv2 = document.getElementById("2");
    const apellidoInput = document.querySelector('input[name="apellido"]');
    const apellidoDiv = document.getElementById("contApeliido");
    const apellidoErrorBase = document.getElementById("apellidoErrorBase");

    apellidoInput.addEventListener('blur', () => {
        console.log('Evento blur activado');
        if (apellidoInput.value.trim().length < 2 || apellidoInput.value.trim() === "") {
            console.log('Condición de error cumplida');
            miDiv2.classList.remove("oculto");
            if (apellidoInput.value.trim() === "") {
                miDiv2.textContent = "El apellido no puede estar vacío";
            } else {
                miDiv2.textContent = "El apellido debe tener al menos 2 caracteres";
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
    });

    const miDiv3 = document.getElementById("3");
    const usuarioInput = document.querySelector('input[name="usuario"]');
    const usuarioDiv = document.getElementById("contUsuario");
    const usuarioErrorBase = document.getElementById("usuarioErrorBase");

    usuarioInput.addEventListener('blur', () => {
        if (usuarioInput.value.trim().length < 2 | usuarioInput.value.trim() === "") {
            miDiv3.classList.remove("oculto");
            if (usuarioInput.value.trim() === "") {
                miDiv3.textContent = "El usuario no puede estar vacío";
            } else {
                miDiv3.textContent = "El usuario debe tener al menos 2 caracteres";
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
    });


    const miDiv4 = document.getElementById("4");
    const emailInput = document.querySelector('input[name="email"]');
    const emailDiv = document.getElementById("contEmail");
    const emailErrorBase = document.getElementById("emailErrorBase");

    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim().length < 2 || emailInput.value.trim() === "") {
            miDiv4.classList.remove("oculto");
            if (emailInput.value.trim() === "") {
                miDiv4.textContent = "El email no puede estar vacío";
            } else {
                miDiv4.textContent = "El email debe tener al menos 2 caracteres";
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
    });


    const miDiv5 = document.getElementById("5");
    const passwordInput = document.querySelector('input[name="password"]');
    const passwordDiv = document.getElementById("contPassword");
    const passwordErrorBase = this.document.getElementById("passwordErrorBase");

    passwordInput.addEventListener('blur', () => {
        if (passwordInput.value.trim().length < 2 || passwordInput.value.trim() === "") {
            miDiv5.classList.remove("oculto");
            if (passwordInput.value.trim() === "") {
                miDiv5.textContent = "La contraseña no puede estar vacía";
            } else {
                miDiv5.textContent = "La contraseña debe tener al menos 2 caracteres";
            }
            passwordDiv.classList.add("error");
            passwordDiv.classList.remove("input-contenedor");
            passwordInput.classList.remove("bien");
            passwordInput.classList.add("mal");
        } else {
            passwordDiv.classList.remove("input-contenedor");
            passwordInput.classList.remove("mal");
            passwordInput.classList.add("bien")
            miDiv5.classList.add("oculto");
            miDiv5.textContent = "";
            passwordDiv.classList.remove("error");
            passwordDiv.classList.add("input-contenedor");
            passwordErrorBase.classList.add("oculto")
            passwordErrorBase.textContent = "";
        }
    });



});



