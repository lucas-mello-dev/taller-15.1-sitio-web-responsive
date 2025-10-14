document.addEventListener('DOMContentLoaded', () => {
    const btnOpciones = document.getElementById('btnOpciones');
    const contenedorOpciones = document.getElementById('contenedorOpciones');

    btnOpciones.addEventListener('click', (e) => {
        e.preventDefault();
        contenedorOpciones.classList.toggle('d-none');
        contenedorOpciones.classList.toggle('d-block');
    });
});