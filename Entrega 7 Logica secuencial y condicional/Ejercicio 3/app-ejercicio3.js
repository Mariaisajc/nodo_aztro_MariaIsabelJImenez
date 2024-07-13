function mostrarCalcularArea() {
    var introduccion = document.getElementById('introduccion');
    var calcularArea = document.getElementById('calcular-area');

    
    introduccion.style.display = 'none';
    
    calcularArea.style.display = 'block';
}


function calcularArea() {
    let baseP = parseFloat(document.getElementById('base-pared').value);
    let alturaP = parseFloat(document.getElementById('altura-pared').value);
    let baseL = parseFloat(document.getElementById('base-ladrillo').value);
    let alturaL = parseFloat(document.getElementById('altura-ladrillo').value);

    let spanResultado = document.getElementById('texto-resultado')
    spanResultado.style.display = 'block'

    let seccionReinicio = document.getElementById('reinicio');
    seccionReinicio.style.display = 'block';

    if (baseL && alturaL && baseP && alturaP) {
        let res = (baseP * alturaP) / ((baseL+0.015) * (alturaL+0.015));
        document.getElementById('boton').innerHTML =Math.round(res);  
    } else {
        alert('Por favor, completa todos los campos con valores numéricos.');
    }

    
}

function reiniciar() {
    
    document.getElementById('base-pared').value = "";
    document.getElementById('altura-pared').value = "";
    document.getElementById('base-ladrillo').value = "";
    document.getElementById('altura-ladrillo').value = "";

    
    document.getElementById('boton').innerHTML ="";
}