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

let resultado = calcularTerrenoTrapezoidal(10, 15, 5);
console.log("Litros de pesticida necesarios:", resultado.litrosPesticida.toFixed(2), "litros");
console.log("Longitud de la cerca eléctrica necesaria:", resultado.longitudCercaElectrica.toFixed(2), "metros");
