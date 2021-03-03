let _OPERATION = "";

function ajoutNb(nb){
    _OPERATION = _OPERATION.concat(nb);
    document.getElementById('operation').innerHTML = _OPERATION ;
}

function egal(){
    _TOTAL = eval(_OPERATION);
    //_OPERATION = _OPERATION.concat("=");
    document.getElementById('operation').innerHTML = _OPERATION ;
    document.getElementById('resultat').innerHTML = _TOTAL ;
    _OPERATION = "";
    _OPERATION =  _OPERATION.concat(_TOTAL);
   
}

function reset(){
    _OPERATION = "";
    document.getElementById('operation').innerHTML = _OPERATION ;
    document.getElementById('resultat').innerHTML = "";
}
