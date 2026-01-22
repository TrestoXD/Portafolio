window.onerror = function(error){
    ErrorMenu(error);
}

function ErrorMenu(errormsg){
    WindowExe('System Error' ,300 ,100 ,null ,false, true, ` <div style="padding:4px"> <img src="./Styles/icons/Warning.png" style="width:50px"> ${errormsg}</div>`);
}