document.addEventListener('DOMContentLoaded', () => { 
    const buscador=document.getElementById('buscador');
    const tarjetas=document.querySelectorAllSelectorAll('.tarjeta');

    buscador.addEventListener('input', () => {
        const termino = buscador.value.toLowerCase();

        tarjetas.forEach((tarjeta) => {
            const titulo=tarjeta.querySelector('h3').textContent.toLowerCase();
            const descripcion=tarjeta.querySelector('p').textContent.toLowerCase();

            if (titulo.includes(termino)|| descripcion.includes(termino)) {
                tarjeta.style.display='block';
            } else{
                tarjeta.style.display='none';
            }
        }); 
        });
    });
