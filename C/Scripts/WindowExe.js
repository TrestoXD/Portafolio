function WindowExe(width, height, content){
    const mainDiv = document.createElement("div");

    mainDiv.classList.add("Window")
    mainDiv.id = "Window"
    mainDiv.style.width = width + 'px';
    mainDiv.style.height= height + 'px';
    mainDiv.innerHTML = content;

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(mainDiv, currentDiv);
}