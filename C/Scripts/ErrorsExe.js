window.onerror = function(error){
    ErrorMenu(error);
}

function ErrorMenu(errormsg){
    WindowExe('' ,200 ,300 ,null ,false, errormsg);
}