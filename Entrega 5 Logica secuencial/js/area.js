function iniciarCalculo() {
    document.getElementById('boton-figura').addEventListener('click', selecionarFigura);
    document.getElementById('boton-formula').addEventListener('click', selecionarFormula);
    document.getElementById('boton-calcular').addEventListener('click', calcularGeo);
    document.getElementById('boton-reiniciar').addEventListener('click', reiniciarGeo);

    // Ocultar el botón de reinicio
    let seccionReinicio = document.getElementById('reiniciar')
    seccionReinicio.style.display = 'none'

   // Ocultar boton reiniciar

   let seccionCalcular = document.getElementById('boton-cal')
   seccionCalcular.style.display = 'block'
   

}

function selecionarFigura() {
    const inputRectangulo = document.getElementById('rectangulo');
    const inputCirculo = document.getElementById('circulo');
    const spanFiguraSelecc = document.getElementById('figura-seleccionada');

    if (inputRectangulo.checked) {
        spanFiguraSelecc.innerHTML = 'Rectangulo';
    } else if (inputCirculo.checked) {
        spanFiguraSelecc.innerHTML = 'Circulo';
    } else {
        alert("No seleccionaste ninguna figura. Elige una y prepara los datos.");
        return;
    }

}

function selecionarFormula() {
    const inputPerimetro = document.getElementById('perimetro');
    const inputArea = document.getElementById('area');
    const spanFormulaSelecc = document.getElementById('formula-seleccionada');

    if (inputPerimetro.checked) {
        spanFormulaSelecc.innerHTML = 'Perimetro';
    } else if (inputArea.checked) {
        spanFormulaSelecc.innerHTML = 'Área';
    } else {
        alert("No seleccionaste ninguna fórmula. Elige una y prepara los datos.");
        return;
    }

let seccionCalcular = document.getElementById('boton-cal')
seccionCalcular.style.display = 'block'

}


function calcularGeo() {
    const figura = document.getElementById('figura-seleccionada').innerHTML.trim().toLowerCase();
    const formula = document.querySelector('input[name="formula"]:checked').id;
    const dato1 = parseFloat(document.getElementById('altura').value);
    const dato2 = parseFloat(document.getElementById('base').value);
  
      

    if (isNaN(dato1) || isNaN(dato2)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    if (figura === 'rectangulo') {
        if (formula === 'area') {
            resultado = dato1 * dato2;
        } else if (formula === 'perimetro') {
            resultado = 2 * (dato1 + dato2);
        }
    } else if (figura === 'circulo') {
        if (formula === 'area') {
            resultado = Math.PI * Math.pow(dato1, 2);
        } else if (formula === 'perimetro') {
            resultado = 2 * Math.PI * dato1;
        }
    }

    if (isNaN(resultado)) {
        alert("No se pudo calcular el resultado. Por favor, verifica los valores ingresados.");
    } else {
        crearMensaje(resultado);
    }

    let seccionReinicio = document.getElementById('reiniciar')
    seccionReinicio.style.display = 'block'

    let seccionCalcular = document.getElementById('boton-cal')
    seccionCalcular.style.display = 'block'

}

function crearMensaje(resultado) {
    let mensajes = document.getElementById('mensajes');
    mensajes.innerHTML = ''; // Limpiamos mensajes anteriores
    let parrafo = document.createElement('p');
    parrafo.textContent = 'El resultado es: ' + resultado.toFixed(2); // Mostrar resultado con dos decimales
    mensajes.appendChild(parrafo);
}



function reiniciarGeo() {
    location.reload();
}

window.addEventListener('load', iniciarCalculo);
