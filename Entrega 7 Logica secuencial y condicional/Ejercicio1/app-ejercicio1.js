function calcularPromedio(){
    let a=parseFloat(document.getElementById('1').value);
    let b=parseFloat(document.getElementById('2').value);
    let c=parseFloat(document.getElementById('3').value);
    let d=parseFloat(document.getElementById('4').value);
    let e=parseFloat(document.getElementById('5').value);

    let pro=(a+b+c+d+e)/5;         
    
    document.getElementById('promedio').innerHTML =pro.toFixed(2);
}


document.getElementById('form-promedio').addEventListener("submit", (e) => {
    e.preventDefault();
    calcularPromedio();
});