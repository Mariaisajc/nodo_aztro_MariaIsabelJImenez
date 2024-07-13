function calcular() {
    
    let base1 = parseFloat(document.getElementById('base1').value);
    let base2 = parseFloat(document.getElementById('base2').value);
    let altura = parseFloat(document.getElementById('altura').value);

    
    let resultados = calcularTerrenoTrapezoidal(base1, base2, altura);

    let resultadosDiv = document.getElementById('resultados');resultadosDiv.innerHTML = 
    `   <p>"Litros de pesticida necesarios: ${resultados.litrosPesticida.toFixed(2)} litros"</p>
        <p>"Longitud de la cerca eléctrica necesaria: ${resultados.longitudCercaElectrica.toFixed(2)} metros"</p>
    `;
}


function calcularTerrenoTrapezoidal(B1, B2, altura) {
    
    let area = 0.5 * (B1 + B2) * altura;

    let litrosPesticida = 1.5 * area;

    
    let distancia_BC = Math.sqrt(Math.pow(B2 - B1, 2) + Math.pow(altura, 2));
    let perimetro = B1 + B2 + distancia_BC;

    
    return {
        litrosPesticida: litrosPesticida,
        longitudCercaElectrica: perimetro
    };
}