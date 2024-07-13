function mostrarCalcularIMC() {
    var introduccion = document.getElementById('introduccion');
    var calcularIMC = document.getElementById('calcular-imc');

    
    introduccion.style.display = 'none';
    
    calcularIMC.style.display = 'block';
}

function calcularIMC(){
    let peso=parseFloat(document.getElementById('peso').value);
    let altura=parseFloat(document.getElementById('altura').value);
    
    let spanResultado = document.getElementById('texto-resultado');
    spanResultado.style.display = 'block';
    let spanResultadoIMC = document.getElementById('rango-resultado');
    spanResultadoIMC.style.display = 'block';
    let seccionReinicio = document.getElementById('reinicio');
    seccionReinicio.style.display = 'block';

    let imc=(peso)/(altura**2);      

    
    document.getElementById('resultado').innerHTML =imc.toFixed(2);

    let resultadoIMC;

    if(imc<16){
        resultadoIMC = "Delgadez severa";
    }else if(imc>16 && imc<16.99){
        resultadoIMC = "Delgadez moderada";
    }else if(imc>17 && imc<18.49){
        resultadoIMC = "Delgadez aceptable";
    }else if(imc>18.5 && imc<24.99){
        resultadoIMC = "Peso normal";
    }else if (imc>25 && imc<30){
        resultadoIMC = "Sobrepeso";
    }else if (imc>30 && imc<34.99){
        resultadoIMC ="Obesidad tipo I";
    }else if (imc>35 && imc<40){
        resultadoIMC ="Obesidad tipo II";
    }else if (imc>40 && imc<49.99){
        resultadoIMC ="Obesidad tipo III (obesidad mórbida)";
    }else if (imc>50){
        resultadoIMC ="Obesidad tipo IV o extrema";
    }else{
        alert('Ingrese los datos del paciente')
        return;
    }  
    document.getElementById('resultado-imc').innerHTML = resultadoIMC;
    
}


function reiniciar() {

    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";

    document.getElementById('resultado').innerHTML ="";
    document.getElementById('resultado-imc').innerHTML = "";

}