window.addEventListener("load",function(){

    let form = document.querySelector("form.form-carga-ediccion");
   
       form.titulo.focus();
   
       form.titulo.addEventListener('blur', () => {
          if (form.titulo.value.length <= 5){
            form.titulo.classList.add("invalido");
            form.titulo.classList.remove("valido");
                displayErrorMessage(form.titulo, 'El titulo debe tener al menos 5 caracteres');
          } else{
            form.titulo.classList.add("valido");
            form.titulo.classList.remove("invalido");
        clearErrorMessages(form.titulo);
   
         }
       })
   
       form.detalle.addEventListener('blur', () => {
        if (form.detalle.value.length <= 20){
          form.detalle.classList.add("invalido");
          form.detalle.classList.remove("valido");
              displayErrorMessage(form.detalle, 'La descripcion debe tener al menos 20 caracteres');
        } else{
          form.detalle.classList.add("valido");
          form.detalle.classList.remove("invalido");
             clearErrorMessages(form.detalle);
 
       }
     })

     form.portada.addEventListener('change', () => {
        validateFile(form.portada);
    });

    function validateFile(file) {
        let fileName = file.value;

        // Verificar si el archivo tiene una extensión permitida
        if (!isValidFileExtension(fileName)) {
            form.portada.classList.add("invalido");
            form.portada.classList.remove("valido");
            displayErrorMessage(form.portada, 'Por favor, seleccione un archivo con una extension valida (JPG, PNG, JPNG, GIF)');
        } else {
            form.portada.classList.add("valido");
            form.portada.classList.remove("invalido");
            clearErrorMessages( form.portada);
        }
    }

    function isValidFileExtension(fileName) {
        const allowedExtensions = ['jpg', 'png', 'jp2', 'gif'];

        let fileExtension = fileName.split('.').pop().toLowerCase();

        return allowedExtensions.includes(fileExtension);
    }

   
   
   
     function displayErrorMessage(inputElement, message) {
        let errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        inputElement.parentNode.appendChild(errorElement);
    }

    function clearErrorMessages(inputElement) {
        let errorElement = inputElement.parentNode.querySelector('span');
        if (errorElement) {
            inputElement.parentNode.removeChild(errorElement);
        }
    }
     
   
       form.onsubmit = (event) => {
                let errores = [];
        
                 if (login.email.value.trim() == ""){
                     errores.push("Campo vacio")
                     login.email.classList.add("invalido");
                     login.email.classList.remove("valido");
                }
    
             }   
             
   })
   
   