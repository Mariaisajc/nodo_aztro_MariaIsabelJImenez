// Función para calcular los litros de pesticida y la longitud de la cerca eléctrica
function calcularTerrenoTrapezoidal(B1, B2, altura) {
    // Calcular el área del terreno trapezoidal
    let area = 0.5 * (B1 + B2) * altura;

    // Calcular los litros de pesticida necesarios (1.5 litros por metro cuadrado)
    let litrosPesticida = 1.5 * area;

    // Calcular el perímetro del terreno trapezoidal (suma de los lados)
    // Utilizaremos el teorema de Pitágoras para encontrar la distancia entre los puntos B y C
    let distancia_BC = Math.sqrt(Math.pow(B2 - B1, 2) + Math.pow(altura, 2));
    
    // Calcular el perímetro sumando las bases y la distancia entre los puntos B y C
    let perimetro = B1 + B2 + distancia_BC;

    // Devolver los resultados
    return {
        litrosPesticida: litrosPesticida,
        longitudCercaElectrica: perimetro
    };
}

// Ejemplo de uso de la función
let resultado = calcularTerrenoTrapezoidal(10, 15, 5);
console.log("Litros de pesticida necesarios:", resultado.litrosPesticida.toFixed(2), "litros");
console.log("Longitud de la cerca eléctrica necesaria:", resultado.longitudCercaElectrica.toFixed(2), "metros");
