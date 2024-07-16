function inicioCalculo(){
    let diasLaborados=parseFloat(document.getElementById('dias-laborados').value);
    let horasDiurna=parseFloat(document.getElementById('horas-diurna').value);
    let horasNocturna=parseFloat(document.getElementById('horas-nocturna').value);
    let horasFestivo=parseFloat(document.getElementById('horas-festivo').value);     
    
    let diasMes=diasLaborados*43000;
    let horasD=horasDiurna*6915;
    let horasN=horasNocturna*9681;
    let horasF=horasFestivo*11064;

    let totalSinDeducc = diasMes + horasD + horasN + horasF;
    document.getElementById('resultado-total').innerHTML = '$' + Math.round(totalSinDeducc);
    let deducc = totalSinDeducc * 0.08;
    document.getElementById('deduccion').innerHTML = '$' + Math.round(deducc);
    let deduccAli = totalSinDeducc * 0.03;
    document.getElementById('deducc-alimentacion').innerHTML = '$' + Math.round(deduccAli);

    let calculoLiquidacion = totalSinDeducc - deducc - deduccAli;

    document.getElementById('resultado').innerHTML = '$' + Math.round(calculoLiquidacion);

}

function reiniciar(){
    document.getElementById('dias-laborados').value="";
    document.getElementById('horas-diurna').value="";
    document.getElementById('horas-nocturna').value="";
    document.getElementById('horas-festivo').value="";

    document.getElementById('resultado-total').innerHTML ="";
    document.getElementById('deduccion').innerHTML ="";
    document.getElementById('deducc-alimentacion').innerHTML ="";
    document.getElementById('resultado').innerHTML ="";


}