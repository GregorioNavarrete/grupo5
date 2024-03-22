const stars = document.querySelectorAll('.estrella');
const starCount = document.querySelector('#starCount'); // Asegúrate de agregar este campo oculto en tu formulario

stars.forEach(function(star, index) {
    star.addEventListener('click', function() {
        for(let i = 0; i <= index; i++) {
            stars[i].classList.add('checked');
        }
        for(let i=index+1; i<stars.length;i++){
            stars[i].classList.remove('checked');
        }
        starCount.value = index + 1; // Actualiza el valor del campo oculto con la cantidad de estrellas seleccionadas
    });
});

