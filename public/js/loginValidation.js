window.addEventListener("load", function () {
  let login = document.querySelector("form.formulario");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let spanEmail = document.getElementById("er-email");
  let spanPassword = document.getElementById("er-password");
  let errorSpanEmail = document.getElementById("er-span-email");
  let errorSpanPassword = document.getElementById("er-span-password");
  let btnLogin = document.getElementById("btn-login");

  let errores = {}; // Declarar errores aquí para que estén disponibles en todo el ámbito de la función

  email.addEventListener("blur", function () {
      if (email.value.trim().length < 3) {
          email.classList.add("invalido");
          email.classList.remove("valido");
          errorSpanEmail.innerText = 'El email debe tener al menos 3 caracteres';
      } else {
          email.classList.add("valido");
          email.classList.remove("invalido");
          errorSpanEmail.innerText = ""; // Limpiar mensaje de error si el campo es válido
      }
  });

  password.addEventListener("blur", function () {
      if (password.value.trim().length < 8) {
          password.classList.add("invalido");
          password.classList.remove("valido");
          errorSpanPassword.innerText = 'La Contraseña debe tener al menos 8 caracteres';
      } else {
          password.classList.add("valido");
          password.classList.remove("invalido");
          errorSpanPassword.innerText = ""; // Limpiar mensaje de error si el campo es válido
      }
  });

  btnLogin.addEventListener("click", function (e) {
      e.preventDefault();

      // Limpiar mensajes de error antes de la validación
      spanEmail.innerText = "";
      spanPassword.innerText = "";

      // Limpiar errores previos
      errores = {};

      // Validar campos
      if (email.value.trim().length < 3) {
          errores.email = 'El email debe tener al menos 3 caracteres';
      }

      if (password.value.trim().length < 8) {
          errores.password = 'La Contraseña debe tener al menos 8 caracteres';
      }

      // Mostrar mensajes de error si existen
      if (Object.keys(errores).length >= 1) {
          spanEmail.innerText = errores.email || "";
          spanPassword.innerText = errores.password || "";
      } else {
          login.submit();
      }
  });
});
