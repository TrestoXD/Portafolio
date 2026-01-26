function ContextmenuExe(X, Y ,autohide, content){
    let menu = document.createElement("div")
    menu.id = "contextmenu"
    menu.style = `top:${Y}; left:${X}`

    if(menu.parentNode){
        menu.parentNode.removeChild(menu);
    }

    if(autohide == true){
        menu.onmouseleave = () => contextmenu.outerHTML = '', onmenu = false;    
    }else{
    }

    menu.innerHTML = content;
    document.body.appendChild(menu)
}